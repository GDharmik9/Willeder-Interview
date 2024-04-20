interface UserSignup {
    email: string
    password: string
    name: string
    address: string
    phone: string
}

interface SignupSectionProps {
    title: string
    data: UserSignup
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onSubmit: (data: UserSignup, event: React.FormEvent<HTMLFormElement>) => void
}