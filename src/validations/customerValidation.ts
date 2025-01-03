import { z } from "zod";

export const customerValidation = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string"
    })
    .min(3, "Name must be at least 3 characters"),
  mobile: z
    .string({
      required_error: "Mobile is required",
      invalid_type_error: "Mobile must be a string"
    })
    .min(11, "Mobile must be exactly 11 characters")
    .max(11, "Mobile must be exactly 11 characters")
    .regex(/^\d+$/, "Mobile must be a valid number"),
  address: z
    .string({
      required_error: "Address is required",
      invalid_type_error: "Address must be a string"
    })
    .min(10, "Address must be at least 10 characters"),
  gender: z.enum(["Male", "Female", "Other"], {
    message: "Gender must be one of 'Male', 'Female', or 'Other'"
  }),
  email: z
    .string({
      invalid_type_error: "Email must be a string"
    })
    .email("Invalid email format")
    .optional(),
  nid: z
    .string()
    .optional()
    .refine(val => !val || /^\d+(\.\d+)?$/.test(val), {
      message: "NID must be a valid number"
    }).transform(val => (val ? parseFloat(val) : 0)),
  dob: z
    .string({
      invalid_type_error: "DOB must be a string"
    })
    .optional(),
  due: z
    .string()
    .optional()
    .refine(val => !val || /^\d+(\.\d+)?$/.test(val), {
      message: "Due must be a valid number"
    })
    .transform(val => (val ? parseFloat(val) : 0)),
  balance: z
    .string()
    .optional()
    .refine(val => !val || /^\d+(\.\d+)?$/.test(val), {
      message: "Balance must be a valid number"
    })
    .transform(val => (val ? parseFloat(val) : 0))
});
