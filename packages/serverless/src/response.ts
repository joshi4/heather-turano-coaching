const formatError = (message: string): { message: string } => ({
  message
});

export const error = (errorMessage: string): Response =>
  new Response(JSON.stringify(formatError(errorMessage)), {
    status: 500,
    statusText: "SERVER ERROR"
  });

export const success = (json: any): Response =>
  new Response(JSON.stringify(json), {
    statusText: "OK"
  });
