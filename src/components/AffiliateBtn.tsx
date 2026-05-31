const AFFILIATE_LINK = "http://app.ac/XtwdyDM23";

interface AffiliateBtnProps {
  label?: string;
  className?: string;
  variant?: "cta" | "primary";
  href?: string;
}

const AffiliateBtn = ({ label = "할인코드 적용하기", className = "", variant = "cta", href }: AffiliateBtnProps) => (
  <a
    href={href ?? AFFILIATE_LINK}
    target="_blank"
    rel="noopener noreferrer nofollow"
    className={`${variant === "cta" ? "btn-cta" : "btn-primary-trip"} ${className}`}
  >
    {label}
  </a>
);

export default AffiliateBtn;
