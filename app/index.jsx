import { router } from "expo-router";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#2b2b2b]">
      <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

      <View className="flex-1 justify-evenly items-center py-10 px-4">
        <Image
          source={require("../assets/images/dinetimelogo.png")}
          style={{
            width: 300,
            height: 150,
          }}
        />

        <View className="items-center space-y-4 px-4">
          <Text className="text-white text-3xl font-bold text-center">
            Welcome to DineTime
          </Text>
          <Text className="text-white text-base text-center">
            Your perfect companion for managing meals and memories.
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="bg-[#f49b33] px-6 py-2.5 rounded-full shadow-md mt-5 "
          >
            <Text className="text-black font-bold text-lg">User Guest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/signin")}
            className="bg-[#f49b33] px-6 py-2.5 rounded-full shadow-md mt-5"
          >
            <Text className="text-black font-bold text-lg">Next</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require("../assets/images/Frame.png")}
          style={{
            width: 390,
            height: 90,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
