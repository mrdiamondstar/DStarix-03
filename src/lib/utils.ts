import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Clamp a number between min and max. */
export function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

/** Map a value from one range to another. */
export function mapRange(v: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return outMin + ((v - inMin) * (outMax - outMin)) / (inMax - inMin);
}
