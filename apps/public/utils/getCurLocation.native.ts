import type { Address } from "../types";

// 🧭 Fetch current location (placeholder for now)
async function getCurrentLocation() {
  const address: Address = {};

  try {
    // ⚙️ Example using Expo Location (if using Expo)
    // const { status } = await Location.requestForegroundPermissionsAsync();
    // if (status !== "granted") throw new Error("Permission denied");
    // const loc = await Location.getCurrentPositionAsync({});
    // Reverse geocode to get readable address...
    // const [place] = await Location.reverseGeocodeAsync(loc.coords);
    // Object.assign(address, place);

    address.city = "Kolkata"; // Placeholder
  } catch (error) {
    console.error("Location Error:", error);
  }

  return address;
}

export default getCurrentLocation;
