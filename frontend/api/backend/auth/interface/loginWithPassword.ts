export type LoginWithPasswordParams = {
  email: string;
  password: string;
};

export type LoginWithPasswordResponse = {
  user: {
    email: string;
  };
};
