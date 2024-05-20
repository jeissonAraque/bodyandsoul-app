import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Nav from "@/components/(main)/Nav";
import Landing from "@/components/(main)/Landing";
import Header from "@/components/Header";

export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 fixed bg-red-50 dark:bg-slate-600">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Nav />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="flex-1 w-full flex flex-col gap-20 items-center mt-20 p-3">
        <div className="bg-red-50 dark:bg-slate-600">
          <Header />
          {/* <Landing /> */}
        </div>

        <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
          <p>Jeisson Araque 2024</p>
        </footer>
      </div>
    </>
  );
}
