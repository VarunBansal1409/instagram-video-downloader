import { useMutation } from "@tanstack/react-query";
import { useGetInstagramPost } from "@/features/api/requests/instagram";

export const useGetInstagramPostMutation = () => {
  const fetchInstagramPost = useGetInstagramPost();

  const mutation = useMutation({
    mutationKey: ["getInstagramPost"],
    mutationFn: (data) => fetchInstagramPost(data),
    retry: false,
  });

  return mutation;
};
