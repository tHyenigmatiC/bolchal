import styles from './page.module.sass'
import { PrimaryButton as SubmitButton } from '@components'
import { LoginForm, TextInput, PasswordInput } from '@packages/core/components'
import Link from 'next/link'

const SignIn = () => {
	return (
		<main className={styles.container}>
			{/* left side content */}
			<section className={styles.appIntro}>
				<h1>Bolchal</h1>
				<h5>Mitratako aadhar</h5>
				<p>nepali social media platform</p>
			</section>
			{/* right side content */}
			<LoginForm>
				<TextInput name="email" type="email" placeholder="Email" />
				<PasswordInput name="password" placeholder="Password" />
				<SubmitButton type="submit">Sign in</SubmitButton>
				<p>
					<Link href={'./forgot-password'}>Forgot Password?</Link>
				</p>
				<p>
					Don&apos;t have an account ?
					<Link href={'./sign-up'}>Sign up</Link>
				</p>
			</LoginForm>
		</main>
	)
}

export default SignIn
