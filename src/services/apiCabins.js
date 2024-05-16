import { Client, Databases, Storage, ID } from "appwrite";
import { v4 as uuidv4 } from 'uuid';
import config from "./config";

const client = new Client();

const databases = new Databases(client);

const storage = new Storage(client);

client
  .setEndpoint(config.appwriteURL) // Your API Endpoint
  .setProject(config.appwriteProjectID) // Your project ID
  ;

export const getCabins = async () => {
  try {
    return await databases.listDocuments(config.appwriteDatabaseID, config.appwriteCabinsID);
  } catch (error) {
    throw new Error("Couldn't retrieve Cabins");
  }
};

export const deleteCabin = async (cabinId) => {
  try {
    return await databases.deleteDocument(config.appwriteDatabaseID, config.appwriteCabinsID, cabinId);
  } catch (error) {
    throw new Error("Failed to delete cabin");
  }
}

export const uploadImage = async (file) => {
  try {

    const res = await storage.createFile(config.appwriteCabinImagesBucketID, ID.unique(), file)

    return res["$id"]

  } catch (error) {
    throw new Error("Failed to upload image");
  }
}



export const createCabin = async (cabinData) => {

  const imageURL = `${config.appwriteURL}/storage/buckets/${config.appwriteCabinImagesBucketID}/files/${cabinData.image}/preview?project=${config.appwriteProjectID}`

  try {
    const cabinId = uuidv4(); // Generate a new cabin ID
    cabinData.image = imageURL;

    return await databases.createDocument(config.appwriteDatabaseID, config.appwriteCabinsID, cabinId, cabinData)
  } catch (error) {

    throw new Error("Failed to create cabin");
  }

}