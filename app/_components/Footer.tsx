// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

interface ColumnData {
  title: string;
  links: NavLink[];
}

const footerColumns: ColumnData[] = [
  {
    title: "Landings",
    links: [
      { label: "Home", href: "#" },
      { label: "Products", href: "#" },
      { label: "Services", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "#" },
      { label: "Careers", href: "#", badge: "Hiring!" },
      { label: "Services", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Products", href: "#" },
      { label: "Services", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-[#777777] py-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-8">
              <Image
                src="/logo_full.svg"
                alt="Boldo Logo"
                width={156}
                height={41}
              />
            </div>
            <p className="mb-8">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className="">All rights reserved.</p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="text-xl">
              <h3 className="text-black font-bold mb-8">{col.title}</h3>
              <ul className="space-y-8">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {!link.badge ? (
                      <Link href={link.href}>{link.label}</Link>
                    ) : (
                      <div className="flex items-center">
                        <Link href={link.href}>{link.label}</Link>
                        <span className="ml-2 inline-block px-2 py-1 text-xs text-primary bg-tertiary rounded-full">
                          {link.badge}
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
