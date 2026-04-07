import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const AFFILIATE_LINK = "http://app.ac/XtwdyDM23";

const Footer = () => (
  <footer className="bg-trip-navy text-primary-foreground mt-16">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-4">
            <Plane className="w-5 h-5" />
            트립닷컴 할인코드
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            트립닷컴(Trip.com) 최신 할인코드·쿠폰·카드 제휴 프로모션을 매월 정기 업데이트합니다. 코드 하나로 최대 50% 이상 절약하세요.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">빠른 링크</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-primary-foreground transition-colors">홈 — 할인코드 총정리</Link></li>
            <li><Link to="/card-discounts" className="hover:text-primary-foreground transition-colors">카드사별 할인 상세</Link></li>
            <li><Link to="/how-to-use" className="hover:text-primary-foreground transition-colors">사용방법 가이드</Link></li>
            <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ & 트러블슈팅</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">지금 할인 받기</h3>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-cta text-sm"
          >
            트립닷컴 할인코드 적용하기 →
          </a>
          <p className="text-xs text-primary-foreground/50 mt-4">
            마지막 업데이트: 2026년 4월 7일<br />
            본 사이트는 트립닷컴 제휴 파트너로서 제휴 링크를 포함하고 있습니다.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/40">
        © 2026 트립닷컴 할인코드 | trip.dongbaektour.co.kr | 이 사이트는 Trip.com의 공식 사이트가 아니며, 독립적인 정보 제공 사이트입니다.
      </div>
    </div>
  </footer>
);

export default Footer;
