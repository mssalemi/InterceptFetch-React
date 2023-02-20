import { useState } from "react";

const { fetch: originalFetch } = window;

export function useInterceptor() {
  const [intercepted, setIntercepted] = useState(false);

  const useInterceptedFetch = () => {
    window.fetch = async (...args) => {
      let [resource, config] = args;

      let response = await originalFetch(resource, config);

      // response interceptor
      const json = () =>
        response
          .clone()
          .json()
          .then((data) => ({ ...data, title: `Intercepted: ${data.title}` }));

      response.json = json;
      return response;
    };
    setIntercepted(true);
  };

  const useDefaultFetch = () => {
    window.fetch = originalFetch;
    setIntercepted(false);
  };

  return {
    intercepted,
    useInterceptedFetch,
    useDefaultFetch,
  };
}
