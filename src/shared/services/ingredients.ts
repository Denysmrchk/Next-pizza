import { Ingredient } from "@prisma/client";
import { axiosInstance } from "@/shared/services/instance";
import { ApiRouter } from "@/shared/services/constants";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRouter.INGREDIENTS);
  return data;
};
