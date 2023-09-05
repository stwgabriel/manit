import { useRouter } from 'next/router'
import {
  ReactNode, ReactElement, useEffect, useRef,
} from 'react'

import { useAppSelector } from 'src/store/reducers'

type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider({
  children,
}: AuthProviderProps): ReactElement {

  const router = useRouter()

  const user = useAppSelector(state => state.user)
  const token = useRef(null)

  const privateRoutes = {
    '/dashboard': '/dashboard',
    '/dashboard/team': '/dashboard/team',
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      token.current = localStorage?.getItem('token') || ''
    }
  }, [])

  if (privateRoutes[router.pathname]) {
    if (!user && !!token) return <>Loading...</>
    if (!user && !token) router.push('/auth/signin')
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  )
}

export default AuthProvider
