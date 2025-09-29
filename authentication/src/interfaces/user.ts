interface users {
    email: string,
    username: string,
    password: string,
}

interface logInUser {
    email?: string,
    username?: string,
    password: string,
}

interface signUpUser {
    email: string,
    username: string,
    password: string
    confirmPassword: string,
}

export type { users, logInUser, signUpUser };