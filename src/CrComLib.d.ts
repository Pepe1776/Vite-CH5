import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'

declare module '@crestron/ch5-crcomlib/' {
  interface CrComLib {
    $CrComLib: CrComLib
  }
}
export { CrComLib }
