import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";
import { cn } from "@/lib/utils";

interface MasonryItem {
  id: string | number;
  height: number;
  image: string;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface MasonryProps {
  data: MasonryItem[];
}

function Masonry({ data }: MasonryProps) {
  const [columns, setColumns] = useState<number>(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setColumns(3);
      } else {
        setColumns(2);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setContainerWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [columnHeights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const currentColumnHeights = new Array(columns).fill(0);
    const calculatedGridItems: GridItem[] = [];

    data.forEach((item) => {
      const targetColumnIndex = currentColumnHeights.indexOf(
        Math.min(...currentColumnHeights)
      );

      const itemCalculatedWidth = containerWidth / columns;
      const itemCalculatedHeight = item.height;

      const x = itemCalculatedWidth * targetColumnIndex;
      const y = currentColumnHeights[targetColumnIndex];

      currentColumnHeights[targetColumnIndex] += itemCalculatedHeight;

      calculatedGridItems.push({
        ...item,
        x,
        y,
        width: itemCalculatedWidth,
        height: itemCalculatedHeight,
      });
    });

    return [currentColumnHeights, calculatedGridItems];
  }, [columns, data, containerWidth]);

  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  const transitions = useTransition<
    GridItem,
    { x: number; y: number; width: number; height: number; opacity: number }
  >(hasAnimated ? gridItems : [], {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({
      x,
      y: y + 50,
      width,
      height,
      opacity: 0,
    }),
    enter: ({ x, y, width, height }) => ({
      x,
      y,
      width,
      height,
      opacity: 1,
    }),
    update: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 1, tension: 280, friction: 60 },
    trail: 30,
  });

  return (
    <div
      ref={(node) => {
        if (node) {
          (ref as any).current = node;
          (containerRef as any).current = node;
        }
      }}
      className={cn("relative w-full")}
      style={{ height: Math.max(...columnHeights) || 0 }}
    >
      {transitions((style, item) => (
        <a.div
          key={item.id}
          style={style}
          className="absolute p-[15px] [will-change:transform,width,height,opacity]"
        >
          <div className="relative w-full h-full rounded-[4px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition duration-300 ease hover:scale-105 bg-white">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </a.div>
      ))}
    </div>
  );
}

export const Component = Masonry;
