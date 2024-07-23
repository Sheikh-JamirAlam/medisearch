import sha256 from "crypto-js/sha256";

export const saltAndHashPassword = async (password: string) => {
  return sha256(password).toString();
};
