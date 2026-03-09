
interface ContainerProps {
  children: React.ReactNode;
}

export function Container({children}: ContainerProps) {
  return (
    <main className="container mx-auto p-10">
      {children}
    </main>
  );
}
