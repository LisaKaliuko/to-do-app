import { userList } from '../../../mokFirebase/auth';
import { actionTypes, authErrors } from '@constants/AuthErrors';
import { UserCreds } from '@customTypes/index';

export class UserStore {
  public addUser = (props: UserCreds) => {
    const isFieldsFill = !!(props && props.email && props.password);
    const isUserExist = userList.find((user) => user.email === props?.email);
    const isEmailCorrect = props?.email ? props.email.includes('@') : null;
    const isPasswordCorrect = props?.password
      ? props.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)
      : null;

    switch (true) {
      case !isFieldsFill: {
        return {
          type: actionTypes.error,
          message: authErrors.emptyRequireFields,
        };
      }
      case !!isUserExist: {
        return {
          type: actionTypes.error,
          message: authErrors.repeatedEmail,
        };
      }
      case !isEmailCorrect: {
        return {
          type: actionTypes.error,
          message: authErrors.notCorrectEmail,
        };
      }
      case !isPasswordCorrect: {
        return {
          type: actionTypes.error,
          message: authErrors.notCorrectPassword,
        };
      }
      default: {
        userList.push({
          name: props.name,
          age: props.age,
          email: props.email,
          password: props.password,
        });
        return {
          type: actionTypes.success,
        };
      }
    }
  };

  public loginUser = (props: UserCreds) => {
    const isFieldsFill = !!(props && props.email && props.password);
    const isUserExist = userList.find((user) => user.email === props?.email);
    const isPasswordCorrect = userList.find((user) => user.password === props?.password);

    switch (true) {
      case !isFieldsFill: {
        return {
          type: actionTypes.error,
          message: authErrors.emptyRequireFields,
        };
      }
      case !isUserExist: {
        return {
          type: actionTypes.error,
          message: authErrors.userDoenstExist,
        };
      }
      case !isPasswordCorrect: {
        return {
          type: actionTypes.error,
          message: authErrors.wrongPassword,
        };
      }
      default: {
        return {
          type: actionTypes.success,
        };
      }
    }
  };
}
