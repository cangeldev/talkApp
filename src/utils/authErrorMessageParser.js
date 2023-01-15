export default function authErrorMessageParser(errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "E-posta adresi kötü biçimlendirilmiş."

        case "auth/weak-password":
            return "Şifre en az 6 karakter olmalıdır."

        case "auth/email-already-in-use":
            return "Email adresi daha önce alınmış."

        case "auth/user-not-found":
            return "Email adresi bulunamadı."

        case "auth/wrong-password":
            return "Email adresi veya şifre yanlış."
            
        default:
            return errorCode
    }
}