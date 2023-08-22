'use client'

import React from 'react'

import { IAuthContext } from '../../interfaces'

export const AuthContext = React.createContext<Partial<IAuthContext>>({})
