import { format } from "date-fns";

export const formatDate = (date: string | Date) => {
  if (date !== undefined) {
    return format(new Date(date), "LLL do, y");
  } else {
    return "";
  }
};
