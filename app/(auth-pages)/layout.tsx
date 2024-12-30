export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center p-8">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
