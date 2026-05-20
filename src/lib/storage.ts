import { env } from './env';

export function getPublicBlobUrl(path: string) {
  if (!env.blobPublicUrl) {
    return path;
  }

  const baseUrl = env.blobPublicUrl.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');

  return `${baseUrl}/${cleanPath}`;
}

export function isBlobStorageConfigured() {
  return Boolean(env.blobPublicUrl);
}
