import React from 'react'
import Button from 'common/components/atoms/Button'
import Input from 'common/components/atoms/Input'
import { Title, Anchor, Text } from '@mantine/core'

import './ForgetPasswordSection.scss'

const ForgetPasswordSection = ({
  onChange,
  onSubmit,
  data,
}: ForgetFormProps) => {
  return (
    <form className="forget-password">
      <Title order={3} ta={'center'}>
        Froget Password
      </Title>
      <Input
        placeholder={'email'}
        onChange={onChange}
        label={'Forget Password'}
        value={data}
        type={'text'}
        name="forgetPassword"
      />
      <div className="button-wrapper">
        <Button onClick={onSubmit} fullWidth>
          Submit
        </Button>
      </div>
      <Anchor href={'/login'}>
        <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
          Back to Login
        </Text>
      </Anchor>
    </form>
  )
}

export default ForgetPasswordSection
