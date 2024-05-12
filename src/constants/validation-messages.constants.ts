export const VALIDATION_MESSAGES = {
    REQUIRED: "This field is required.",
    INVALID_EMAIL: "Invalid email address.",
    PASSWORD: {
        TOO_SHORT: "Password must be at least 8 characters long.",
        NO_UPPERCASE: "Password must contain at least one uppercase letter.",
        NO_LOWERCASE: "Password must contain at least one lowercase letter.",
        NO_NUMBER: "Password must contain at least one number.",
        NO_SPECIAL_CHAR:
            "Password must contain at least one special character.",
        MATCHES_CONFIRMATION: "Passwords do not match.",
    },
    INVALID_USERNAME: "Invalid username.",
    INVALID_PHONE: "Invalid phone number.",
    INVALID_DATE: "Invalid date.",
} as const;
