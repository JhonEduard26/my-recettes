import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import { StoragePort } from '@core/ports/storage'

export class S3StorageAdapter implements StoragePort {
  private readonly client: S3Client
  private readonly bucket: string

  constructor() {
    this.client = new S3Client({
      region: process.env.AWS_REGION as string,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    })

    this.bucket = process.env.AWS_BUCKET_NAME as string
  }

  async upload(file: File, path: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: path,
      Body: file,
      ContentType: file.type,
    })

    await this.client.send(command)
    return this.getUrl(path)
  }

  async delete(path: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: path,
    })

    await this.client.send(command)
  }

  async getUrl(path: string): Promise<string> {
    return `https://${this.bucket}.s3.amazonaws.com/${path}`
  }
}
