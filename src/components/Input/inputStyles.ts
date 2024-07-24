import { cva } from "class-variance-authority";

export const inputStyles = cva([
    "w-full",
    "border",
    "border-gray-200",
    "p-2",
    "rounded-lg",
    "transition-all",
    "duration-100",
    "outline-none",
    "focus:outline-primary-500 ",
    "focus:border-transparent",
    "placeholder:text-gray-400",
    "placeholder:text-sm",
  ]);