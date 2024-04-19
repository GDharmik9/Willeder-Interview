import React, { ChangeEvent } from 'react'
import { useForm } from '@mantine/form'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'

import './ChangePasswordForm.scss'

const ChangePasswordForm = ({
  onChange,
  data,
  onSubmit,
}: ChangePasswordFormProps) => {

  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: ''
    },

    validate: {
      password: (value) => {
        if (value.length < 8) {
          return 'Password should be at least 8 characters long'
        }
        return null
      },
      confirmPassword: (value) => {
        if (value !== form.values.password) {
          return 'Passwords should match'
        }
        return null
      },
    }
  })

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('password', event.target.value)
    onChange(event)
  }

  const onConfirmChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('confirmPassword', event.target.value)
    onChange(event)
  }

  return (
    <form className="change-password-form" onSubmit={form.onSubmit((values, event) => { onSubmit(values, event) })}>
      <Input
        {...form.getInputProps('password')}
        placeholder={'Enter your password'}
        label={'Password'}
        value={data.password}
        type={'password'}
        onChange={onPasswordChange}
        name='password'
      />
      <Input
        {...form.getInputProps('confirmPassword')}
        placeholder={'Enter your password again'}
        type={"password"}
        label={'Confirm Password'}
        value={data.confirmPassword}
        onChange={onConfirmChange}
        name={"confirmPassword"}
      />
      <div className="button-wrapper">
        <Button fullWidth type='submit'>
          submit
        </Button>
      </div>
    </form>
  )
}

export default ChangePasswordForm
