const relative = new Intl.RelativeTimeFormat("en", { numeric: "always" });
const longDate = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 365 * 24 * 60 * 60],
  ["month", 30 * 24 * 60 * 60],
  ["week", 7 * 24 * 60 * 60],
  ["day", 24 * 60 * 60],
  ["hour", 60 * 60],
  ["minute", 60],
];

export const formatDate = (date: string | Date) => {
  if (!date) {
    return "";
  }

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  const diffSeconds = Math.round((parsedDate.getTime() - Date.now()) / 1000);
  const absoluteDiff = Math.abs(diffSeconds);

  if (absoluteDiff < 60) {
    return "just now";
  }

  for (const [unit, seconds] of UNITS) {
    if (absoluteDiff >= seconds || unit === "minute") {
      return relative
        .format(Math.round(diffSeconds / seconds), unit)
        .replace(/^about\s+/i, "");
    }
  }

  return "";
};

export const formatDateLong = (date: string | Date) => {
  if (!date) {
    return "";
  }

  return longDate.format(new Date(date));
};
