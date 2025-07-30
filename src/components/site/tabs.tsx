"use client";

import { ComponentRef, ComponentPropsWithoutRef, forwardRef, createContext, useId, useState, useRef, useEffect, useContext } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const Tabs = TabsPrimitive.Root;

const TabsContext = createContext<string>("");

const TabsRoot = forwardRef<
  ComponentRef<typeof TabsPrimitive.Root>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ ...props }, ref) => {
  const uniqueId = useId();
  return (
    <TabsContext.Provider value={uniqueId}>
      <Tabs ref={ref} {...props} />
    </TabsContext.Provider>
  );
});
TabsRoot.displayName = TabsPrimitive.Root.displayName;

const TabsList = forwardRef<
  ComponentRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 w-full items-center justify-start border-b border-zinc-200 bg-transparent  dark:border-zinc-700",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<
  ComponentRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    classNameIndicator?: string;
  }
>(({ className, children, classNameIndicator, ...props }, ref) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);
  const tabsId = useContext(TabsContext);

  useEffect(() => {
    const element = triggerRef.current;
    if (element) {
      setIsActive(element.dataset.state === "active");

      const observer = new MutationObserver(() => {
        setIsActive(element.dataset.state === "active");
      });

      observer.observe(element, { attributes: true });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <TabsPrimitive.Trigger
      ref={triggerRef}
      className={cn(
        "relative inline-flex h-10 items-center justify-center rounded-none bg-transparent px-4 py-1 pt-2 pb-3 text-sm font-medium whitespace-nowrap text-zinc-500 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-zinc-900 dark:text-zinc-400 dark:data-[state=active]:text-zinc-50",
        className
      )}
      {...props}
    >
      {isActive && (
        <motion.div
          className="absolute bottom-0 flex h-0.5 w-full justify-center"
          transition={{
            type: "spring",
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
          layoutId={`underline-${tabsId}`}
        >
          <div
            className={cn(
              "h-0.5 w-4/5 bg-zinc-950 dark:bg-zinc-50",
              classNameIndicator
            )}
          />
        </motion.div>
      )}
      {children}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<
  ComponentRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "focus-visible:ring-ring relative mt-2 rounded-lg ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden border border-zinc-200 dark:border-zinc-700",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent };
