interface UserLogin {
  email: string
  password: string
}
interface LoginSectionProps {
  title: string
  data: UserLogin

  onChange: React.ChangeEventHandler<HTMLInputElement>
  onLogin: (data: UserLogin, event: React.FormEvent<HTMLFormElement>) => void
}
