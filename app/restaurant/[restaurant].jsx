import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Rrestaurant() {
  const { name, image, address, opening, closing, history } =
    useLocalSearchParams();

  return (
    <SafeAreaView style={{ backgroundColor: "#2b2b2b", flex: 1 }}>
      <ScrollView className="h-full px-4 py-3">
        {/* Title Section */}
        <Text className="text-3xl text-[#f49b33] font-extrabold mb-2">
          {name}
        </Text>
        <View className="border-b border-[#f49b33] mb-4" />

        {/* Image Section */}
        <View className="rounded-2xl overflow-hidden shadow-lg mb-4">
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            className="w-full h-60"
          />
        </View>

        <View className="bg-[#3a3a3a] rounded-2xl p-4 shadow-md mb-5">
          <Text className="text-white text-lg mb-2">
            <Text className="font-bold text-[#f49b33]">Address: </Text>
            {address}
          </Text>

          <Text className="text-white text-lg">
            <Text className="font-bold text-[#f49b33]">Timings: </Text>
            {opening} - {closing}
          </Text>
        </View>

        <View className="bg-[#2f2f2f] rounded-2xl p-4 mb-5 shadow-md">
          <Text className="text-2xl text-[#f49b33] font-bold mb-3">
            Our Story
          </Text>
          <Text className="text-white text-base leading-6">
            {history
              ? history
              : "Founded in 2005, this restaurant has been serving delicious meals with love and passion. Our mission is to bring families and friends together over food, offering both traditional and modern cuisines prepared with the freshest ingredients."}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => alert("Booking feature coming soon!")}
        >
          <LinearGradient
            colors={["#fb9b33", "#da8f40"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="rounded-2xl p-4 items-center shadow-md"
          >
            <Text className="text-white text-xl font-bold"> Book a Table</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
