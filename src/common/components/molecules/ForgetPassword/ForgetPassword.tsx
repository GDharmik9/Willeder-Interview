import React from 'react'
import { useForm } from '@mantine/form'
import { Anchor, Text } from '@mantine/core'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import './ForgetPassword.scss'

const ForgetPassword = ({ onSubmit, onChange, data }: ForgetPasswordProps) => {
    const form = useForm({
        initialValues: {
            email: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email format'),
        }
    })


    return (
        <>
            <form className='forgetPassword-form' onSubmit={form.onSubmit((values, event) => { onSubmit(values, event) })}>
                <Input
                    {...form.getInputProps('email')}
                    placeholder={'Enter your email'}
                    label={'Email'}
                    name='email'
                    type={'text'}
                    value={data.email}
                    onChange={(event) => {
                        form.setFieldValue('email', event.target.value)
                        onChange(event)
                    }}
                    required
                />
                <div className='button-wrapper'>
                    <Button

                        type={'submit'}
                        fullWidth
                    >
                        Submit
                    </Button>
                </div>

                <Anchor href={'/login'}>
                    <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
                        Back to Login
                    </Text>
                </Anchor>
            </form >
        </>
    )
}

export default ForgetPassword