export const validateEmail = (email) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)

export const validatePassword = (password) => /^[a-zA-Z0-9]+$/.test(password)