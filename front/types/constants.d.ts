
declare interface BookingMetadata{
service: string;
total: number;
status: "In progress" | "Pending" | "Completed";
}

// declare interface PropertyFormData {
//   _id:string;
//   image?:string;
//   propertyName: string;
//   address: string;
//   city: string;
//   country: string;
//   postCode: string;
//   reference: string;
//   value: number;
//   type: string;
//   access: string;
//   dimension: number;
//   bedrooms: number;
//   bathrooms: number;
//   floors: number;
//   features?: {garage: boolean; garden: boolean; parking: boolean};
//   status?: "Sale" | "Let";
// }
declare interface PropertyResponse {
  success: boolean;
  data:PropertyFormData
  message?: string;
}

declare interface Features {
  garden: boolean
  garage: boolean
  parking: boolean
}