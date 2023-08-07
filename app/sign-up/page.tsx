import styles from './page.module.sass'
import { PrimaryButton as SubmitButton } from '@components/Button'
import { RegisterForm, TextInput, PasswordInput } from '@lib/core/components'
import Link from 'next/link'

const SignIn = () => {
	return (
		<main className={styles.container}>
			<section className={styles.appIntro}>
				<h1>Bolchal</h1>
				<h5>Mitratako aadhar</h5>
				<p>nepali social media platform</p>
			</section>
			<RegisterForm>
				<TextInput name="fname" type="text" placeholder="First name" />
				<TextInput name="lname" type="text" placeholder="Last name" />
				<TextInput name="email" type="email" placeholder="Email" />
				<PasswordInput name="password" placeholder="Password" />
				<SubmitButton type="submit">Sign up</SubmitButton>
				<p>
					Already have an account ?
					<Link href={'./sign-in'}>Sign in</Link>
				</p>
			</RegisterForm>
		</main>
	)
}

export default SignIn
