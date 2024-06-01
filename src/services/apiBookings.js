import { Client, Databases, Query } from "appwrite";
import config from "./config";

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint(config.appwriteURL)
  .setProject(config.appwriteProjectID);

export const getBookings = async (queries = [], limit = 10, cursor = null, cursorDirection = 'after') => {
  const queryOptions = [];

  // Ensure the limit is set and valid
  if (limit) {
    queryOptions.push(Query.limit(limit));
  } else {
    throw new Error("Limit must be a valid number");
  }

  // Add additional queries
  queryOptions.push(...queries);

  // For cursor pagination
  if (cursor) {
    if (cursorDirection === 'after') {
      queryOptions.push(Query.cursorAfter(cursor));
    } else if (cursorDirection === 'before') {
      queryOptions.push(Query.cursorBefore(cursor));
    }
  }

  try {
    return await databases.listDocuments(config.appwriteDatabaseID, config.appwriteBookingsID, queryOptions);
  } catch (error) {
    throw new Error("Couldn't find Bookings. Please retry!");
  }
};

export const getBooking = async (bookingId) => {
  try {
    return await databases.getDocument(config.appwriteDatabaseID, config.appwriteBookingsID, bookingId);
  } catch (error) {
    throw new Error("Couldn't find Booking. Please retry!");
  }
}

export const updateBooking = async (bookingId, obj) => {
  try {
    return await databases.updateDocument(config.appwriteDatabaseID, config.appwriteBookingsID, bookingId, obj)
  } catch (error) {
      throw new Error("Couldn't update Booking. Please retry!");
  }
}