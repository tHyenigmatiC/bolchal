import Link from "next/link"
import Image from 'next/image'
import { usePathname } from "next/navigation"

import { LinkConfig } from "./config"
import styles from './sidebar.module.sass'

export const SidebarLink = ({ link } : { link: LinkConfig}) => {
    const pathname = usePathname();
    return (
        <Link
            href={link.href}
            className={`${ pathname  == link.href ? styles.selected : ''} ${styles.link}`}
            key={link.href}
        >
            {link.icon ? (
                <Image
                    src={link.icon}
                    alt="Picture of link"
                    height={24}
                    width={24}
                />
            ) : null}
            <p>{link.text}</p>
        </Link>
    )
}