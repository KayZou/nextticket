"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ToggleMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <Button variant={"ghost"} size={"icon"} disabled></Button>;

  const dark = theme === "dark";

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      onClick={() => {
        setTheme(`${dark ? "light" : "dark"}`);
      }}
    >
      {mounted && (dark ? <Sun size={18} /> : <Moon size={18} />)}
    </Button>
  );
}
