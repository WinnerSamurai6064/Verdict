/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_APP_URL?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_BLOB_PUBLIC_URL?: string;
  readonly VITE_ENABLE_GOOGLE_AUTH?: string;
  readonly VITE_ENABLE_MEGA_LOGIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
