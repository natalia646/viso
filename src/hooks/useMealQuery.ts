/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryFunction, useQuery } from "@tanstack/react-query";

export const useMealQuery = (
  queryKey: string[],
  queryFn?: QueryFunction<any, string[], never> | undefined
) => {
  const { data, error, isPending } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, error, isPending };
};
