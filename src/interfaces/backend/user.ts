export interface UserLogin {
  email: string;
  password: string;
}

export interface UserDelete {
  _id: string;
  id: string;
  name?: string;
  email?: string;
}
