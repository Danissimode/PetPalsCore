/**
 * Capitalizes the first letter of a string
 * @param str Input string
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
