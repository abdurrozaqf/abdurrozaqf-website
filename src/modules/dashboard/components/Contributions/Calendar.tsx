"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate } from "@/utils/formatter";

interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

interface Month {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

interface CalendarProps {
  data?: {
    totalContributions?: number;
    weeks: {
      firstDay: string;
      contributionDays: Contribution[];
    }[];
    months: Month[];
    colors: string[];
  };
}

export default function Calendar({ data }: CalendarProps) {
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null;
    date: string | null;
  }>({
    count: null,
    date: null,
  });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month: Month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  const contributionColors = data?.colors ?? [];
  const totalContributions = data?.totalContributions || 0;

  return (
    <>
      <div className="relative flex flex-col">
        <ul className="flex justify-end gap-[1.8px] overflow-hidden text-xs dark:text-neutral-400 lg:justify-start">
          {months.map((month) => (
            <li
              key={month.firstDay}
              className={clsx(`${month.totalWeeks < 2 ? "invisible" : ""}`)}
              style={{ minWidth: 14.4 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>
        <div className="flex justify-end lg:justify-start gap-[1.8px] overflow-hidden">
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const backgroundColor =
                  contribution.contributionCount > 0 && contribution.color;

                const getRandomDelayAnimate =
                  Math.random() * week.contributionDays.length * 0.15;

                return (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.span
                          key={contribution.date}
                          initial="initial"
                          animate="animate"
                          variants={{
                            initial: { opacity: 0, translateY: -20 },
                            animate: {
                              opacity: 1,
                              translateY: 0,
                              transition: { delay: getRandomDelayAnimate },
                            },
                          }}
                          className="block my-[3px] h-[13px] w-[13px] rounded-sm bg-slate-300 dark:bg-slate-800"
                          style={
                            backgroundColor ? { backgroundColor } : undefined
                          }
                          onMouseEnter={() =>
                            setSelectContribution({
                              count: contribution.contributionCount,
                              date: contribution.date,
                            })
                          }
                          onMouseLeave={() =>
                            setSelectContribution({ count: null, date: null })
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent asChild>
                        <div
                          className={clsx(
                            `${
                              selectContribution?.date
                                ? "opacity-100"
                                : "opacity-0"
                            }`,
                            "rounded bg-neutral-200 px-2 text-sm dark:bg-neutral-700"
                          )}
                        >
                          {selectContribution?.count === 0
                            ? `No contributions on ${formatDate(
                                selectContribution?.date!
                              )}`
                            : `${selectContribution?.count} contributions on 
                            ${formatDate(selectContribution?.date!)}`}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pr-2">
        <p className="text-[12px] md:text-sm">
          {totalContributions} contributions in the last year
        </p>
        <div className="flex items-center gap-2 text-sm">
          <p className="dark:text-neutral-400">Less</p>
          <ul className="flex gap-1">
            <motion.li className="h-[10px] w-[10px] md:h-[12px] md:w-[12px] rounded-sm bg-neutral-300 dark:bg-neutral-800" />
            {contributionColors.map((item, index) => (
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
    </>
  );
}
