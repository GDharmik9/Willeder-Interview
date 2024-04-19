interface UserLogin {
  email: string
  password: string
}
interface LoginSectionProps {
  title: string
  data: UserLogin
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onLogin: (event: React.ChangeEvent<HTMLFormElement>, data: UserLogin) => void
}
