"use client"
import { ClerkProvider } from '@clerk/nextjs'
import React, { PropsWithChildren } from 'react'

const Provider = ({children}: PropsWithChildren) => {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  )
}

export default Provider
