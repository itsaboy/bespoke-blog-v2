import { Hono } from "hono";
import {sendMessage} from "../controllers/sendMessageController.js"

export const sendMessageRoutes = new Hono();

sendMessageRoutes.post("/send", sendMessage);