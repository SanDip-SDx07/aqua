import axios from "axios";
import type { Address, Role } from "../types";

const entry = async (role: Role, mobile: string, address: Address) => {
  try {
    const response = await axios.post(
      "http://192.168.1.7:8000/api/v1/users/entry",
      { mobileNumber: mobile, role, address },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data; // or just `response` if you want full Axios response
  } catch (error) {
    console.error("Error in user entry:", error);
    throw error; // rethrow if you want the caller to handle it
  }
};

export default entry;
