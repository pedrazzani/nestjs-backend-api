export interface User {
  uuid: string;
  username: string;
  email: string;
  password: string;
}

export interface UserData {
  uuid: string;
  username: string;
  email: string;
}

export interface UserJwt {
  uuid: string;
  email: string;
}
