import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { actionTypes } from '@constants/AuthErrors';
import { UserCreds } from '@customTypes/index';
import { auth } from '@fb/config';
import { CurrentUser } from './types';

export class UserStore {
  currentUser: CurrentUser;

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      addUser: action,
      loginUser: action,
      isUserIn: computed,
      logOutUser: action,
    });

    this.currentUser = {
      email: '',
      isSignIn: false,
    };
  }

  public addUser = (props: UserCreds): Promise<{ type: string; message?: string }> => {
    return auth
      .createUserWithEmailAndPassword(props.email, props.password)
      .then((user) => {
        runInAction(() => (this.currentUser = { email: user.user.email, isSignIn: true }));
        return { type: actionTypes.success };
      })
      .catch((error) => ({ type: actionTypes.error, message: error.message }));
  };

  public loginUser = (props: UserCreds): Promise<{ type: string; message?: string }> => {
    return auth
      .signInWithEmailAndPassword(props.email, props.password)
      .then((user) => {
        runInAction(() => (this.currentUser = { email: user.user.email, isSignIn: true }));
        return { type: actionTypes.success };
      })
      .catch((error) => ({ type: actionTypes.error, message: error.message }));
  };

  public logOutUser = (): Promise<void> => {
    return auth.signOut().then(() => {
      runInAction(() => (this.currentUser = { email: '', isSignIn: false }));
    });
  };

  get isUserIn() {
    return this.currentUser.isSignIn;
  }
}
