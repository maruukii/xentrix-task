import { propertySchema } from "../schemas/property.schema.js";
import * as propertyService from "../services/property.service.js";

export async function create(req, res) {
  try {
    const result = propertySchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result);
    }
    console.log(result.data);

    const validatedData = result.data;
    const { savedProperty } = await propertyService.create(validatedData);
    res.status(201).json({
      success: true,
      data: {
        property: savedProperty,
      },
      message: "Property Created Successfully",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}

export async function getAll(req, res) {
  try {
    const properties = await propertyService.getAll();
    res.status(200).json({
      success: true,
      data: {
        properties,
      },
      message: "Properties fetched successfully",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}
export async function getPropertyById(req, res) {
  try {
    const propertyId = req.params.id;
    const property = await propertyService.getPropertyById(propertyId);
    res.status(200).json({
      success: true,
      data: {
        property,
      },
      message: "Property fetched successfully",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}
