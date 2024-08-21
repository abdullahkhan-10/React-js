const conf = {
    // we will pass it to string, because we need all the ids in string formate.
    appWriteUrl: String(import.meta.env.VITE_MYAPPWRITE_URL),
    appWriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appWriteDatabasetId: String(import.meta.env.VITE_DATABASE_ID),
    appWriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appWriteBucketId: String(import.meta.env.VITE_BUCKET_ID)
}

export default conf;