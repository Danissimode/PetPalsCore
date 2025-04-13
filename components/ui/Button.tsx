import { TouchableOpacity, Text } from "react-native";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
}: ButtonProps) {
  const base = "flex-row items-center justify-center rounded-full";
  const sizes = {
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-6 py-3"
  };
  const variants = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning"
  };

  return (
    <TouchableOpacity className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {icon && <View className="mr-2">{icon}</View>}
      <Text className="text-white font-medium">{children}</Text>
    </TouchableOpacity>
  );
}
