/**
 * Application theme variants
 */
export type ThemeVariant = 'light' | 'dark';

/**
 * Base user type for UI components
 */
export type User = {
  id: string;
  name: string;
  avatarUrl?: string;
};
