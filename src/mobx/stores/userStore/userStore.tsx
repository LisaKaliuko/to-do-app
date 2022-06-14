import { actionTypes } from '@constants/AuthErrors';
import { UserCreds } from '@customTypes/index';
import { auth } from '@fb/config';

export class UserStore {
  public addUser = (props: UserCreds): Promise<{ type: string; message?: string }> => {
    return auth
      .createUserWithEmailAndPassword(props.email, props.password)
      .then(() => ({ type: actionTypes.success }))
      .catch((error) => ({ type: actionTypes.error, message: error.message }));
  };

  public loginUser = (props: UserCreds): Promise<{ type: string; message?: string }> => {
    return auth
      .signInWithEmailAndPassword(props.email, props.password)
      .then(() => ({ type: actionTypes.success }))
      .catch((error) => ({ type: actionTypes.error, message: error.message }));
  };
}
