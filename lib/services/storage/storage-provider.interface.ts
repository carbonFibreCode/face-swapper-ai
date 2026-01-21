export interface IStorageProvider {
    getPresignedUrl(key: string, contentType: string, options?: { metadata?: Record<string, string>, contentLength?: number }): Promise<string>;
    getPresignedGetUrl(key: string): Promise<string>;
    upload(buffer: Buffer, key: string, contentType: string): Promise<string>;
    delete(key: string): Promise<boolean>;
    list(prefix: string): Promise<string[]>;
}