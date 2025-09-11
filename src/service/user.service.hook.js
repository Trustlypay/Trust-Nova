import { useMutation, useQuery } from "@tanstack/react-query";
import { userService } from "./user.service";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (variables) =>
      await userService.login(variables.email, variables.password),
    onSuccess: (data, variables) => {
      variables.onSuccess(data);
    },
    onError: (data, variables) => {
      variables.onError(data);
    },
  });
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: async (variables) =>
      await userService.signIn(
        variables.email,
        variables.password,
        variables.phoneNumber,
        variables.userName
      ),
    onSuccess: (data, variables) => {
      variables.onSuccess(data);
    },
    onError: (data, variables) => {
      variables.onError(data);
    },
  });
};

export const usePaymentLink = () => {
  return useMutation({
    mutationFn: async (variables) =>
      await userService.paymentLink(variables.amount, variables.description),
    onSuccess: (data, variables) => {
      variables.onSuccess(data);
    },
    onError: (data, variables) => {
      variables.onError(data);
    },
  });
};

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["userService.getCurrentUser", localStorage.getItem("token")],
    queryFn: async () => {
      return userService.getCurrentUser();
    },
  });
};
