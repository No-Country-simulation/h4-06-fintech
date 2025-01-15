export type SignUpResponse = {
  user: {
    email: string;
  };
};

export type SingUpParams = {
  email: string;
  password: string;
  confirmPassword: string;
};
