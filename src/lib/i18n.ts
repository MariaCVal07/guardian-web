import { en } from "../messages/en";
import { es } from "../messages/es";

export const messages = {
  en,
  es,
};

export type Locale = keyof typeof messages;
