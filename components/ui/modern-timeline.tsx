"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { CheckCircle, Clock, Circle } from "lucide-react"

export interface TimelineItem {
  title: string
  description: string
  date?: string
  image?: string
  status?: "completed" | "current" | "upcoming"
  category?: string
  amount?: string
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const getStatusConfig = (status: TimelineItem["status"]) => {
  const configs = {
    completed: {
      progressColor: "bg-success",
      borderColor: "border-success/20",
      badgeBg: "bg-success/10",
      badgeText: "text-success"
    },
    current: {
      progressColor: "bg-blue-600 dark:bg-blue-400",
      borderColor: "border-blue-600/20 dark:border-blue-400/20",
      badgeBg: "bg-blue-100 dark:bg-blue-900/30",
      badgeText: "text-blue-800 dark:text-blue-200"
    },
    upcoming: {
      progressColor: "bg-warning",
      borderColor: "border-warning/20",
      badgeBg: "bg-warning/10",
      badgeText: "text-warning"
    }
  }

  return configs[status || "upcoming"]
}

const getStatusIcon = (status: TimelineItem["status"]) => {
  switch (status) {
    case "completed":
      return CheckCircle
    case "current":
      return Clock
    default:
      return Circle
  }
}

export function Timeline({ items, className }: TimelineProps) {
  if (!items || items.length === 0) {
    return (
      <div className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}>
        <p className="text-center text-muted-foreground">No timeline items to display</p>
      </div>
    )
  }

  return (
    <section
      className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}
      role="list"
      aria-label="Timeline of events and milestones"
    >
      <div className="relative">
        <div
          className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border"
          aria-hidden="true"
        />

        <motion.div
          className="absolute left-4 sm:left-6 top-0 w-px bg-primary origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{
            scaleY: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              delay: 0.2
            }
          }}
          viewport={{ once: true }}
          aria-hidden="true"
        />

        <div className="space-y-8 sm:space-y-12 relative">
          {items.map((item, index) => {
            const config = getStatusConfig(item.status)
            const IconComponent = getStatusIcon(item.status)

            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                viewport={{ once: true, margin: "-30px" }}
                role="listitem"
                aria-label={`Timeline item ${index + 1}: ${item.title}`}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      tabIndex={0}
                      role="img"
                      aria-label={`Avatar for ${item.title}`}
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-background shadow-lg relative z-10">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={`${item.title} avatar`}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <IconComponent
                              className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground/70"
                              aria-hidden="true"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex-1 min-w-0"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className={cn(
                      "border transition-all duration-300 hover:shadow-md relative",
                      "bg-card/50 backdrop-blur-sm",
                      config.borderColor,
                      "group-hover:border-primary/30"
                    )}>
                      <CardContent className="p-4 sm:p-6">
                        <div className="mb-4">
                          <div className="flex items-center justify-between gap-4 mb-3">
                            <motion.h3
                              className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                              layoutId={`title-${index}`}
                            >
                              {item.title}
                            </motion.h3>

                            {item.amount && (
                              <motion.div
                                className="relative flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 px-5 py-2.5 rounded-lg border-2 border-amber-400/40 shadow-md">
                                  <div className="absolute inset-0 bg-amber-400/10 blur-lg rounded-lg" aria-hidden="true" />
                                  <div className="relative flex items-center gap-2">
                                    <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 whitespace-nowrap">
                                      達成金額
                                    </div>
                                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent whitespace-nowrap">
                                      {item.amount}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>

                          {(item.category || item.date) && (
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              {item.category && (
                                <span className="font-semibold text-base text-gray-600 dark:text-gray-400">{item.category}</span>
                              )}
                              {item.category && item.date && (
                                <span className="w-1 h-1 bg-muted-foreground rounded-full" aria-hidden="true" />
                              )}
                              {item.date && (
                                <time dateTime={item.date}>{item.date}</time>
                              )}
                            </div>
                          )}
                        </div>

                        <motion.p
                          className="text-sm text-gray-700 dark:text-gray-300 leading-loose mb-4"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {item.description}
                        </motion.p>

                        <div
                          className="h-1 bg-muted rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuenow={item.status === "completed" ? 100 : item.status === "current" ? 65 : 25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`Progress for ${item.title}`}
                        >
                          <motion.div
                            className={cn("h-full rounded-full", config.progressColor)}
                            initial={{ width: 0 }}
                            animate={{
                              width: item.status === "completed" ? "100%" :
                                     item.status === "current" ? "65%" : "25%"
                            }}
                            transition={{
                              duration: 1.2,
                              delay: index * 0.2 + 0.8,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="absolute left-4 sm:left-6 -bottom-6 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
              delay: items.length * 0.1 + 0.3,
              type: "spring",
              stiffness: 400
            }
          }}
          viewport={{ once: true }}
          aria-hidden="true"
        >
          <div className="w-3 h-3 bg-primary rounded-full shadow-sm" />
        </motion.div>
      </div>
    </section>
  )
}
