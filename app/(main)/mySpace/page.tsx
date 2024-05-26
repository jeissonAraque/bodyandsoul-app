import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import PersonalSpace from "./personalSpace/PersonalSpace";

export default async function MySpacePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    < PersonalSpace />
  );
}
