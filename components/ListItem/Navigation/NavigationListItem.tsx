import Link from "next/link";

export default function NavigationListItem({label, url}: {label: string; url: string}) {
    return (
        <Link className={"flex gap-4"} href={url}>

            <svg width="23" height="10" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0V9H23" stroke="#F5F5F5" strokeWidth="1.5"/>
            </svg>
            <p>{label}</p>

        </Link>
    )
}