import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    AngryIcon,
    HandHelpingIcon,
    HomeIcon,
    ListChecksIcon,
    StoreIcon,
    TrashIcon,
  } from "lucide-react";
import clsx from "clsx";


const menu = [
    {
      id: 1,
      name: "Dashboard",
      icon: HomeIcon,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Employees",
      icon: StoreIcon,
      path: "/dashboard/employees",
    },
    {
      id: 3,
      name: "Asset Inventory",
      icon: StoreIcon,
      path: "/dashboard/asset",
    },
    {
      id: 4,
      name: "Request/Returns",
      icon: HandHelpingIcon,
      path: "/dashboard/requests",
    },
    {
      id: 5,
      name: "Asset Approvals",
      icon: ListChecksIcon,
      path: "/dashboard/approvals",
    },
    {
      id: 6,
      name: "Aset Complains",
      icon: AngryIcon,
      path: "/dashboard/complains",
    },
    {
      id: 7,
      name: "Asset Disposals",
      icon: TrashIcon,
      path: "/dashboard/disposals",
    },
    {
      id: 8,
      name: "Asset Evaluations",
      icon: TrashIcon,
      path: "/dashboard/eveluations",
    },
  ];
export default function NavLinks() {
    const pathname = usePathname();
    return(
        <>
        {menu.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-gray-500 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === link.path,
                }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    )
}