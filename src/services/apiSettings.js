import { Client, Databases } from "appwrite";
import config from "./config";
import { get } from "react-hook-form";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(config.appwriteURL)
  .setProject(config.appwriteProjectID)
  ;

export const getSettings = async () => {
  try {
    return await databases.listDocuments(config.appwriteDatabaseID, config.appwriteSettingsID);
  } catch (error) {
    throw new Error("Failed to fetch settings");
  }
};

export const updateSetting = async (setting, docId) => {

  try {
    return await databases.updateDocument(config.appwriteDatabaseID, config.appwriteSettingsID, docId, setting)
  } catch (error) {
    throw new Error("Failed to update settings");
  }
}