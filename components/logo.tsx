import { Globe } from "lucide-react";
import { lusitana } from "./fonts";



export default function MaliLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-blue-500`}
    >
      <Globe className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Mali</p>
    </div>
  );
}