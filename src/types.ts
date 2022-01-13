import type { ViteSSGContext } from 'vite-ssg'
// declare module '../node_modules/@crestron/ch5-crcomlib/build_bundles/cjs/@types'
export type UserModule = (ctx: ViteSSGContext) => void
