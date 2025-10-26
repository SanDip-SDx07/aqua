import * as Location from "expo-location";
import type { Address } from "../types";

// Fetch current location and return a detailed address.
async function getCurrentLocation(): Promise<Address> {
  const address: Address = {};

  try {
    // 1️⃣ Request permission to access location
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      throw new Error("Location permission denied");
    }

    console.log(status);

    // 2️⃣ Get current position
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    console.log(location);

    const { latitude, longitude } = location.coords;

    console.log(latitude, longitude);

    // 3️⃣ Reverse geocode to get human-readable address
    const places = await Location.reverseGeocodeAsync({ latitude, longitude });
    const place = places[0]; // Take the first result

    console.log(place);

    // 4️⃣ Map to our Address interface
    if (!place) throw new Error("Unable to fetch address from location");

    address.country = place.country as string;
    address.state = place.region as string;
    address.city = place.city as string;
    address.area = place.subregion as string; // optional, may be undefined
    address.street = place.street as string;
    address.pincode = place.postalCode as string;
    address.nearbyLandmark = ""; // Expo doesn’t provide landmark, optional to fill
  } catch (error) {
    console.error("Location Error:", error);
  }

  return address;
}

export default getCurrentLocation;
