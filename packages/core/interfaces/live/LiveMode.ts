import { BaseKey } from '..'
import { LiveEvent } from './LiveEvent'

export type LiveMode = {
	/**
	 * Whether to update data automatically ("auto") or not ("manual") if a related live event is received. The "off" value is used to avoid creating a subscription.
	 * @type  [`"auto" | "manual" | "off"`](/docs/api-reference/core/providers/live-provider/#livemode)
	 * @default `"off"`
	 */
	liveMode?: 'auto' | 'manual' | 'off'
	/**
	 * Callback to handle all related live events of this hook.
	 * @type [`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)
	 * @default `undefined`
	 */
	onLiveEvent?: (event: LiveEvent) => void
	/**
	 * Params to pass to liveProvider's subscribe method if liveMode is enabled.
	 * @type [`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)
	 * @default `undefined`
	 */
	liveParams?: {
		ids?: BaseKey[]
		[key: string]: unknown
	}
}
