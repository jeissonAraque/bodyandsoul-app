import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "../../components/(main)/Navbar";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    < Navbar />
  );
}
