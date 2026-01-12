import { Chip } from "@heroui/chip";

interface CustomHeaderProps {
  badgeTitle: string;
  title: string;
  className?: string;
}

export default function CustomHeader({
  badgeTitle,
  title,
  className,
}: CustomHeaderProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <Chip className="text-xs md:text-sm bg-white text-black rounded-lg mb-2">
        {badgeTitle}
      </Chip>

      <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h1>
    </div>
  );
}
