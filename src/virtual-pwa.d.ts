declare module 'virtual:pwa-register' {
  export function registerSW(opts?: {
    onRegistered?: (registration?: any) => void
    onRegisterError?: (err?: any) => void
  }): () => void
}
