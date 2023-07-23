import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.conf_chrome'

export const config: Options.Testrunner = {
    ...baseConfig,
   
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'MicrosoftEdge',
            acceptInsecureCerts: true
        }
    ]
}

