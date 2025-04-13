import { TextInput, View, Text } from "react-native";

export function Input({
  label,
  placeholder,
  icon
}: {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
}) {
  return (
    <View className="mb-4">
      {label && <Text className="text-dark mb-1">{label}</Text>}
      <View className="flex-row items-center border border-neutral rounded-lg px-3 py-2 bg-light">
        {icon && <View className="mr-2">{icon}</View>}
        <TextInput
          className="flex-1 text-dark"
          placeholder={placeholder}
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}
