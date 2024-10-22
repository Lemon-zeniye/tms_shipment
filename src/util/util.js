export function parseDate(date) {
  const parsedDate = new Date(
    (date?.getTime() ?? 0) - (date?.getTimezoneOffset() ?? 0) * 60 * 1000
  )
    .toISOString()
    .split("T")[0];
  return parsedDate;
}
