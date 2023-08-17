import { useAutosizeTextArea } from '@hooks'
import React, {
	useRef,
	DetailedHTMLProps,
	TextareaHTMLAttributes,
	useMemo,
} from 'react'

type Props = DetailedHTMLProps<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
> & {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value: string
}

export const useAutoExpandingTextArea = (props?: Props) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	const { value, ...otherProps } = props as Props

	useAutosizeTextArea(textAreaRef.current, value)

	const AutoExpandableTextArea = useMemo<React.JSX.Element>(() => {
		// eslint-disable-next-line react/display-name
		return (
			<textarea
				ref={textAreaRef}
				value={value}
				rows={1}
				{...otherProps}
			/>
		)
	}, [value, otherProps])

	return useMemo(
		() => ({
			AutoExpandableTextArea,
		}),
		[AutoExpandableTextArea]
	)
}
