import { useRouter } from 'next/router'
import {
  ReactNode, useEffect, useMemo, useRef, useState,
} from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken'

// Store
import { useAppDispatch } from 'src/store/reducers'
import { setUser } from 'src/store/slices/userSlice'

// Components
import Loading from 'src/components/global/screens/Loading'

type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useAppDispatch()
  const { push, pathname } = useRouter()

  // States
  const [loading, setLoading] = useState(true)

  // Refs
  const token = useRef(null)

  const privateRoutes = useMemo(() => ({
    '/dashboard': '/dashboard',
    '/dashboard/team': '/dashboard/team',
    '/auth/signin': '/auth/signin',
    '/auth/signup': '/auth/signup',
  }), [])

  useEffect(() => {
    if (!!privateRoutes[pathname] && typeof window !== 'undefined') {
      token.current = localStorage?.getItem('m-token') || ''

      if (token.current) {
        const decodedToken = jwt.decode(token.current);

        (async () => {
          try {
            const userData = await (
              await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${decodedToken?.sub}`,
                {
                  method: 'GET',
                  headers: {
                    Authorization: `Bearer ${token.current}`,
                  },
                },
              )
            ).json()

            dispatch(setUser(userData))
            push('/dashboard')
          } catch (error) {
            console.error(error)
          } finally {
            setTimeout(() => setLoading(false), 1000)
          }
        })()
      } else {
        if (pathname !== '/auth/sign' && pathname !== '/auth/signup') {
          push('/auth/signin')
        }
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }, [pathname, dispatch, privateRoutes, push])

  return loading ? <Loading /> : (children as JSX.Element)
}
export default AuthProvider
