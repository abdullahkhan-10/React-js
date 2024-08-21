import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../EnvironmentVars/config";

export class DatabaseServices{
    // variables
    client = new Client();
    myDatabase;
    myStorage;

    // the database will create when the constructor method get run.
    constructor(){
        this.client
             .setEndpoint(conf.appWriteUrl)            // Your API Endpoint
             .setProject(conf.appWriteProjectId); 

        // This will create database and storage.
        this.myDatabase = new Databases(this.client)
        this.myStorage = new Storage(this.client)
    }

    // post service/methods
    // 1. CreatePost 
    // slug is document id , we can also randomly create through (id.unique()) method.
    async CreatePost({title, slug, content, featureimage, status, userId}){
        try {
           await this.myDatabase.createDocument(
            conf.appWriteDatabasetId,
            conf.appWriteCollectionId,
            slug,
            {
                title,
                slug,
                content,
                featureimage,
                status,
                userId
            }
           )
        } catch (error) {
            throw error
        }
    }

    // 2. update post
    // we want to get the document id (slug) first separately and then the rest.
    async UpdatePost(slug,{title, content, featureimage,status}){
        try {
            return await this.myDatabase.updateDocument(
                conf.appWriteDatabasetId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featureimage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    // 3. Delete post 
    async DeletePost(slug){
        try {
            await this.myDatabase.deleteDocument(
                conf.appWriteDatabasetId,
                conf.appWriteCollectionId,
                slug
            )
            // if the post is deleted
            return true
        } catch (error) {
            throw error

            return false
        }
        
    }

    // 4. to get one blog
    async getPost(slug){
        try {
           return await this.myDatabase.getPost(
                conf.appWriteDatabasetId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    // 5. to get all active blog, we will use query here, to appy filter to get only active blogs.
    // Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
    // in query we will pass that (status) that we have created in aqqwrite index.
    // we can also pass the query as parameter.
    async getActivePost(myQuery = [Query.equal("status", "active")]){
        try {
            return await this.myDatabase.listDocuments(
                conf.appWriteDatabasetId,
                conf.appWriteCollectionId,
                myQuery,

                // we  can also write everything here without passing it as argument.
                // Query.equal("status" , [
                //     "active"
                // ])

                // Returns document if attribute (status) is equal to any value in the provided array.
            )
        } catch (error) {
            throw error
        }
    }


    // File upload service/methods
    // 1. creat file 
    // we will gave the file when we call this method. 
    async uploadFile(file){
        try {
            return await this.myStorage.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error
        }
    }

    // 2. delete file 
    // we will gave that file id we want to delete when we call this method.
    async deleteFile(fileId){
        try {
            await this.myStorage.deleteFile(
                conf.appWriteBucketId,
                fileId,
            )
            return true
        } catch (error) {
            throw error
        }
    }

    // 3. File Preview
    // To get a file preview image , use the getFilePreview method.
    // as it is fast so we will declare this method without async await.
    getFilePreview(fileId){
        return this.myStorage.getFilePreview(
            conf.appWriteBucketId,
            fileId,
        )
    }
}

// we will create object for the class (DatabaseServices).
const dataBaseServices = new DatabaseServices()

// now we will export the object (dataBaseServices)
export default dataBaseServices;