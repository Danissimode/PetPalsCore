import { View, TouchableOpacity } from "react-native";

export function Card({
  children,
  onPress
}: {
  children: ReactNode;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      className="bg-light rounded-lg shadow-sm p-4 mb-3"
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  );
}
