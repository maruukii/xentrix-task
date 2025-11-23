import Property from "../models/property.model.js";

export async function create(userData) {
  try {
    const {
      image,
      propertyName,
      address,
      city,
      country,
      postCode,
      reference,
      value,
      type,
      access,
      dimension,
      bedrooms,
      bathrooms,
      floors,
      features,
      status,
    } = userData;
    const CreatedProperty = new Property({
      image,
      propertyName,
      address,
      city,
      country,
      postCode,
      reference,
      value,
      type,
      access,
      dimension,
      bedrooms,
      bathrooms,
      floors,
      features,
      status,
    });
    const savedProperty = await CreatedProperty.save();
    await savedProperty.save();
    return { savedProperty };
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAll() {
  try {
    const properties = await Property.find();
    return properties;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getPropertyById(propertyId) {
  try {
    const property = await Property.findById(propertyId);
    return property;
  } catch (error) {
    throw new Error(error);
  }
}
