import Link from "next/link";

interface NavLinkProps {
    children: React.ReactNode;
    href: string;
}

export function NavLink({ children, href }: NavLinkProps) {
  return (
    <li>
      <Link href={href} className="font-bold hover:text-yellow transition">
        {children}
      </Link>
    </li>
  );
}
