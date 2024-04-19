import React from 'react'
import LoginForm from 'common/components/molecules/LoginForm'
import { Title } from '@mantine/core'
import './LoginSection.scss'

const LoginSection = ({
  title,
  data,
  onChange,
  onLogin,
}: LoginSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <LoginForm data={data} onChange={onChange} onSubmit={onLogin} />
    </section>
  )
}

export default LoginSection
