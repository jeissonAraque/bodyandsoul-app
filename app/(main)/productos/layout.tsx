


export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="w-full min-h-screen flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
