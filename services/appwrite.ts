import { Client as Appwrite, Databases, Account } from 'appwrite'
import { Server } from '@utils/appwrite-config'

type AppwriteSDK = {
	database: Databases
	account: Account
} | null

interface IAppWriteClient {
	sdk: AppwriteSDK
	provider: () => void
}

export const AppWriteClient: IAppWriteClient = {
	sdk: null,
	provider: () => {
		if (AppWriteClient.sdk) {
			return AppWriteClient.sdk
		}

		const appwrite = new Appwrite()
		appwrite
			.setEndpoint(Server.endpoint as string)
			.setProject(Server.project as string)
		const account = new Account(appwrite)
		const database = new Databases(appwrite)
		AppWriteClient.sdk = { database, account }
		return AppWriteClient.sdk
	},
}
