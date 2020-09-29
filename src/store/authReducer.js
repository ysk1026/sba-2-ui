export const SignupAction = signup => ({
    type : "SIGN_UP",
    payload : signup
})

const initialState = {signups : []}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SIGN-UP":
            return {...state, signups: [...state.signups, action.payload]}
        }
        
}