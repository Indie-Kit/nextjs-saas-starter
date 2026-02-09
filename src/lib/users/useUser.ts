import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useUser() {
  const { data, error, isLoading, mutate } = useSWR("/api/app/me", fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
    mutate,
  };
}
