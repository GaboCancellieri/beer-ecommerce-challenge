import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const useConfig = () => {
  return publicRuntimeConfig;
};

export default useConfig;
