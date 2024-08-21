import { Client, Account, ID } from "appwrite";
import conf from "../EnvironmentVars/config";

// first  we will create a class and will export it, and who ever want to use it he need to make an object for it, so that he use all his methods.
export class AuthService{
    myClient = new Client()
    account;

    // we will keep the functionality inside constructor, because we want them to run as the object is created.
    constructor(){
        this.myClient
            .setEndpoint(conf.appWriteUrl)            // Your API Endpoint
            .setProject(conf.appWriteProjectId);      // project Id
        this.acount = new Account(this.myClient);             
    }

    // Methods.
    // we will use async await because we want that until acount  creation is not completed don't go forward.

    // 1. signUp method.
    // You can use the Appwrite Client SDKs to create an account using email, password and name.
    async createAccount({email, password, name}){
        // we will also use try and catch to handle error , because acount creation may be fail.
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // if accout is created then we will called login method here, to tell them now you have to login as well.
                return this.Login({email, password})
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // 2. login method.
    // After you've created your account, users can be logged in using the Create Email Session method.
    async Login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    // 3. user authentication method.
    // if someone land on home page then we need to check either he is log in or not.
    // After logging in, you can check the authentication state of the user.
    // Appwrite's SDKs are stateless, so you need to manage the session state in your app. You can use the Get Account method to check if the user is logged in. 
    async currentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
        // the catch is used when we don't reach out the value in try.
        // but if we have prooblem in try catch then in this case return null
        return null
    }

    // 4. Log out method.
    // Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use Delete Sessions instead.
    async Logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

// but why not we create object for the class and then export the object, and now anyone can use it to get his methods.
// when the object is created there is method that run automatically and that is (constructor())
const myAuthService = new AuthService()

// now we will access everything inside the class through this object (myAuthService)
export default myAuthService;