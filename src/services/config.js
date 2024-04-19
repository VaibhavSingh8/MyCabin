const config = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteGuestsID: String(import.meta.env.VITE_APPWRITE_GUESTS_COLLECTION_ID),
  appwriteCabinsID: String(import.meta.env.VITE_APPWRITE_CABINS_COLLECTION_ID),
  appwriteBookingsID: String(import.meta.env.VITE_APPWRITE_BOOKINGS_COLLECTION_ID),
  appwriteSettingsID: String(import.meta.env.VITE_APPWRITE_SETTINGS_COLLECTION_ID),
  appwriteCabinImagesBucketID: String(import.meta.env.VITE_APPWRITE_CABIN_IMAGES_BUCKET_ID),

}

export default config;