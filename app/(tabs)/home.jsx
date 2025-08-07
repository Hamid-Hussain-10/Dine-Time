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

// Sample static restaurant data
const restaurants = [
  {
    name: "Sea Grill of Merrick Park",
    seats: 50,
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
    address: `4250 Salzedo Street, Suite 1425Coral Gables, FL 33146`,
    opening: "11:30",
    closing: "23:00",
  },
  {
    name: "Ocean's Edge Bistro",
    seats: 50,
    image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "123 Ocean Drive, Suite 101, Miami Beach, FL 33139",
    opening: "10:00",
    closing: "22:00",
  },
  {
    name: "Sunset Grill",
    seats: 75,
    image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg",
    address: "789 Sunset Blvd, Suite 202, Los Angeles, CA 90069",
    opening: "11:00",
    closing: "00:00",
  },
  {
    name: "Riverside Diner",
    seats: 65,
    image: "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg",
    address: "456 River Road, Suite 300, New York, NY 10001",
    opening: "09:00",
    closing: "23:30",
  },
  {
    name: "Bayview Café",
    seats: 80,
    image: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg",
    address: "321 Bay Street, Suite 400, San Francisco, CA 94133",
    opening: "10:30",
    closing: "22:30",
  },
  {
    name: "Lakeside Eatery",
    seats: 70,
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg",
    address: "555 Lake Avenue, Suite 120, Chicago, IL 60611",
    opening: "11:00",
    closing: "23:00",
  },
  {
    name: "Central Park Café",
    seats: 60,
    image: "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg",
    address: "789 Fifth Avenue, Suite 201, New York, NY 10022",
    opening: "08:30",
    closing: "21:30",
  },
  {
    name: "Music City Grill",
    seats: 100,
    image: "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "1000 Broadway, Suite 500, Nashville, TN 37203",
    opening: "12:00",
    closing: "00:30",
  },
  {
    name: "Texas BBQ House",
    seats: 90,
    image: "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "222 Elm Street, Suite 101, Dallas, TX 75201",
    opening: "10:00",
    closing: "22:00",
  },
  {
    name: "Evergreen Eatery",
    seats: 85,
    image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg",
    address: "789 Pine Street, Suite 204, Seattle, WA 98101",
    opening: "11:30",
    closing: "23:00",
  },
  {
    name: "Lowcountry Diner",
    seats: 55,
    image: "https://images.pexels.com/photos/1628020/pexels-photo-1628020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "456 King Street, Suite 100, Charleston, SC 29403",
    opening: "09:30",
    closing: "22:00",
  },
  {
    name: "Bourbon Street Grill",
    seats: 110,
    image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
    address: "789 Bourbon Street, Suite 300, New Orleans, LA 70116",
    opening: "11:00",
    closing: "01:00",
  },
  {
    name: "Vegas Strip Café",
    seats: 120,
    image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg",
    address: "123 Main Street, Suite 150, Las Vegas, NV 89109",
    opening: "12:00",
    closing: "23:30",
  },
];

export default function Home() {
  const router = useRouter();
  const bottomPadding = Platform.OS === "android" ? 55 : 20;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/restaurant/${item.name}`)}
      className="bg-[#5f5f5f] max-h-64 max-w-xs rounded-xl p-3 mx-2 shadow-md"
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
        <Text className={`text-3xl font-semibold mr-2 ${color}`}>
          {title}
        </Text>
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
    <SafeAreaView style={{ backgroundColor: "#2b2b2b", paddingBottom: bottomPadding }}>
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
