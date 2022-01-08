import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app, initialState, isClient }) => {
  return { app, initialState, isClient, CrComLib }

  CrComLib.publishEvent('cr-com-lib') // do something
}
