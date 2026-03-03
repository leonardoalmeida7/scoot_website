interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export function ButtonDefault({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-yellow hover:opacity-75 transition text-snow px-4 py-2 font-bold ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
