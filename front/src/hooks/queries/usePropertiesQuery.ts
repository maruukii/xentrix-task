import { create, getAll, getById, uploadImage } from "@/api/properties";
import type { PropertyFormData } from "@/schemas/property.schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

  export const usePropertiesQuery = () => {
    return useQuery({
      queryKey: ["properties"],
      queryFn: () => getAll(),
      
    });
  };
  export const useGetPropertyQuery = (id: string) => {
    return useQuery({
      queryKey: ["properties",id],
      queryFn: () => getById(id),
    });
  };
  export const useCreatePropertyMutation = () => {
  const queryClient = useQueryClient(); 

  return useMutation({
    mutationFn: (property: PropertyFormData) => create(property),
    onSuccess: () => {
      queryClient.resetQueries({
        queryKey: ["properties"],
        exact: true,
      });
    },
  });
};

export const useUploadImageMutation = () => {
  return useMutation({
    mutationFn: (file: File) => uploadImage(file),
  });
};
