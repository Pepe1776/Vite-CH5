import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'
import type { UserModule } from '~/types'

export const install: UserModule = () => {
  return CrComLib
}
