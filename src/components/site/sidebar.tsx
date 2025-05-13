import { ScrollArea } from "@/components/site/scroll-area";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-[300px] h-[calc(100dvh-65px)] sticky top-[65px]">
      <ScrollArea className="h-full w-full">
        <div className="p-4">navigation</div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
