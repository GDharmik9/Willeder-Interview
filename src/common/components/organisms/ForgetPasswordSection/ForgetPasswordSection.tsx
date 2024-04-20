import React from 'react'
import { Title } from '@mantine/core'
import ForgetPassword from 'common/components/molecules/ForgetPassword'

import './ForgetPasswordSection.scss'

const ForgetPasswordSection = ({
  onChange,
  onSubmit,
  data,
}: ForgetSectionProps) => {
  return (
    <section className="forgetPassword-section">
      <Title order={3} ta={'center'}>
        Forget Password
      </Title>
      <ForgetPassword
        data={data}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </section>
  )
}

export default ForgetPasswordSection
