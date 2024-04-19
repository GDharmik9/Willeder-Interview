import React, { ChangeEvent } from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import './LoginForm.scss'
import Text from 'common/components/atoms/Text'
import { Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const form = useForm({
    initialValues: {
      password: '',
      email: '',
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <form
      className="login-form"
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
        onSubmit(e, form.values)
      }}
    >
      <Input
        placeholder={'placeholder'}
        label={'Username'}
        type={'text'}
        {...form.getInputProps('email')}
      />
      <Input
        placeholder={'placeholder'}
        label={'Password'}
        type={'password'}
        {...form.getInputProps('password')}
      />
      <Anchor href={'/forget-password'}>
        <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
          Forget Password
        </Text>
      </Anchor>
      <div className="button-wrapper">
        <Button fullWidth type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
