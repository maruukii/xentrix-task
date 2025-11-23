import { axiosInstance } from "@/config/axiosInstance";
import type { PropertyFormData } from "@/schemas/property.schema";
import { mockDelay } from "@/utils";

export const getAll= async (): Promise<PropertyFormData[]> => {
   await mockDelay(4000)
    const { data } = await axiosInstance.get(`/properties/all`);
    return data.data.properties
  };
export const getById= async (id:string): Promise<PropertyResponse> => {
    const { data } = await axiosInstance.get(`/properties/${id}`);
    return data.data
  }
export const create= async (property:PropertyFormData): Promise<PropertyResponse> => {
    const { data } = await axiosInstance.post(`/properties/create`,property);
    return data.data
  }