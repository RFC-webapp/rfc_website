"use client";

import Image from "next/image";

interface BankAccountCardProps {
  bankLogo: string;
  bankName: string;
  accountNumber: string;
  copyIcon: string;
  onCopy: (value: string) => void;
}

export default function BankCard({
  bankLogo,
  bankName,
  accountNumber,
  copyIcon,
  onCopy,
}: BankAccountCardProps) {
  return (
    <div className="border bg-white p-4 rounded-md">
      {/* Bank Logo + Name */}
      <div className="flex gap-x-3 justify-start items-center">
        <Image
          src={bankLogo}
          alt={bankName}
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span className="text-sm text-gray-600">{bankName}</span>
      </div>

      {/* Account Number + Copy */}
      <div className="flex justify-between items-center mt-2">
        <div className="text-xl font-semibold">{accountNumber}</div>

        <Image
          src={copyIcon}
          alt="Copy"
          width={20}
          height={20}
          className="w-5 h-5 cursor-pointer hover:opacity-70"
          onClick={() => onCopy(accountNumber)}
        />
      </div>
    </div>
  );
}
