import { router } from "expo-router";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import validationSchema from "../../utils/authSchema";

export default function Signup() {
  const handleSignUp = (values) => {
    console.log("Form Data:", values);
    // TODO: Perform actual sign-up logic here
    router.push("/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#2b2b2b]">
      <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-evenly items-center py-10">
            <Image
              source={require("../../assets/images/dinetimelogo.png")}
              style={{ width: 250, height: 150 }}
            />

            <Text className="text-white text-xl font-bold text-center">
              Lets get you started!
            </Text>

            <View className="w-80">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSignUp}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <View className="space-y-4 w-80">
                    <TextInput
                      className="bg-white/90 rounded-xl mb-2 px-6 py-4 text-black text-base shadow-md"
                      placeholder="Email"
                      placeholderTextColor="#9c9797"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    {touched.email && errors.email && (
                      <Text className="text-red-500 text-xs ml-1 mb-1">
                        {errors.email}
                      </Text>
                    )}

                    <TextInput
                      className="bg-white/90 rounded-xl mb-2 px-6 py-4 text-black text-base shadow-md"
                      placeholder="Password"
                      placeholderTextColor="#9c9797"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry
                    />
                    {touched.password && errors.password && (
                      <Text className="text-red-500 text-xs ml-1 mb-1">
                        {errors.password}
                      </Text>
                    )}

                    <TouchableOpacity
                      onPress={handleSubmit}
                      className="bg-[#f49b33] px-6 py-3 mt-2 rounded-full shadow-lg border-2 border-white border-dotted items-center self-center"
                    >
                      <Text className="text-black font-bold text-lg">
                        Sign In
                      </Text>
                    </TouchableOpacity>

                    {/* Navigation to Login */}
                    <View className="flex-row items-center self-center mt-3">
                      <Text className="text-white mr-2">
                        Donot have an account?
                      </Text>
                      <TouchableOpacity onPress={() => router.push("/signup")}>
                        <Text
                          style={{ color: "#00d5ff" }}
                          className="font-bold text-base underline"
                        >
                          Sign up
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </View>

            <Image
              source={require("../../assets/images/Frame.png")}
              style={{ width: 390, height: 90 }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
