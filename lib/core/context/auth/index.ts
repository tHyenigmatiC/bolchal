'use client'

import React from 'react'
import { IAuthContext } from '@lib/core/interfaces'

export const AuthContext = React.createContext<Partial<IAuthContext>>({})
