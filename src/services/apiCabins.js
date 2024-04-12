// import { Client, Databases } from "appwrite";
// import config from "./config";

// export class Cabins {
//   client = new Client();

//   databases;

//   constructor() {
//     this.client
//       .setEndpoint(config.appwriteURL)
//       .setProject(config.appwriteProjectID);

//     this.databases = new Databases(this.client);
//   }

//   async getCabins() {
//     try {
//       return await this.databases.listDocuments(config.appwriteDatabaseID, config.appwriteCabinsID);
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// const cabins = new Cabins();
// export default cabins;


import { Client, Databases } from "appwrite";
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