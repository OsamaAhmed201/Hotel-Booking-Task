export const validateRegisterForm = {
    userName: {
        required: "User name is required",
        minLength: {
            value: 2,
            message: "Name must be at least 2 characters",
        },
        maxLength: {
            value: 8,
            message: "Name must be at most 8 characters",
        },
        validate: {
            hasNumber: (value: any) =>
                /\d/.test(value) || "Name must contain at least one number",
        },
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
        },
    },
    country: {
        required: "Country is required",
    },
    phoneNumber: {
        required: "Phone number is required",
        pattern: {
            value: /^[+]?[\d\s\-]+$/,
            message: "Invalid phone number format",
        },
    },
    password: {
        required: "Password is required",
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
            message: "Password must be at least 6 characters and include uppercase, lowercase, number, and special character",
        },
    },
    confirmPassword: (password: string | undefined) => ({
        required: "Please confirm your password",
        validate: (value: string | undefined) =>
            value === password || "Passwords do not match",
    }),
};