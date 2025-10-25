import AppError from "./AppError";

export default function isValidMobile(contact: string) {
  // 1. Sanitize input
  contact = String(contact).trim().toLowerCase();

  // 2. Validate format
  const isPhone = /^[0-9]{10}$/.test(contact);

  // 3. Determine type
  if (!isPhone) throw new AppError("Invalid contact type.", 400);

  // 4. Return result
  return isPhone && { type: "phone", contact };
}
