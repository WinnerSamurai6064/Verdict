export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'Verdict',
  appUrl: import.meta.env.VITE_APP_URL ?? 'http://localhost:5173',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
  blobPublicUrl: import.meta.env.VITE_BLOB_PUBLIC_URL ?? '',
  enableGoogleAuth: import.meta.env.VITE_ENABLE_GOOGLE_AUTH !== 'false',
  enableMegaLogin: import.meta.env.VITE_ENABLE_MEGA_LOGIN === 'true',
};

export const isSupabaseConfigured = Boolean(env.supabaseUrl && env.supabaseAnonKey);
