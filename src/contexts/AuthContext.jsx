// import React, { Component, createContext } from "react";
// import firebase, { db } from "../config/firebase";

// export const AuthContext = createContext();

// export default class AuthContextProvider extends Component {
//   state = {
//     isAuthanticated: false,
//     user: {}
//   };

//   componentDidMount = () => {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         this.setState({ isAuthenticated: true, user: user });
//         console.log('logged in');
//         db.collection("users")
//           .get()
//           .then(querySnapshot => {
//             querySnapshot.forEach(doc => {
//               let user = doc.data();
//               if (user.role === 1) {
//                 // alert("Admin");
//               }
//             });
//           });
//       } else {
//         console.log("User is logged out");
//         this.setState({ isAuthenticated: false, user: {} });
//       }
//     });
//   };

//   render() {
//     return (
//       <AuthContext.Provider value={{ ...this.state }}>
//         {this.props.children}
//       </AuthContext.Provider>
//     );
//   }
// }
