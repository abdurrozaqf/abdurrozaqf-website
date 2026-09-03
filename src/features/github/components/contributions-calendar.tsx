import type { TContributions } from "@/features/github";
import { formatDateLong } from "@/utils/formatter";
import { cn } from "@/libs/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DAY_DOT_SIZE = 18;

interface Props {
  data?: TContributions;
}

export default function ContributionsCalendar({ data }: Props) {
  const weeks = data?.weeks ?? [];
  const months = data?.months ?? [];
  const colors = data?.colors ?? [];
  const totalContributions = data?.totalContributions ?? 0;

  const monthLabels = months
    .map((month) => {
      const monthKey = month.firstDay.slice(0, 7);
      const startWeekIndex = weeks.findIndex((week) =>
        week.contributionDays.some((day) => day.date.startsWith(monthKey)),
      );

      return {
        name: month.name,
        firstDay: month.firstDay,
        weekIndex: startWeekIndex >= 0 ? startWeekIndex : null,
      };
    })
    .filter((month) => month.weekIndex !== null)
    .filter((month, index, labels) => {
      if (index === 0) {
        return true;
      }

      const previousMonth = labels[index - 1];
      if (previousMonth.weekIndex === null || month.weekIndex === null) {
        return false;
      }

      return month.weekIndex - previousMonth.weekIndex >= 2;
    });

  return (
    <section className="w-full min-w-0 space-y-4">
      <div className="relative flex flex-col">
        <div className="flex justify-end w-full overflow-hidden">
          <div
            className="relative w-full"
            style={{ minWidth: weeks.length * DAY_DOT_SIZE }}
          >
            <ul className="relative h-5 overflow-hidden text-xs dark:text-neutral-400">
              {monthLabels.map((month) => (
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
                    const tooltipText =
                      contribution.contributionCount === 0
                        ? `No contributions on ${formatDateLong(
                            contribution.date,
                          )}`
                        : `${
                            contribution.contributionCount
                          } contributions on ${formatDateLong(
                            contribution.date,
                          )}`;
                    const daySeed = Number(contribution.date.slice(8));

                    return (
                      //   <span
                      //     key={contribution.date}
                      //     title={tooltipText}
                      //     aria-label={tooltipText}
                      //     className={cn(
                      //       "block my-1 rounded border bg-foreground/10 size-3.5",
                      //       "animate-contribution-dot",
                      //     )}
                      //     style={{
                      //       animationDelay: `${(daySeed % 12) * 50}ms`,
                      //       ...(backgroundColor
                      //         ? { backgroundColor }
                      //         : undefined),
                      //     }}
                      //   />
                      // );
                      <Tooltip key={contribution.date}>
                        <TooltipTrigger asChild>
                          <span
                            role="button"
                            key={contribution.date}
                            title={tooltipText}
                            aria-label={tooltipText}
                            className={cn(
                              "block my-1 rounded border bg-foreground/10 size-3.5",
                              "animate-contribution-dot",
                            )}
                            style={{
                              animationDelay: `${(daySeed % 12) * 50}ms`,
                              ...(backgroundColor
                                ? { backgroundColor }
                                : undefined),
                            }}
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
          {totalContributions} contributions in the last year
        </p>
        <div className="flex items-center gap-2 text-sm">
          <p className="dark:text-neutral-400">Less</p>
          <ul className="flex gap-1">
            <li className="size-3.5 rounded bg-foreground/10" />
            {colors.map((item) => (
              <li
                key={item}
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
