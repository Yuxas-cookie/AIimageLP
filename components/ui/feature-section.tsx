"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  // レスポンシブ対応
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // スクロールベースのステップ切り替え
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const containerTop = rect.top
      const containerHeight = rect.height
      const viewportHeight = window.innerHeight

      // コンテナが画面内にある場合
      if (containerTop < viewportHeight && containerTop + containerHeight > 0) {
        // スクロール進行度を計算（0-1）
        const scrollProgress = Math.max(0, Math.min(1,
          (viewportHeight / 2 - containerTop) / (containerHeight - viewportHeight / 2)
        ))

        // 進行度に応じてステップを決定
        const newStep = Math.min(
          features.length - 1,
          Math.floor(scrollProgress * features.length)
        )

        setCurrentFeature(newStep)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期実行

    return () => window.removeEventListener('scroll', handleScroll)
  }, [features.length])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="sticky top-16 z-20 py-6 mb-8 shadow-md" style={{background: 'linear-gradient(135deg, rgb(249, 250, 251) 0%, rgba(219, 234, 254, 0.3) 50%, rgb(249, 250, 251) 100%)'}}>
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            {title}
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-8 md:px-12 pb-8 md:pb-12">

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10" style={{ minHeight: `${features.length * 100}vh` }}>
          <div
            className="order-2 md:order-1 md:sticky md:top-44 flex flex-col justify-center space-y-3 md:space-y-4"
            style={{ height: isDesktop ? 'calc(100vh - 11rem)' : 'auto' }}
          >
            {features.map((feature, index) =>
              index <= currentFeature && (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    className={cn(
                      "w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center border-2 flex-shrink-0",
                      "bg-gradient-to-br from-navy via-blue-500 to-navy-light border-navy text-white shadow-lg"
                    )}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <span className="text-sm md:text-base font-bold">✓</span>
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 bg-gradient-to-r from-navy via-blue-600 to-navy-light bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                      {feature.title || feature.step}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative overflow-hidden rounded-lg md:sticky md:top-44 shadow-2xl border-2 border-navy/10"
            )}
            style={{ height: isDesktop ? 'calc(100vh - 11rem)' : '200px' }}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform transform"
                        width={1000}
                        height={500}
                      />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
