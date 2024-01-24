import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

interface BreadcrumbsProps {
    children: React.ReactNode;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-2 text-green-700 text-xs font-semibold">
      <Link href="/" className="hover:underline">
        VSK
      </Link>
      <GoChevronRight size={20} />
      <div>{children}</div>
    </div>
  );
};

export default Breadcrumbs;
