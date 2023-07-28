'use client'

import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

const SignIn = () => {
	const router = useRouter()

	const handleOnSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log(new FormData(e.target as HTMLFormElement))
		router.push('/')
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<label>Email</label>
			<input name="email" type="email" />

			<label>Password</label>
			<input name="password" type="password" />

			<button type="submit">Sign in</button>
		</form>
	)
}

export default SignIn
