import { Client, Account, ID } from "appwrite";
import config from "./config";

const client = new Client()
  .setEndpoint(config.appwriteURL)
  .setProject(config.appwriteProjectID);

const account = new Account(client);

export const signup = async ({ email, password, fullName }) => {
  try {
    return await account.create(ID.unique(), email, password, fullName);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const session = await account.createEmailSession(email, password);
    if (!session) {
      return { isAuthenticated: false, user: null };
    }
    const user = await account.get();
    return { isAuthenticated: true, user };
  } catch (error) {
    return {
      isAuthenticated: false,
      user: null,
      error: error.message || "An error occurred during login",
    };
  }
};

export const getCurrentUser = async () => {
  try {
    const session = await account.getSession("current");

    if (!session) {
      return { isAuthenticated: false, user: null };
    }

    const user = await account.get();

    return { isAuthenticated: true, user };
  } catch (error) {
    return { isAuthenticated: false, user: null };
  }
};

export const logout = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    throw new Error(error.message);
  }
};
