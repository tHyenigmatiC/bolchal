import styles from './button.module.sass'

interface Props {
	[key: string]: string
}

type ButtonProps = Props & {
	children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}

export const PrimaryButton = ({ children, ...props }: ButtonProps) => {
	return (
		<button className={styles.buttonPrimary} {...props}>
			{children}
		</button>
	)
}

export const SecondaryButton = ({ children, ...props }: ButtonProps) => {
	return (
		<button className={styles.buttonSecondary} {...props}>
			{children}
		</button>
	)
}
