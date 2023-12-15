import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const thisPageArr = pathname.split("/");
    const thisPage = thisPageArr[thisPageArr.length - 1];
    let found = listOfPages.find((item) => item.url === thisPage);

    setPageTitle(found ? found.title : "");
  }, [pathname]);

  let listOfPages = [
    { url: "data-tag", title: "SUBMIT DATATAG" },
    { url: "search", title: "DATATAG SEARCH" },
    { url: "log", title: "DATATAG LOG" },
    { url: "reallocations", title: "Reallocation Requests" },
  ];

  return (
    <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="nav-buttons" style={{ flex: 1.3 }}>
        <div className="cursor-pointer nav-button">
          <Link href="/data-tag">Submit</Link>
        </div>
        <div className="cursor-pointer nav-button">
          <Link href="/data-tag/search">Search</Link>
        </div>
        <div className="cursor-pointer nav-button">
          <Link href="/data-tag/reallocations">Reallocations</Link>
        </div>
        <div className="cursor-pointer nav-button">
          <Link href="/data-tag/log">Log</Link>
        </div>
      </div>
      <div className="text-4xl" style={{ flex: 2, textAlign: 'center' }}>{pageTitle}</div>
      <div style={{ flex: 1 }}> {/* Invisible Spacer */}
        <img
          className="header-logo"
          src="/images/JCB_Logo (1)(1).png"
          alt="Logo"
          style={{ visibility: 'hidden', maxWidth: '100%', maxHeight: '60px' }} // Make the logo invisible
        />
      </div>
      <img
        className="header-logo"
        src="/images/JCB_Logo (1)(1).png"
        alt="Logo"
        style={{ flexShrink: 0, maxHeight: '60px' }} // Actual logo
      />
    </header>
  );
};

export default Header;
