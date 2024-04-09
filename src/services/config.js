const config = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteGuestsID: String(import.meta.env.VITE_APPWRITE_GUESTS_COLLECTION_ID),
  appwriteCabinsID: String(import.meta.env.VITE_APPWRITE_CABINS_COLLECTION_ID),
  appwriteSettingsCollectionID: String(import.meta.env.VITE_APPWRITE_BOOKINGS_COLLECTION_ID),
  appwriteBookingsCollectionID: String(import.meta.env.VITE_APPWRITE_SETTINGS_COLLECTION_ID)

}

export default config;