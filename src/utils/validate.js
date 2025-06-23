export const checkSignInForm = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/.test(password);
                            
console.log(password)
    if(!isEmailValid) return "Email ID is not valid";
   else if(!isPasswordValid) return "Password is not valid";

    return null;
}