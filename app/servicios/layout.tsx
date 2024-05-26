import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MantineProvider>{children}</MantineProvider>
    </div>
  );
}
