import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app, router, isClient }) => {
  return { CrComLib, app, router, isClient }
}
