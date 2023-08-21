/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import React, { ComponentType, Context, useContext } from 'react'

export const withContextSelector = <
	TProps extends unknown,
	TValue extends unknown,
>(
	Component: ComponentType<TProps & Record<string, TValue>>,
	context: Context<unknown>,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	selectors: Record<string, (data: unknown) => TValue>
): ComponentType<TProps & Record<string, TValue>> => {
	const MemoisedComponent = React.memo(Component) as unknown as ComponentType<
		Record<string, TValue>
	>

	// eslint-disable-next-line react/display-name
	return (props: TProps & Record<string, TValue>) => {
		const data = useContext(context)
		const contextProps = Object.keys(selectors).reduce((acc, key) => {
			acc = {
				...acc,
				key: selectors[key](data),
			}

			return acc
		}, {})

		return <MemoisedComponent {...props} {...contextProps} />
	}
}
