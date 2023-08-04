import { Client as Appwrite, Databases, Account, Storage } from 'appwrite'
import { Server } from '@utils/appwrite-config'

const appwriteClient = new Appwrite()
appwriteClient
	.setEndpoint(Server.endpoint as string)
	.setProject(Server.project as string)

const account = new Account(appwriteClient)
const database = new Databases(appwriteClient)
const storage = new Storage(appwriteClient)

export { appwriteClient, account, database, storage }
