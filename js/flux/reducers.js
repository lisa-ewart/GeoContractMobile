// import {
//   createUser, 
//   createFbUser,
//   createFoundItem, 
//   createLostItem,
//   getFoundItems,
//   messenger,
//   getMessages,
//   getUser,
// } from '../utils/firebase';
// import {signInWithGoogleAsync, facebookLogIn} from '../auth';
// import {getLocationAsync} from '../utils/expo';
// import {ViewNames} from './Store';



// DB FUCNTIONS


// SWITCH VIEWS

// export function changeViewFunction(oldStore, options){
//   console.log('##################', options)
//       return Promise.resolve().then(_ => {
//          return Object.assign({}, oldStore, {
//             currentView: options.viewNum,
//             viewInfo: options.viewInfo,
//             modalVisible: options.makeVisible
//             // currentModalVal: options.currentModalVal
//           })
//       })
// };

// GOOGLE AUTH && PUSH TO DATABASE

export function loginWithGoogle(oldStore){
   return signInWithGoogleAsync().then((result) => {
    const {name, email, id, photoUrl} = result.user;

   createUser(name, email, id, photoUrl)

      return Object.assign({}, oldStore, {
        currentUser: id,
        currentUserName: name,
        currentView: ViewNames.OPTION_VIEW,
      })
     })
    // return Promise.resolve().then(_ => oldStore);
};

// FACEBOOK AUTH && PUSH TO DB

export function loginWithFacebook(oldStore){
  return facebookLogIn().then((response) =>{
    const data = response.json();

    data.then((cred)=>{
      console.log('id is',cred.id);
      console.log('name is', cred.name);
      createFbUser(cred.name, cred.id);

      return Object.assign({}, oldStore, {
        currentUser: cred.id,
        currentUserName: cred.name,
        currentView: ViewNames.OPTION_VIEW,
      })

    })
   

  })
}



// GET USER LOCATION
export function getLocation(oldStore){
 return getLocationAsync().then((location) =>{
     return Object.assign({}, oldStore, {
       location: location
  })
})
}


//MESSAGING FUNCTION

export function handleNewMessage(store, options) {
  console.log('handleMessage options', options)
  const sorted = Object.keys(options.data || {}).map(key => {
    const d = options.data[key]
    d.userId = key;
    return getUser(key).then(user => {
      d.user = user;
      return d;
    })
  });

  return Promise.all(sorted).then(([...threads]) => {
    threads.sort((a,b) => a.time < b.time ? 1 : -1);
    console.log('sorted is....', threads)
    return Object.assign({}, store, {
      newMessage: threads,
    })
  })
}

export function clearNewMessages(store, options) {
  return Promise.resolve().then(_ => Object.assign({}, store, {
    newMessage: null,
  }))
}

export function receiveMessages(store, options) {
  return Promise.resolve().then(_ => Object.assign({}, store, {
    newMessage: null,
  }))
}

export function sendMessage(oldStore, options){
const {currentUser} = oldStore
const {message, userId} = options
console.log("BEFORE:", userId, currentUser)
  messenger(message, userId, currentUser);
  
  return Promise.resolve().then(_=>{
    return Object.assign({}, oldStore)
  })
}



