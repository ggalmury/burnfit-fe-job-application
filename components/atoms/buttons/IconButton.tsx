import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

import { MaterialCommunityIconName } from "@/types/vectorIconName";

interface IconButtonProps {
  iconName: MaterialCommunityIconName;
  size?: number;
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const IconButton = ({ iconName, size = 22, color = "#333333", disabled, onPress }: IconButtonProps) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={iconName}
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
  >
    <MaterialCommunityIcons name={iconName} size={size} color={color} />
  </Pressable>
);

export default IconButton;
