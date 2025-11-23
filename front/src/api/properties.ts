import { axiosImage, axiosInstance } from "@/config/axiosInstance";
import type { PropertyFormData } from "@/schemas/property.schema";
import { mockDelay } from "@/utils";

export const getAll= async (): Promise<PropertyFormData[]> => {
   await mockDelay(4000)
    const { data } = await axiosInstance.get(`/properties/all`);
    return data.data.properties
  };
export const getById= async (id:string): Promise<PropertyResponse> => {
     await mockDelay(4000)

    const { data } = await axiosInstance.get(`/properties/${id}`);
    return data
  }
export const create= async (property:PropertyFormData): Promise<PropertyResponse> => {
    const { data } = await axiosInstance.post(`/properties/new`,property);
    return data
  }

export const uploadImage = async (file: File): Promise<PropertyResponse> => {
  const formData = new FormData();
  formData.append("image", file);

  const { data } = await axiosImage.post(`/upload-image`, formData);
  return data;
};
