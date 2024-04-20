import React from 'react'
import { useForm } from '@mantine/form'
import { Anchor } from '@mantine/core'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import Text from 'common/components/atoms/Text'
import './SignupForm.scss'

const SignupForm = ({ onSubmit, onChange, data }: SignupFormProps) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      name: '',
      address: '',
      phone: '',
    },

    validate: {
      email: (value) => /^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email format',
      password: (value) => value.length < 8 ? 'Password is too short' : null,
      phone: (value) => (/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/).test(value) ? null : 'Invalid phone number',
    }
  })

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('email', event.target.value)
    onChange(event)
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('password', event.target.value)
    onChange(event)
  }

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('name', event.target.value)
    onChange(event)
  }

  const onAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('address', event.target.value)
    onChange(event)
  }

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('phone', event.target.value)
    onChange(event)
  }


  return (
    <>
      <form className="sign-form" onSubmit={form.onSubmit((values, event) => { onSubmit(values, event) })}>
        <Input
          {...form.getInputProps('email')}
          placeholder="Enter your e-mail address"
          label="Email"
          type="text"
          name='email'
          value={data.email}
          onChange={onEmailChange}
          required
        />
        <Input
          {...form.getInputProps('password')}
          placeholder="Enter your password"
          label="Password"
          type="password"
          name='password'
          value={data.password}
          onChange={onPasswordChange}
          required
        />
        <Input
          {...form.getInputProps('name')}
          placeholder="Enter your name"
          label="Name"
          type="text"
          name='name'
          value={data.name}
          onChange={onNameChange}
          required
        />
        <Input
          {...form.getInputProps('address')}
          placeholder='Enter your address'
          label='Address'
          type='text'
          name='address'
          value={data.address}
          onChange={onAddressChange}
          required
        />
        <Input
          {...form.getInputProps('phone')}
          placeholder='Enter your phone number'
          label='Phone'
          type='number'
          name='phone'
          value={data.phone}
          onChange={onPhoneChange}
          required
        />
        <div className="button-wrapper">
          <Button fullWidth type="submit">Sign Up</Button>
        </div>

        <div
          style={{ display: 'flex', justifyContent: 'Center', marginTop: '16px' }}
        >
          <Text fw={700} fz={'xs'}>
            Already Sign up
          </Text>
          &nbsp;
          <Anchor href={'/login'}>
            <Text color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
              Login
            </Text>
          </Anchor>
        </div>
      </form>
    </>
  )
}

export default SignupForm