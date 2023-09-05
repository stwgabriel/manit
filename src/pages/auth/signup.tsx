import Link from 'next/link'
import { FormEvent, useState } from 'react'

// Components
import Button from 'src/components/global/standard/Button'
import Input from 'src/components/global/standard/Input'

// Styles
import AuthPageContainer, { AuthForm } from 'src/styles/pages/auth'
import { setUser } from 'src/store/slices/userSlice'

function Signup() {

  const [authForm, setAuthForm] = useState({
    name: '',
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
  async function onSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault()

    if (!authForm.name || !authForm.email || !authForm.password) return

    try {
      const user = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(authForm),
        headers: {
          'content-type': 'application/json',
        },
      })

      setUser(user)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthPageContainer>
      <h1 className="logo">Manit</h1>

      <AuthForm onSubmit={(e) => onSubmit(e)}>
        <header>

          <h4>Crie sua conta</h4>

          <p>
            Já possui uma conta?
            <Link href="/auth/signin">Fazer Login</Link>
          </p>
        </header>

        <div className="fields-group">

          <Input
            title="Nome"
            name="name"
            value={authForm.name}
            onChange={(e) => handleFormChange(e.target.name, e.target.value)}
          />

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

export default Signup
