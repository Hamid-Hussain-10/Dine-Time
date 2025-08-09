import { collection, doc, setDoc } from "firebase/firestore";
import { slots } from "../store/restaurants";
import { db } from "./firebaseConfig";

const restaurantData = slots;

const uploadData = async () => {
  try {
    console.log("Uploading restaurants:", restaurantData.length);
    for (let i = 0; i < restaurantData.length; i++) {
      const restaurant = restaurantData[i];
      console.log(`Uploading slot_${i+1}`, restaurant.name);
      const docRef = doc(collection(db, "slots"), `slot_${i + 1}`);
      await setDoc(docRef, restaurant);
    }
    console.log("Data uploaded successfully ✅");
  } catch (e) {
    console.log("Error uploading data ❌", e);
  }
};


export default uploadData;