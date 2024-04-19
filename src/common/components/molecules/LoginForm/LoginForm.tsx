import React, { ChangeEvent } from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import './LoginForm.scss'
import Text from 'common/components/atoms/Text'
import { Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'


const LoginForm = ({ onSubmit, onChange, data }: LoginFormProps) => {
  const form = useForm({
    initialValues: {
      password: '',
      email: '',
    },
    validate: {
      email: (value: string) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email format'),
    },
  })

  const onUserEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('email', event.target.value);

    onChange(event)
  }

  const onUserPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('password', event.target.value);
    onChange(event)
  }

  return (
    <>
      <form
        className="login-form"
        onSubmit={form.onSubmit((values, event) => { onSubmit(values, event) })}
      >
        <Input
          {...form.getInputProps('email')}
          placeholder={'Enter your email/username'}
          label={'Email/Username'}
          name='email'
          type={'text'}
          value={data.email}
          onChange={onUserEmailChange}
          required
        />
        <Input
          {...form.getInputProps('password')}
          name='password'
          placeholder={'Enter your password'}
          label={'Password'}
          type={'password'}
          value={data.password}
          onChange={onUserPasswordChange}
          required

        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Anchor href={'/forget-password'}>
            <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
              Forget Password
            </Text>
          </Anchor>
        </div>
        <div className="button-wrapper">
          <Button fullWidth type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}



export default LoginForm
