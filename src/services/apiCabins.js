import { Client, Databases } from "appwrite";
import config from "./config";

export class Cabins {
  client = new Client();

  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectID);

    this.databases = new Databases(this.client);
  }

  async getCabins() {
    try {
      return await this.databases.listDocuments(config.appwriteDatabaseID, config.appwriteCabinsID);
    } catch (error) {
      throw error;
    }
  }
}

const cabins = new Cabins();
export default cabins;