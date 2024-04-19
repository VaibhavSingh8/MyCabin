import { Client, Databases } from "appwrite";
import { v4 as uuidv4 } from 'uuid';
import config from "./config";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(config.appwriteURL) // Your API Endpoint
  .setProject(config.appwriteProjectID) // Your project ID
  ;

export const getCabins = async () => {
  try {
    return await databases.listDocuments(config.appwriteDatabaseID, config.appwriteCabinsID);
  } catch (error) {
    throw error;
  }
};

export const deleteCabin = async (cabinId) => {
  try {
    return await databases.deleteDocument(config.appwriteDatabaseID, config.appwriteCabinsID, cabinId);
  } catch (error) {
    throw new Error("Failed to delete cabin");
  }
}

export const createCabin = async (cabinData) => {

  try {
    const cabinId = uuidv4(); // Generate a new UUID
    return await databases.createDocument(config.appwriteDatabaseID, config.appwriteCabinsID, cabinId, cabinData)
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create cabin");
  }
}