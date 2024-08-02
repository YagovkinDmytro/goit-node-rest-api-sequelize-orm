import { Router } from "express";
import contactsControllers from "../controllers/contactsControllers.js";
import validateBody from "../decorators/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

const createMiddleware = validateBody(createContactSchema);
const updateMiddleware = validateBody(updateContactSchema);

const contactsRouter = Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", contactsControllers.getOneContact);

contactsRouter.post("/", createMiddleware, contactsControllers.createContact);

contactsRouter.put("/:id", updateMiddleware, contactsControllers.updateContact);

contactsRouter.delete("/:id", contactsControllers.deleteContact);

export default contactsRouter;
