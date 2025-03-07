export const statatusMessage = (pending: boolean, error: Error | null) => {
  if (pending) return "Loading...";

  if (error) return "Something went wrong";
};
