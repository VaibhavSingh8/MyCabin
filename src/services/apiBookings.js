import { Client, Databases} from "appwrite";

import config from "./config";

const client = new Client();

const databases = new Databases(client);


client
  .setEndpoint(config.appwriteURL)
  .setProject(config.appwriteProjectID);

export const getBookings = async () => {

    // query to fetch the desired fields
  // const query = [
  //   Query.select(
  //     "*",
  //     "cabinID.name",
  //     "guestID.fullName",
  //     "guestID.email"
  //   ),
  // ];

  try {
    return await databases.listDocuments(config.appwriteDatabaseID, config.appwriteBookingsID);
  } catch (error) {
    throw new Error("Couldn't find Bookings. Please retry!");
  }
};