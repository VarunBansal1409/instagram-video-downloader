import { useMutation } from "@tanstack/react-query";
import { useGetInstagramPost } from "@/features/api/requests/instagram";
import type { GetInstagramPostRequest } from "@/features/api/requests/instagram";

export const useGetInstagramPostMutation = () => {
  const fetchInstagramPost = useGetInstagramPost();

  const mutation = useMutation({
    mutationKey: ["getInstagramPost"],
    mutationFn: (data: GetInstagramPostRequest) =>
      fetchInstagramPost(data),
    retry: false,
  });

  return mutation;
};
