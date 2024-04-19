interface changePasswordProps {
  newPassword: string
  oldPassword: string
}
interface ChangePasswordFormProps {
  data: changePasswordProps
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void
}
