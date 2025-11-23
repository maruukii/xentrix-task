export const bookings:BookingMetadata[] = [
  {
    service: "Marketing",
    total: 150,
    status: "Completed",
  },
  {
    service: "Compliance",
    total: 80,
    status: "Pending",
  },
  {
    service: "Support",
    total: 120,
    status: "In progress",
  },
];

export const propertyTypes = [
  { name: "House", value: "house" },
  { name: "Apartment", value: "apartment" },
  { name: "Condo", value: "condo" },
  { name: "Commercial", value: "commercial" },
  { name: "Land", value: "land" },
]

export const accessTypes = [
  { name: "Private", value: "private" },
  { name: "Shared", value: "shared" },
  { name: "Public Road", value: "public road" },
]