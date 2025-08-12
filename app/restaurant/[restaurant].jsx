import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

export default function Rrestaurant() {
  const { restaurant } = useLocalSearchParams();

  return (
    <SafeAreaView style={{ backgroundColor: "#2b2b2b", paddingBottom: 10 }}>
      <ScrollView className="h-full">
        <View className="flex-1 my-2 p-2">
          <Text className="text-xl text-[#f49b33] mr-2 font-semibold">
            {restaurant}
          </Text>
          <View className="border-b border-[#f49b33]"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
