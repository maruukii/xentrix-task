import { create, getAll, getById } from "@/api/properties";
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
      queryClient.invalidateQueries({ queryKey: ["properties"] }); 
    },
  });
};