import { format, formatDistanceToNow, isValid, parseISO } from "date-fns";

export const formatDate = (date: string | Date) => {
  if (!date) {
    return "";
  }

  let parsedDate: Date;

  if (typeof date === "string") {
    parsedDate = parseISO(date);
  } else {
    parsedDate = date;
  }

  if (!isValid(parsedDate)) {
    return "";
  }

  const raw = formatDistanceToNow(parsedDate, { addSuffix: true });
  return raw.replace(/^about\s+/i, "");
};

export const formatDateLong = (date: string | Date) => {
  if (!date) {
    return "";
  }

  return format(new Date(date), "LLL do, y");
};
