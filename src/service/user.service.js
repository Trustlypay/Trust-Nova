import { AxiosX } from "../utils/axios";

export const userService = {
  login: async (email, password) => {
    const response = await AxiosX.post(`/user/signin`, {
      email,
      password,
    });

    return response.data;
  },

  signIn: async (email, phoneNumber, userName, password) => {
    const response = await AxiosX.post(`/user/signup`, {
      email,
      phoneNumber,
      userName,
      password,
    });

    return response.data;
  },

  paymentLink: async (amount, description) => {
    const response = await AxiosX.post(`/payment/create-link`, {
      amount,
      description,
    });

    return response.data;
  },

  getCurrentUser: async () => {
    const response = await AxiosX.get(`/user/details`);

    return response.data;
  },
};
