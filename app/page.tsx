import React from "react";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Nav from "@/components/(main)/Nav";
import Testimonials from "@/components/(main)/Testimonial";
import Description from "@/components/(main)/Description";
import Welcome from "@/components/(main)/Welcome";

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
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 fixed bg-red-50 dark:bg-slate-600 z-50">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Nav />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="w-full">
        <Welcome />
      </div>
      <div className="bg-red-50 dark:bg-slate-600 mt-5 rounded-2xl w-full backdrop-blur-lg bg-opacity-30 backdrop-filter">
        <Description />
      </div>
      <div className="bg-red-50 dark:bg-slate-600 mt-10 rounded-2xl w-full backdrop-blur-lg bg-opacity-30 backdrop-filter">
        <Testimonials />
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs mt-10">
        <p>Jeisson Araque 2024</p>
      </footer>
    </>
  );
}
