import { R2StorageProvider } from "./r2-storage-provider";
import { IStorageProvider } from "./storage-provider.interface";
export type { IStorageProvider } from "./storage-provider.interface";
export { R2StorageProvider } from "./r2-storage-provider";
export const storageProvider: IStorageProvider = new R2StorageProvider();