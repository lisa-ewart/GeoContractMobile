import{
    createNewUser,
    loginWithGoogle,
    loginWithFacebook,
    getLocation,
    sendMessage,
    receiveMessages,
    handleNewMessage,
    clearNewMessages,
} from './reducers'

export const actions ={
    "NEW_USER": (...args) => createNewuser(...args),
    'GOOGLE_SIGN_IN': (...args) => loginWithGoogle(...args),
    'FACEBOOK_SIGN_IN': (...args) => loginWithFacebook (...args),
    'GET_LOCATION':(...args) => getLocation(...args),
    'SEND_MESSAGE':(...args)=> sendMessage(...args),
    'RECIEVE_MESSAGES':(...args)=> recieveMessages(...args),
    "NEW_MESSAGE": (...args) => handleNewMessage(...args),
    "CLEAR_MESSAGES": (...args) => clearNewMessages(...args),
}

