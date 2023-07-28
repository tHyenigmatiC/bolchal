'use client'

import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

const SignUp = () => {
	const router = useRouter()

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log(new FormData(e.target as HTMLFormElement))
		router.push('/')
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Full Name</label>
			<input name="name" type="text" />

			<label>Email</label>
			<input name="email" type="email" />

			<label>Password</label>
			<input name="password" type="password" />

			<button type="submit">Sign up</button>
		</form>
	)
}

export default SignUp
