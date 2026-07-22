"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { formatDateLong } from "@/utils/formatter";
import { TContributions } from "@/features/github";
import { cn } from "@/libs/utils";

const DAY_DOT_SIZE = 14;

interface Props {
  data?: TContributions;
}

export default function ContributionsCalendar({ data }: Props) {
  const {
    weeks,
    months,
    colors: CONTRIBUTION_COLORS,
    totalContributions: TOTAL_CONTRIBUTIONS,
  } = useMemo(
    () => ({
      weeks: data?.weeks ?? [],
      months: data?.months ?? [],
      colors: data?.colors ?? [],
      totalContributions: data?.totalContributions ?? 0,
    }),
    [data]
  );

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
          weekIndex: startWeekIndex >= 0 ? startWeekIndex : null,
        };
      })
      .filter((month) => month.weekIndex !== null);

    return labels.filter((month, index) => {
      if (index === 0) {
        return true;
      }

      const previousMonth = labels[index - 1];
      if (previousMonth.weekIndex === null || month.weekIndex === null) {
        return false;
      }

      return month.weekIndex - previousMonth.weekIndex >= 2;
    });
  }, [months, weeks]);

  return (
    <section className="w-full min-w-0 space-y-4">
      <div className="relative flex flex-col">
        <div className="flex justify-end w-full overflow-hidden">
          <div
            className="relative w-full"
            style={{ minWidth: weeks.length * DAY_DOT_SIZE }}
          >
            <ul className="relative h-5 overflow-hidden text-xs dark:text-neutral-400">
              {MONTH_LABELS.map((month) => (
                <li
                  key={month.firstDay}
                  className="absolute top-0"
                  style={{
                    left: `${
                      ((month.weekIndex ?? 0) / Math.max(weeks.length, 1)) * 100
                    }%`,
                  }}
                >
                  {month.name}
                </li>
              ))}
            </ul>
            <div
              className={cn("grid w-full overflow-hidden")}
              style={{
                gridTemplateColumns: `repeat(${weeks.length}, minmax(${DAY_DOT_SIZE}px, 1fr))`,
              }}
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
                        ? `No contributions on ${formatDateLong(
                            contribution.date
                          )}`
                        : `${
                            contribution.contributionCount
                          } contributions on ${formatDateLong(
                            contribution.date
                          )}`;

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
                            className={cn(
                              "block my-1 rounded border bg-foreground/10 size-3.5"
                            )}
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
        <p className="text-sm">
          {TOTAL_CONTRIBUTIONS} contributions in the last year
        </p>
        <div className="flex items-center gap-2 text-sm">
          <p className="dark:text-neutral-400">Less</p>
          <ul className="flex gap-1">
            <motion.li className="size-3.5 rounded bg-foreground/10" />
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
                className="size-3.5 rounded"
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <p className="text-sm">More</p>
        </div>
      </div>
    </section>
  );
}
