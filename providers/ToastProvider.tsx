import { createContext, useContext, useState } from "react";
import { View, Text, Animated } from "react-native";

const ToastContext = createContext({
  showToast: (message: string, type?: "success" | "error" | "info") => {}
});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{
    message: string;
    type: string;
    visible: boolean;
  } | null>(null);

  const showToast = (message: string, type = "info") => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast?.visible && (
        <Animated.View className={`absolute bottom-10 left-1/4 right-1/4 px-4 py-2 rounded-lg items-center ${
          toast.type === "success" ? "bg-success" : 
          toast.type === "error" ? "bg-warning" : "bg-primary"
        }`}>
          <Text className="text-white">{toast.message}</Text>
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
