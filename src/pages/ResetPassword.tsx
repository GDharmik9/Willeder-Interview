import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthService from 'services/auth.service'
import { LoadingOverlay, Box } from '@mantine/core'
import FormLayout from 'common/components/templates/FormLayout'
import ChangePasswordSection from 'common/components/organisms/ChangePasswordSection'


import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ResetPassword = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [visible, { toggle, close }] = useDisclosure(false)
    const [userData, setUserData] = useState({
        password: '',
        confirmPassword: ''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleChangePassword = async (data: changePasswordProps, e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(userData)
        toggle()

        const tokenId = location.pathname.substring(location.pathname.lastIndexOf("/") + 1)

        if (tokenId === '') {
            toast.error('Invalid Token')
            return
        }
        await AuthService.resetPassword(userData.confirmPassword, tokenId).then((response) => {
            console.log(response)
            if (response.status === 200) {
                setUserData({
                    password: '',
                    confirmPassword: ''
                })
                close()
                navigate('/login')
            }
        }).catch((error) => {
            setUserData({
                password: '',
                confirmPassword: ''
            })
            close()
            toast.error(error.response.data.errorMessage.split(',')[0])
        })


    }

    return (
        <>
            <Box pos="relative">
                <LoadingOverlay visible={visible} overlayBlur={2} />
                <FormLayout >
                    <ChangePasswordSection
                        title={'Reset Password'}
                        data={userData}
                        onChange={onChange}
                        onSubmit={handleChangePassword}
                    />
                </FormLayout>
            </Box>
            <ToastContainer position="top-center" />
        </>
    )
}

export default ResetPassword