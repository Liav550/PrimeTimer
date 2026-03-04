import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../api/axiosInstance";

export const useDeleteRequest = (url: string) => {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.delete(url);

      return response.data;
    },
  });
};
