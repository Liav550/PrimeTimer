import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/axiosInstance";

export const useGetRequest = (url: string) => {
  return useQuery({
    initialData: null,
    queryKey: [url],
    queryFn: async () => (await axiosInstance.get(url)).data,
  });
};
