interface UserForgetPassword {
    email: string;
}

interface ForgetPasswordProps {
    onSubmit: (values: UserForgetPassword, event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    data: UserForgetPassword;
}