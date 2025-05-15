"use client";
import Button from "@/components/core/button";

export const ButtonBasic = () => {
  return <Button onClick={() => console.log("click")} label="Click me" />;
};
