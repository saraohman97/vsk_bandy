import Link from "next/link";

type HistoryLinksType = {
  name: string;
  href: string;
};

type LinksType = {
  name: string;
  href: string;
  historyLinks?: HistoryLinksType[] | undefined;
};

interface DropdownMenuProps {
  links: LinksType[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ links }) => {
  return (
    <div>
      <div className={`fixed inset-0 z-30 bg-transparent`} />

      <div className="absolute top-12 left-4 z-40 min-w-40 bg-white border rounded text-black flex flex-col items-start shadow">
        {links?.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:bg-green-700/20 px-4 py-3 w-full text-start transition-all relative group"
          >
            {link.name}
            {link.historyLinks && (
              <div className="invisible group-hover:visible absolute top-0 -right-[100%] z-50 min-w-40 bg-white border rounded text-black flex flex-col items-start shadow">
                {link.historyLinks.map((historyLink) => (
                  <div
                    className="hover:bg-green-700/20 px-4 py-3 w-full text-start transition-all"
                    key={historyLink.name}
                  >
                    {historyLink.name}
                  </div>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
