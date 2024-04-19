interface changePasswordProps {
  password: string
  confirmPassword: string
}
interface ChangePasswordSectionProps {
  title: string
  data: changePasswordProps
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: (data: changePasswordProps, event: React.FormEvent<HTMLFormElement>) => void
}
