import { hash, compare } from "bcrypt";
export const encryptString = async (password: string): Promise<string> => {
  const salt = Number(process.env.SALT) || 10;
  const hashString: string = await hash(password, salt);
  return hashString;
};

export const compareString = async (
  planString: string,
  hashString: string
): Promise<boolean> => {
    return await compare(planString, hashString);
};
