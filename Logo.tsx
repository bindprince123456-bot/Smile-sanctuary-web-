import logo from "@/assets/logo.png";
import { BRAND } from "./constants";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <img
      src={logo}
      alt={`${BRAND} logo`}
      width={size}
      height={size}
      className="h-10 w-10 object-contain drop-shadow-sm"
    />
  );
}