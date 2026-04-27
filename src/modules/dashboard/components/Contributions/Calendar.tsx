"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { formatDate } from "@/utils/formatter";
import { Contributions } from "@/common/types/response";

const WEEK_GAP = 2.9;
const DAY_DOT_SIZE = 12;
const WEEK_COLUMN_WIDTH = DAY_DOT_SIZE + WEEK_GAP;

interface CalendarProps {
  data?: Contributions;
}

export default function Calendar({ data }: CalendarProps) {
  const weeks = useMemo(() => data?.weeks ?? [], [data?.weeks]);
  const months = useMemo(() => data?.months ?? [], [data?.months]);
  const CONTRIBUTION_COLORS = useMemo(() => data?.colors ?? [], [data?.colors]);
  const TOTAL_CONTRIBUTIONS = data?.totalContributions ?? 0;

  const RANDOM_DELAY_BY_DATE = useMemo(() => {
    const delayMap = new Map<string, number>();

    weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        delayMap.set(day.date, Math.random() * 0.6);
      });
    });

    return delayMap;
  }, [weeks]);

  const MONTH_LABELS = useMemo(() => {
    const labels = months
      .map((month) => {
        const monthKey = month.firstDay.slice(0, 7);
        const startWeekIndex = weeks.findIndex((week) =>
          week.contributionDays.some((day) => day.date.startsWith(monthKey))
        );

        return {
          name: month.name,
          firstDay: month.firstDay,
          left: startWeekIndex >= 0 ? startWeekIndex * WEEK_COLUMN_WIDTH : null,
        };
      })
      .filter((month) => month.left !== null);

    return labels.filter((month, index) => {
      if (index === 0) {
        return true;
      }

      const previousMonth = labels[index - 1];
      if (previousMonth.left === null || month.left === null) {
        return false;
      }

      return month.left - previousMonth.left >= WEEK_COLUMN_WIDTH * 2;
    });
  }, [months, weeks, WEEK_COLUMN_WIDTH]);

  return (
    <section>
      <div className="relative flex flex-col">
        <div className="flex justify-end lg:justify-start">
          <div
            className="relative"
            style={{ width: weeks.length * WEEK_COLUMN_WIDTH - WEEK_GAP }}
          >
            <ul className="relative h-5 overflow-hidden text-xs dark:text-neutral-400">
              {MONTH_LABELS.map((month) => (
                <li
                  key={month.firstDay}
                  className="absolute top-0"
                  style={{ left: month.left ?? 0 }}
                >
                  {month.name}
                </li>
              ))}
            </ul>
            <div
              className="flex overflow-hidden"
              style={{ columnGap: `${WEEK_GAP}px` }}
            >
              {weeks.map((week) => (
                <div key={week.firstDay}>
                  {week.contributionDays.map((contribution) => {
                    const backgroundColor =
                      contribution.contributionCount > 0 && contribution.color;
                    const animateDelay =
                      RANDOM_DELAY_BY_DATE.get(contribution.date) ?? 0;
                    const tooltipText =
                      contribution.contributionCount === 0
                        ? `No contributions on ${formatDate(contribution.date)}`
                        : `${
                            contribution.contributionCount
                          } contributions on ${formatDate(contribution.date)}`;

                    return (
                      <Tooltip key={contribution.date}>
                        <TooltipTrigger asChild>
                          <motion.span
                            initial="initial"
                            animate="animate"
                            variants={{
                              initial: { opacity: 0, translateY: -20 },
                              animate: {
                                opacity: 1,
                                translateY: 0,
                                transition: { delay: animateDelay },
                              },
                            }}
                            className="block my-[2.9px] h-[12px] w-[12px] rounded-sm bg-slate-300 dark:bg-slate-800"
                            style={
                              backgroundColor ? { backgroundColor } : undefined
                            }
                            aria-label={tooltipText}
                          />
                        </TooltipTrigger>
                        <TooltipContent>{tooltipText}</TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pr-2">
        <p className="text-[12px] md:text-sm">
          {TOTAL_CONTRIBUTIONS} contributions in the last year
        </p>
        <div className="flex items-center gap-2 text-sm">
          <p className="dark:text-neutral-400">Less</p>
          <ul className="flex gap-1">
            <motion.li className="h-[10px] w-[10px] md:h-[12px] md:w-[12px] rounded-sm bg-neutral-300 dark:bg-neutral-800" />
            {CONTRIBUTION_COLORS.map((item, index) => (
              <motion.li
                key={item}
                initial="initial"
                animate="animate"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  },
                }}
                className="h-[10px] w-[10px] md:h-[12px] md:w-[12px] rounded-sm"
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <p className="text-[12px] md:text-sm">More</p>
        </div>
      </div>
    </section>
  );
}
