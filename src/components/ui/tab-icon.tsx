import { Dimensions, View } from "react-native";
// import { View } from "react-native-reanimated/lib/typescript/Animated";
// import { View } from "react-native-reanimated/lib/typescript/Animated";
import { SvgProps } from "react-native-svg";

const { width } = Dimensions.get("window");

interface TabIconProps {
  name: string;
  Icon: React.FC<SvgProps>;
  focused?: boolean;
  className?: string;
  size?: number;
}

const TabIcon = ({
  name,
  Icon,
  className,
  focused,
  size = 20,
}: TabIconProps) => {
  const itemWidth = width / 16;
  return (
    <View
      className={className}
      style={[
        {
          width: itemWidth,
          height: "auto",
        },
      ]}
    >
      <Icon height={size} width={size} fill={focused ? "bg-primary" : "transparent"} stroke={
          focused ? "bg-primary" : "bg-gray-300"
        } />
    </View>
  );
};

export default TabIcon;
