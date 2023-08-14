import { useAutosizeTextArea } from '@hooks'
import {
	useRef,
	ChangeEventHandler,
	DetailedHTMLProps,
	TextareaHTMLAttributes,
	useState,
	useMemo,
} from 'react'

type Props = DetailedHTMLProps<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
>

export const useAutoExpandingTextArea = (props?: Props) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null)
	const [text, setText] = useState<string>('')

	useAutosizeTextArea(textAreaRef.current, text)

	const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		setText(event.target.value)
	}

	const AutoExpandingTextArea = useMemo(() => {
		// eslint-disable-next-line react/display-name
		return () => (
			<textarea
				ref={textAreaRef}
				value={text}
				onChange={handleChange}
				rows={1}
				{...props}
			/>
		)
	}, [props, text])

	return useMemo(
		() => ({
			AutoExpandingTextArea,
			text,
			setText,
		}),
		[AutoExpandingTextArea, text, setText]
	)
}
