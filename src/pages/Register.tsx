import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { LoadingOverlay, Box } from '@mantine/core'
import AuthService from 'services/auth.service'
import FormLayout from 'common/components/templates/FormLayout'
import SignupSection from 'common/components/organisms/SignupSection'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
    const navigate = useNavigate()
    const [visible, { toggle, close }] = useDisclosure(false)
    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
        name: '',
        address: '',
        phone: ''
    })

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUserData({ ...userData, [name]: value })
    }

    const onSubmit = async (data: UserSignup, event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (data.email !== '' || data.password !== '' || data.name !== '' || data.address !== '' || data.phone !== '') {
            toggle()
        }


        await AuthService.register(data.email, data.password, data.name, data.address, parseInt(data.phone))
            .then((response) => {
                if (response.status === 200) {
                    setUserData({
                        email: '',
                        password: '',
                        name: '',
                        address: '',
                        phone: ''
                    })
                    close()
                    navigate('/login')
                }
            })
            .catch((error) => {
                setUserData({
                    email: '',
                    password: '',
                    name: '',
                    address: '',
                    phone: ''
                })
                close()
                toast.error(error.response.data.errorMessage.split(',')[0])
            })

    }

    return (
        <>
            <Box pos="relative">
                <LoadingOverlay visible={visible} overlayBlur={2} zIndex={1000} />
                <FormLayout>
                    <SignupSection
                        title="Register"
                        data={userData}
                        onChange={onChange}
                        onSubmit={onSubmit}
                    />
                </FormLayout>
            </Box>
            <ToastContainer position="top-center" />
        </>
    )
}

export default Register