import { InputProps } from '../types'
import styles from './input.module.sass'

export const TextInput = ({ ...props }: InputProps) => {
	return <input className={styles.textinput} {...props} />
}
