/* eslint-disable no-unused-vars */
export enum actionTypes {
  error = 'Error',
  success = 'Success',
}

export enum authErrors {
  emptyRequireFields = 'Please fill all require fields',
  repeatedEmail = 'User with this email is already exist',
  notCorrectEmail = 'Your email is not correct',
  notCorrectPassword = 'Password must be 6-20 symbols, includes at least one number, one uppercase letter and one lowercase letter',
  userDoenstExist = 'This user doesnt exist. Please check your email address',
  wrongPassword = 'Wrong password',
}
