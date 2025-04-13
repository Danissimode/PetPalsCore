import { View, Image, Text } from "react-native";

export function Avatar({
  size = "md",
  source,
  name
}: {
  size?: "sm" | "md" | "lg";
  source?: string;
  name?: string;
}) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <View className={`${sizes[size]} rounded-full bg-primary items-center justify-center overflow-hidden`}>
      {source ? (
        <Image source={{ uri: source }} className="w-full h-full" />
      ) : (
        <Text className="text-white font-bold">
          {name?.charAt(0).toUpperCase()}
        </Text>
      )}
    </View>
  );
}
