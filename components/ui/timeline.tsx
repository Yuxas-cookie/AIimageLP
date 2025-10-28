"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    // Recalculate on window resize
    window.addEventListener('resize', updateHeight);

    // Use MutationObserver to detect content changes
    const observer = new MutationObserver(updateHeight);
    if (ref.current) {
      observer.observe(ref.current, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {(() => {
          const groups: { title: string; items: typeof data }[] = [];
          data.forEach((item) => {
            if (groups.length === 0 || groups[groups.length - 1].title !== item.title) {
              groups.push({ title: item.title, items: [item] });
            } else {
              groups[groups.length - 1].items.push(item);
            }
          });

          return groups.map((group, groupIndex) => (
            <div key={groupIndex} className="relative pb-5 md:pb-20">
              {/* Sticky title for the entire group */}
              <div className="sticky top-20 md:top-32 pointer-events-none items-center" style={{ zIndex: 30 + groupIndex }}>
                {/* Desktop title */}
                <div className="hidden md:flex">
                  <div className="absolute left-3 h-10 w-10 rounded-full flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-800 dark:bg-neutral-700 border border-neutral-600 dark:border-neutral-500 p-2" />
                  </div>
                  <h3 className="absolute left-3 pl-20 text-5xl font-bold text-neutral-500 dark:text-neutral-500 whitespace-pre-line">
                    {group.title}
                  </h3>
                </div>

                {/* Mobile title */}
                <div className="md:hidden block">
                  <h3 className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 whitespace-pre-line pl-20 pr-4">
                    {group.title}
                  </h3>
                </div>
              </div>

              {/* Items in the group */}
              {group.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex justify-start pt-10 md:pt-40 md:gap-10"
                >
                  <div className="flex flex-col md:flex-row z-20 items-center self-start max-w-xs lg:max-w-sm md:w-full">
                    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                    </div>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                    {item.content}{" "}
                  </div>
                </div>
              ))}

              {/* Add spacing between groups (except for the last group) */}
              {groupIndex < groups.length - 1 && (
                <div className="pt-10 md:pt-40" />
              )}
            </div>
          ));
        })()}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
