"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/tools", text: "Tools" },
    { href: "/projects", text: "Projects" },
    { href: "/contactos", text: "Contactos" },
];

export const Navbar = () => {
    const path = usePathname();
    return (
        <div className="container mx-auto">
            <nav className="navbar bg-yellow-100 text-gray-800 mb-5">
                <ul className="flex justify-center py-5  rounded-sm">
                    {links.map((l) => (
                        <li className="pr-[2.5rem]" key={l.href}>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Link
                                    className={`${l.href === path ? "text-yellow-600 font-bold" : ""
                                        } text-base`}
                                    href={l.href}
                                >
                                    {l.text}
                                    <AiFillHome
                                        style={{
                                            color: path === l.href && "#C9E265",
                                        }}
                                    />
                                </Link>


                            </motion.div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};