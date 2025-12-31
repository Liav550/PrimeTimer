import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../api/axiosInstance";

export const usePostRequest = (url: string) => {
  return useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: async (data: any) => {
      const response = await axiosInstance.post(url, data);

      return response.data;
    },
  });
};
