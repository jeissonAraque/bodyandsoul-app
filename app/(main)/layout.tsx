import { GeistSans } from "geist/font/sans";
import "../globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Body and soul",
  description: "Spa Body and soul",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground">
      <main className="min-h-screen flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
