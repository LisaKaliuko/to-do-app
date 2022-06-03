import { userList } from '../../../mokFirebase/auth';
import { actionTypes, authErrors } from '@constants/AuthErrors';
import { UserCreds } from '@types/index';

export class UserStore {
  public addUser = (props: UserCreds) => {
    const isUserExist = userList.find((user) => user.email === props.email);

    switch (true) {
      case !props.name:
      case !props.email:
      case !props.password: {
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
}
