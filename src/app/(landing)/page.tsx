import React from "react";
import Header from "@/components/site/header";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="w-full bg-zinc-50 dark:bg-zinc-950">
        <div className="flex flex-col min-h-screen relative mx-auto max-w-7xl">
          <Hero />
        </div>
      </div>

      <div className="w-full bg-zinc-50 dark:bg-zinc-950">
        <div className="relative mx-auto max-w-7xl">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
