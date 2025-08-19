import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Profile() {
  // Right now, we’ll pull params (assuming you navigate here after signup with params)
  const { username, email } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-[#2b2b2b] pt-10">
      <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 items-center py-10 px-4">
          <View className="w-32 h-32 rounded-full bg-[#3a3a3a] items-center justify-center shadow-lg mb-6">
            <Image
              source={require("../../assets/images/dinetimelogo.png")}
              className="w-28 h-28 rounded-full"
              resizeMode="cover"
            />
          </View>

          <Text className="text-white text-2xl font-extrabold mb-1 content-center">
            {username || "Guest User"}
          </Text>

          <Text className="text-gray-300 text-base mb-6 content-center">
            {email || "guest@example.com"}
          </Text>

          <View className="bg-[#3a3a3a] w-full rounded-lg p-5 shadow-lg mb-6">
            <Text className="text-[#f49b33] text-xl font-bold mb-3">
              Account Details
            </Text>
            <Text className="text-white text-lg mb-2">
              Username: {username || "Not set"}
            </Text>
            <Text className="text-white text-lg">
              Email: {email || "Not set"}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-[#f49b33] rounded-xl py-3 px-6"
            onPress={() => alert("Edit Profile feature coming soon!")}
          >
            <Text className="text-black font-bold text-lg text-center">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
