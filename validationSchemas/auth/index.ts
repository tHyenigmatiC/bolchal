import { z } from 'zod'

export const loginValidationSchema = z.object({
	email: z.string().email({ message: 'Invalid email' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long' }),
})

export const registerValidationSchema = z.object({
	fname: z.string().min(1, { message: 'First name is required' }),
	lname: z.string().optional(),
	email: z.string().email({ message: 'Invalid email' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long' }),
})
