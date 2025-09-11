import { AxiosX } from "../utils/axios";

export const userService = {
  login: async (email, password) => {
    const response = await AxiosX.post(`/gateway/onestop/user/signin`, {
      email,
      password,
    });

    return response.data;
  },

  signIn: async (email, password, phoneNumber, userName) => {
    const response = await AxiosX.post(`/gateway/onestop/user/signup`, {
      email,
      phoneNumber,
      userName,
      password,
    });

    return response.data;
  },

  paymentLink: async (amount, description) => {
    const response = await AxiosX.post(`/gateway/onestop/payment/create-link`, {
      amount,
      description,
    });

    return response.data;
  },

  getCurrentUser: async () => {
    const response = await AxiosX.get(`/gateway/onestop/user/details`);

    return response.data;
  },
};
