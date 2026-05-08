interface TitleTagProps {
  text: string;
  className?: string;
}

export default function TitleTag({ text, className }: TitleTagProps) {
  return (
    <h2
      className={`font-semibold text-[30px] py-2 text-[#28166F] ${className ?? ""}`}
    >
      {text}
    </h2>
  );
}
