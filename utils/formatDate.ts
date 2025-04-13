/**
 * Formats a date to human-readable string
 * @param date Date object or ISO string
 * @returns Formatted date (e.g. "April 13, 2025")
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
