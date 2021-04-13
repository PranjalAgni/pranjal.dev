type APICall = {
  url: RequestInfo;
  init: RequestInit;
};

export const doAPICall = async ({ url, init }: APICall): Promise<any> => {
  let result = null;
  try {
    const response = await fetch(url, init);
    const data = await response.json();
    if (response.status === 200) {
      console.log("API success: ", data);
      result = data.result;
    } else {
      console.log("API response: ", {
        status: response.status,
        error: data.error,
      });

      result = data.error;
    }
  } catch (ex) {
    console.error(`Error occured while calling ${url}: `, ex);
  }

  return result;
};
