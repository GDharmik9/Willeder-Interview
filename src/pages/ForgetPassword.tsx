import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { LoadingOverlay, Box } from '@mantine/core'
import Button from 'common/components/atoms/Button'
import FormLayout from 'common/components/templates/FormLayout'
import ForgetPasswordSection from 'common/components/organisms/ForgetPasswordSection'
import AuthService from 'services/auth.service'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ForgetPassword = () => {
    const [visible, { toggle, close }] = useDisclosure(false)
    const [emailId, setEmailId] = useState('')
    const [status, setStatus] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value
        setEmailId(value)
    }

    const onsubmit = async (data: UserForgetPassword, e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (emailId !== '') {
            setEmailId(data.email)
            toggle()
        }
        await AuthService.forgetPassword(data.email).then((response) => {
            if (response.status === 200) {
                setEmailId('')
                close()
                setStatus(true)
            }
        }).catch((error) => {
            setEmailId('')
            close()
            toast.error(error.response.data.errorMessage?.split(',')[0])
        })
    }


    return (
        <>
            <Box pos="relative">
                <LoadingOverlay visible={visible} overlayBlur={2} />
                {!status ? (
                    <FormLayout>
                        <ForgetPasswordSection
                            data={{ email: emailId }}
                            onChange={onChange}
                            onSubmit={onsubmit}
                        />
                    </FormLayout>
                ) : (
                    <FormLayout >
                        <form className="forget-password">
                            <h3 style={{ fontWeight: 900, padding: '16px' }}>
                                Password reset Link is send
                            </h3>
                            <div className="button-wrapper">
                                <Link to="/login">
                                    <Button fullWidth>Ok</Button>
                                </Link>
                            </div>
                        </form>
                    </FormLayout>
                )}
            </Box>
            <ToastContainer position="top-center" />
        </>
    )
}

export default ForgetPassword