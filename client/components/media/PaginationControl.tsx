"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationControl({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlProps) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <section className="flex items-center justify-center gap-6 pb-12">
      {/* Previous */}
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="rounded-full shadow-md"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Page indicator */}
      <span className="text-sm font-medium text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="rounded-full shadow-md"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </section>
  );
}
