type APICall = {
  url: RequestInfo;
  init: RequestInit;
  isFile?: boolean;
};

export const doAPICall = async ({
  url,
  init,
  isFile = false,
}: APICall): Promise<any> => {
  let result = null;
  try {
    const response = await fetch(url, init);
    let data: any = null;

    if (response.status === 200) {
      console.log("API success: ", response.status);
      if (isFile) result = await response.blob();
      else {
        data = await response.json();
        result = data.result;
      }
    } else {
      console.log("API response: ", {
        status: response.status,
        error: data?.error,
      });

      result = data?.error;
    }
  } catch (ex) {
    console.error(`Error occured while calling ${url}: `, ex);
  }

  return result;
};
