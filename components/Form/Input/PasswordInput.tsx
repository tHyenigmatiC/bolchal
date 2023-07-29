import { InputProps } from '../types'
import styles from './input.module.sass'

export const PasswordInput = ({ ...props }: InputProps) => {
	return <input className={styles.passwordinput} type="password" {...props} />
}
