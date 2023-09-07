import Link from 'next/link'
import { FormEvent, useState } from 'react'

// Store
import { setUser } from 'src/store/slices/userSlice'

// Components
import Button from 'src/components/global/standard/Button'
import Input from 'src/components/global/standard/Input'

// Styles
import AuthPageContainer, { AuthForm } from 'src/styles/pages/auth'
import { useRouter } from 'next/router'

function Signin() {

  const route = useRouter()

  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
  })

  // Handlers
  function handleFormChange(field: string, value: string) {
    setAuthForm(prevAuthForm => ({
      ...prevAuthForm,
      [field]: value,
    }))
  }
  async function onSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault()

    if (!authForm.email || !authForm.password) return

    try {
      const user = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signin`, {
          method: 'POST',
          body: JSON.stringify(authForm),
          headers: {
            'content-type': 'application/json',
          },
        })
      ).json()

      setUser(user)
      localStorage.setItem('m-token', user.accessToken)
      route.push('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthPageContainer>

      <h1>Manit</h1>

      <AuthForm onSubmit={(event) => onSubmit(event)}>
        <header>
          <h4>Entre em sua conta</h4>

          <p>
            Novo por aqui?
            <Link href="/auth/signup">Crie uma conta</Link>
          </p>
        </header>

        <div className="fields-group">
          <Input
            title="Email"
            name="email"
            value={authForm.email}
            onChange={(e) => handleFormChange(e.target.name, e.target.value)}
          />
          <Input
            title="Senha"
            name="password"
            value={authForm.password}
            onChange={(e) => handleFormChange(e.target.name, e.target.value)}
          />
        </div>

        <Button
          type="submit"
        >
          Entrar
        </Button>
      </AuthForm>
    </AuthPageContainer>
  )
}

export default Signin
