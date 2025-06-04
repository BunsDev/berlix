import React from "react";
import Header from "@/components/site/header";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";
import { Feature } from "./_components/feature";
import { CallToAction } from "./_components/call-to-action";

const page = () => {
  return (
    <main className="bg-zinc-50 dark:bg-zinc-950">
      <Header />
      <div className="w-full bg-zinc-50 dark:bg-zinc-950 px-4">
        <div className="flex flex-col min-h-screen relative mx-auto max-w-7xl">
          <Hero />
        </div>
      </div>

      <div className="w-full bg-zinc-50 dark:bg-zinc-950 px-4">
        <div className="flex flex-col min-h-screen relative mx-auto max-w-7xl">
          <Feature />
        </div>
      </div>

      <div className="w-full bg-zinc-50 dark:bg-zinc-950 px-4">
        <div className="relative py-32 mx-auto max-w-7xl">
          <CallToAction />
        </div>
      </div>

      <div className="w-full bg-zinc-50 dark:bg-zinc-950 px-4">
        <div className="relative mx-auto max-w-7xl">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default page;
