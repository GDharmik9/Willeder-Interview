interface changePasswordProps {
  password: string
  confirmPassword: string
}
interface ChangePasswordFormProps {
  data: changePasswordProps
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: (data: changePasswordProps, event: React.FormEvent<HTMLFormElement>) => void
}
