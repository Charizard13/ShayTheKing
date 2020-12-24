import { auth } from "../../../firebase";

export function signUpUser(action) {
  return auth.createUserWithEmailAndPassword(action.email, action.password);
}
export function loginUser(action) {
  return auth.signInWithEmailAndPassword(action.email, action.password);
}
export function logOutUser() {
  return auth.signOut();
}
export function passwordResetUser(email) {
  return auth.sendPasswordResetEmail(email);
}
export function emailUpdateUser(email) {
  return auth.updateEmail(email);
}
export function passwordUpdateUser(password) {
  return auth.updatePassword(password);
}
