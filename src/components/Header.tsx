import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";

const AFFILIATE_LINK = "http://app.ac/XtwdyDM23";

const navItems = [
  { to: "/", label: "홈" },
  { to: "/card-discounts", label: "카드 할인" },
  { to: "/how-to-use", label: "사용방법" },
  { to: "/faq", label: "FAQ & 위키" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav className="container flex items-center justify-between h-16" aria-label="메인 내비게이션">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Plane className="w-6 h-6" />
          <span>트립닷컴 호텔 할인코드</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="hidden md:inline-flex btn-cta text-sm py-2 px-4"
        >
          할인코드 적용하기
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                pathname === item.to
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block text-center btn-cta text-sm py-3 mt-2"
          >
            할인코드 적용하기
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
