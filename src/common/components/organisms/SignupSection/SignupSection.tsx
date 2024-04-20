import React from 'react'
import { Title } from '@mantine/core'
import SignupForm from 'common/components/molecules/SignupForm'
import './SignupSection.scss'

const SignupSection = ({ title, data, onChange, onSubmit }: SignupSectionProps) => {
  return (
    <section className="signup-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <SignupForm data={data} onChange={onChange} onSubmit={onSubmit} />
    </section>
  )
}

export default SignupSection