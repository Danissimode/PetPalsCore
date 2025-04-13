import { StyleSheetManager } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReactNode } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyleSheetManager>
      <SafeAreaView className="flex-1 bg-neutral">
        {children}
      </SafeAreaView>
    </StyleSheetManager>
  );
}
