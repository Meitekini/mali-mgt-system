import clsx from "clsx";
import { Laptop } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Asset Approvals",
    path: "/dashboard/approvals",
  },
  {
    id: 3,
    name: "Asset Hub",
    path: "/dashboard/asset",
  },
];

const LowerHeader = () => {
    const pathname = usePathname();
  return (
    <div className="flex items-center justify-start pt-4">
      <div className="flex items-center gap-4">
        <div>
            <Laptop className=" h-24 w-24 text-gray-400 text-sm" />
        </div>
        <div>
          <h1 className="flex items-center text-2xl pl-2 text-gray-800">IT Asset Management</h1>
          <div className="flex items-center justify-start gap-4">
            {links.map((link) => (
              <div key={link.id}>
                <Link 
                href={link.path}
                className={clsx(
                    "flex h-[24px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm text-gray-500 font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                    {
                      "bg-blue-100 text-blue-600": pathname === link.path,
                    }
                  )}
                >{link.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerHeader;
