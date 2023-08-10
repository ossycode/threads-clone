// import React from "react";
// import { sidebarLinks } from "@/constants/index";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const SidebarLinks = () => {
//   const pathname = usePathname();

//   return (
//     <div>
//       {" "}
//       {sidebarLinks.map((link) => {
//         const isActive =
//           (pathname.includes(link.route) && link.route.length > 1) ||
//           pathname === link.route;
//         return (
//           <Link
//             href={link.route}
//             key={crypto.randomUUID()}
//             className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
//           >
//             <Image src={link.imgURL} alt={link.label} width={24} height={24} />
//             <p className="text-light-1 max-lg:hidden">{link.label}</p>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default SidebarLinks;
