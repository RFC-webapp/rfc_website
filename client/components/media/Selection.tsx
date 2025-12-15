"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface TitleTagProps {
  text: string;
  icon?: React.ReactNode;
}

export default function Selection({ text, icon }: TitleTagProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Button
      icon={icon}
      variant="outline"
      size="sm"
      onClick={() => setIsActive(!isActive)}
      className={`font-medium rounded-xl px-6 py-3 ${
        isActive
          ? "border bg-[#E9E9FF] text-[#2A1870] border-[#2A1870]"
          : "text-[#667085] border-[#D0D5DD]"
      }`}
    >
      {text}
    </Button>
  );
}
