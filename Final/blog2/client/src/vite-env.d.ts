/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EXTERNAL_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
