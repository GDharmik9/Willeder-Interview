import React from 'react'
import { LoadingOverlay, Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import FormLayout from 'common/components/templates/FormLayout'
import LoginSection from 'common/components/organisms/LoginSection'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthService from 'services/auth.service'

const Login = () => {
    const navigate = useNavigate()
    const [visible, { toggle, close }] = useDisclosure(false)
    const [userLoginData, setUserLoginData] = React.useState({
        email: '',
        password: ''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value
        setUserLoginData({
            ...userLoginData,
            [e.target.name]: value,
        })
    }

    const handleLogin = async (data: UserLogin, e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(userLoginData)
        if (userLoginData.email !== '' || userLoginData.password !== '') {
            setUserLoginData({
                email: data.email,
                password: data.password
            })
            toggle()
        }
        await AuthService.login(userLoginData.email, userLoginData.password).then((response) => {
            console.log(response)
            if (response.status === 200) {
                setUserLoginData({
                    email: '',
                    password: ''
                })
                close()
                navigate('/dashboard')
            }
        }).catch((error) => {
            setUserLoginData({
                email: '',
                password: ''
            })
            close()
            toast.error(error.response.data.errorMessage.split(',')[0])
        })

    }

    return (
        <>
            <Box pos="relative">
                <LoadingOverlay visible={visible} zIndex={1000} />
                <FormLayout>
                    <LoginSection
                        title="Login"
                        data={userLoginData}
                        onChange={onChange}
                        onLogin={handleLogin}
                    />
                </FormLayout>
            </Box>
            <ToastContainer position="top-center" />
        </>
    )
}

export default Login