export interface StoragePort {
  upload(file: File, path: string): Promise<string>
  delete(path: string): Promise<void>
  getUrl(path: string): Promise<string>
}