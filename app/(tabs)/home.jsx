import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
// import { restaurants } from "../../store/restaurants";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  const router = useRouter();
  const bottomPadding = Platform.OS === "android" ? 55 : 20;

  const getRestaurants = async () => {
    const q = query(collection(db, "restaurant"));
    const result = await getDocs(q);

    result.forEach((item) => {
      setRestaurants((prev) => [...prev, item.data()]);
    });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
  onPress={() =>
    router.push({
      pathname: "/restaurant/[id]",
      params: {
        name: item.name,
        image: item.image,
        address: item.address,
        opening: item.opening,
        closing: item.closing,
      },
    })
  }
  className="bg-[#da8f40] max-h-64 max-w-xs rounded-xl p-3 mx-2 shadow-md"
>
  <Image
    resizeMode="cover"
    source={{ uri: item.image }}
    className="h-28 mb-2 rounded-lg"
  />
  <Text className="text-white text-lg font-bold">{item.name}</Text>
  <Text className="text-white text-base">{item.address}</Text>
  <Text className="text-white text-base">
    Open: {item.opening} - Close: {item.closing}
  </Text>
</TouchableOpacity>

  );

  const Section = ({ title, color }) => (
    <>
      <View className="p-4 bg-[#2b2b2b] flex-row items-center">
        <Text className={`text-3xl font-semibold mr-2 ${color}`}>{title}</Text>
      </View>
      {restaurants.length > 0 ? (
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          horizontal
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <ActivityIndicator size="large" color="#fb9b33" />
      )}
    </>
  );

  return (
    <SafeAreaView
      style={{ backgroundColor: "#2b2b2b", paddingBottom: bottomPadding }}
    >
      <View className="flex items-center mb-2">
        <View className="bg-[#5f5f5f] w-11/12 rounded-xl shadow-lg flex-row items-center justify-center p-2 ">
          <Text
            className={`text-lg text-white ${
              Platform.OS === "ios" ? "pt-2" : "pb-1"
            }`}
          >
            Welcome to
          </Text>
          <Image resizeMode="cover" className="w-20 h-12" source={logo} />
        </View>
      </View>

      <ScrollView stickyHeaderIndices={[0]}>
        <ImageBackground
          source={banner}
          resizeMode="cover"
          className="w-full h-52 items-center justify-center mb-4"
        >
          <BlurView
            intensity={Platform.OS === "android" ? 100 : 25}
            tint="dark"
            className="w-full p-4"
          >
            <Text className="text-center text-3xl font-bold text-white">
              Dine with your loved ones
            </Text>
          </BlurView>
        </ImageBackground>

        <Section title="Special Discount %" color="text-white" />
        <Section title="Our Restaurants" color="text-[#fb9b33]" />
      </ScrollView>
    </SafeAreaView>
  );
}
