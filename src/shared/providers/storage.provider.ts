import { S3StorageAdapter } from "@core/adapters/s3-storage.adapter";
import { StoragePort } from "@core/ports/storage";

export class StorageProvider {
  private static instance: StoragePort

  static getInstance(): StoragePort {
    if (!StorageProvider.instance) {
      StorageProvider.instance = new S3StorageAdapter()
    }

    return StorageProvider.instance
  }
}