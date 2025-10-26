import crypto from "crypto";

type Role = "admin" | "user" | "vendor" | "member" | "rider";

/**
 * Generate a compact unique user identifier based on role, city, mobile, and optional username.
 * Example: user_kolsan7034a1b
 */
function generateUserId(
  role: Role,
  cityName: string,
  mobile: string,
  username?: string
): string {
  const cityCode = cityName.slice(0, 3).toLowerCase();
  const cleanMobile = mobile.replace(/\D/g, "");
  const last4 = cleanMobile.slice(-4);

  // use first 3 letter of role
  role = role.slice(0, 3).toLowerCase() as Role;

  // create a tiny hash from mobile + username
  const hash = crypto
    .createHash("md5")
    .update(cleanMobile + (username ?? ""))
    .digest("hex")
    .slice(0, 3);

  // optional username part (first 3 letters, lowercase letters only)
  const namePart = username
    ? username
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .slice(0, 3)
    : "";

  // combine neatly like a readable username
  if (username) {
    return `${role}${cityCode}${namePart}${last4}${hash}`.toUpperCase();
  }
  return `${role}${cityCode}${last4}${hash}`.toUpperCase();
}

export default generateUserId;
