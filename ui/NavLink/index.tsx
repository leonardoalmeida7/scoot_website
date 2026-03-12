import Link from "next/link";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export function NavLink({ children, href, onClick }: NavLinkProps) {
  return (
    <li>
      <Link href={href} className="font-bold hover:text-yellow transition" onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}
