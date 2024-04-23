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

export const updateSetting = async (setting) => {

  try {

    const docId = setting.settingsId;

    const fieldName = Object.keys(setting)[0];
    // Construct the updated setting object
    const updatedSetting = {
      [fieldName]: setting[fieldName]
    };
    return await databases.updateDocument(config.appwriteDatabaseID, config.appwriteSettingsID, docId, updatedSetting)
  } catch (error) {
    throw new Error("Failed to update settings");
  }
}