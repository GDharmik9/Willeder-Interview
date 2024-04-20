interface UserForgetPassword {
  email: string
}

interface ForgetSectionProps {
  data: UserForgetPassword
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (data: UserForgetPassword, event: React.FormEvent<HTMLFormElement>) => void
}
