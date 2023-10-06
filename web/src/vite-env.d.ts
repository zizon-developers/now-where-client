/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_REST_API_KEY: string;
  readonly VITE_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
