import { UserCreds } from './types';

export class UserStore {
  userList: Array<UserCreds> = [
    {
      name: 'Default user',
      age: 20,
      email: 'default@gmail.ru',
      password: 'default123',
    },
  ];

  public addUser = (props: UserCreds) => {
    this.userList.push({
      name: props.name,
      age: props.age || 0,
      email: props.email,
      password: props.password,
    });
  };
}
