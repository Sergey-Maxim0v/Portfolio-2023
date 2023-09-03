import { ButtonHTMLAttributes } from "react";

export interface IGlowingButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  textRu: string;
  textEn: string;
}
