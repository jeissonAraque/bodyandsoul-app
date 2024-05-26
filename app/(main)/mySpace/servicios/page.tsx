import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Servicios from "./components/Servicios";

export default async function ServiciosPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    < Servicios />
  );
}
