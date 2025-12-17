"use client";

import { useState } from "react";
import PaginationControl from "./PaginationControl";

export default function PaginatedContent() {
  const [page, setPage] = useState(1);

  return (
    <PaginationControl
      currentPage={page}
      totalPages={10}
      onPageChange={setPage}
    />
  );
}
