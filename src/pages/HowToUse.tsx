import { Head } from "vite-react-ssg";
import CopyButton from "@/components/CopyButton";
import AffiliateBtn from "@/components/AffiliateBtn";
import guideImg from "@/assets/how-to-guide.png";
import mobileImg from "@/assets/mobile-app.png";
import savingsImg from "@/assets/savings-calc.png";
import airportImg from "@/assets/airport.jpg";
import hotelImg from "@/assets/hotel-room.jpg";
import koreaImg from "@/assets/korea-travel.jpg";
import { Link } from "react-router-dom";
import { Download, UserPlus, Star, CreditCard, CheckCircle, ArrowRight, Smartphone, Globe, AlertTriangle } from "lucide-react";

const AFFILIATE = "http://app.ac/XtwdyDM23";

const HowToUse = () => {
  return (
    <>
      <Head>
        <title>사용방법 완벽 가이드 - 트립닷컴 호텔 할인코드</title>
        <meta name="description" content="트립닷컴 호텔 할인코드 사용법 A to Z. 신규 가입, 골드 등급 달성, 할인코드 입력, 결제 수단 추천까지 초보자도 쉽게 따라하는 완벽 가이드." />
        <link rel="canonical" href="https://trip.dongbaektour.co.kr/how-to-use" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="사용방법 완벽 가이드 - 트립닷컴 호텔 할인코드" />
        <meta property="og:description" content="트립닷컴 호텔 할인코드 사용법 A to Z. 신규 가입, 골드 등급 달성, 할인코드 입력, 결제 수단 추천까지 초보자도 쉽게 따라하는 완벽 가이드." />
        <meta property="og:url" content="https://trip.dongbaektour.co.kr/how-to-use" />
        <meta property="og:image" content="https://trip.dongbaektour.co.kr/og-image.jpg" />
        <meta property="og:site_name" content="트립닷컴 호텔 할인코드" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="사용방법 완벽 가이드 - 트립닷컴 호텔 할인코드" />
        <meta name="twitter:description" content="트립닷컴 호텔 할인코드 사용법 A to Z. 신규 가입, 골드 등급 달성, 할인코드 입력, 결제 수단 추천까지 초보자도 쉽게 따라하는 완벽 가이드." />
        <meta name="twitter:image" content="https://trip.dongbaektour.co.kr/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "트립닷컴 호텔 할인코드 사용방법",
          "description": "트립닷컴에서 할인코드를 적용하여 최대 할인을 받는 완벽 가이드",
          "step": [
            {"@type":"HowToStep","position":1,"name":"앱 다운로드","text":"트립닷컴 공식 앱을 다운로드합니다"},
            {"@type":"HowToStep","position":2,"name":"회원가입","text":"앱에서 추천코드를 입력하여 가입합니다"},
            {"@type":"HowToStep","position":3,"name":"골드 등급 달성","text":"기차표 1건 구매로 골드 등급을 달성합니다"},
            {"@type":"HowToStep","position":4,"name":"카드 할인코드 선택","text":"보유 카드에 맞는 할인코드를 선택합니다"},
            {"@type":"HowToStep","position":5,"name":"결제","text":"할인코드를 입력하고 결제합니다"}
          ]
        })}</script>
      </Head>

      {/* Hero */}
      <section className="hero-section py-12 md:py-16 text-center">
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">📖 사용방법 완벽 가이드</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">트립닷컴을 처음 쓰는 분도 할인을 최대한 받을 수 있도록 A to Z 안내합니다</p>
        </div>
      </section>

      <div className="container py-12 space-y-16">
        {/* 트립닷컴이란 */}
        <section aria-label="트립닷컴 소개">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="section-title">트립닷컴(Trip.com)이란?</h2>
              <p className="text-muted-foreground mb-4">중국 최대 여행 플랫폼 씨트립(Ctrip)이 운영하는 <strong>글로벌 온라인 여행 예약 플랫폼</strong>입니다.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><Globe className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>전 세계 200개국 이상, 완벽한 한국어 서비스</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-trip-green mt-0.5 shrink-0" /><span>항공권, 호텔, 렌터카, 기차표, 액티비티, 공항픽업, 여행보험, 크루즈</span></li>
                <li className="flex gap-2"><Smartphone className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>연중무휴 24시간 다국어 고객센터 (한국어 포함)</span></li>
              </ul>

              <h3 className="font-bold text-lg mt-6 mb-3">트립닷컴의 핵심 특징 (다른 플랫폼과의 차이)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="card-trip p-4">
                  <div className="text-primary font-bold mb-1">1. 체인호텔 할인코드 적용</div>
                  <p className="text-xs text-muted-foreground">하얏트·메리어트·힐튼·어코르 등에도 할인코드 가능 — 아고다·부킹닷컴 대비 큰 장점</p>
                </div>
                <div className="card-trip p-4">
                  <div className="text-primary font-bold mb-1">2. 회원 등급 시스템</div>
                  <p className="text-xs text-muted-foreground">예약 1건으로 골드 달성, 비로그인 대비 20~34% 저렴</p>
                </div>
                <div className="card-trip p-4">
                  <div className="text-primary font-bold mb-1">3. 트립코인 적립</div>
                  <p className="text-xs text-muted-foreground">현금처럼 사용 가능한 포인트, 100 트립코인 = $1</p>
                </div>
                <div className="card-trip p-4">
                  <div className="text-primary font-bold mb-1">4. 앱 전용 추가 특가</div>
                  <p className="text-xs text-muted-foreground">모바일 앱 사용 시 더 저렴한 요금</p>
                </div>
              </div>
            </div>
            <img src={mobileImg} alt="트립닷컴 모바일 앱" width={250} height={333} loading="lazy" className="rounded-xl hidden md:block" />
          </div>
        </section>

        {/* 신규 회원 가입 5단계 */}
        <section aria-label="신규 회원 가입 가이드">
          <h2 className="section-title">🚀 신규 회원 가입 시 최대 할인 받는 5단계</h2>
          <p className="section-subtitle">이 순서대로 따라하면 처음부터 최대 할인을 받을 수 있습니다</p>

          <div className="space-y-4">
            {[
              {
                step: 1, icon: <Download className="w-6 h-6" />, title: "앱 다운로드",
                content: "트립닷컴 공식 앱 다운로드 (iOS App Store / Google Play). 앱 설치 후 가입 시에만 추천코드 입력 및 신규 웰컴 쿠폰팩 수령 가능합니다."
              },
              {
                step: 2, icon: <UserPlus className="w-6 h-6" />, title: "회원가입 (앱에서)",
                content: "앱 설치 후 회원가입 시 추천코드(신규회원 할인코드) 입력 → 호텔 예약 시 8% 할인 쿠폰 추가 지급. 가입 완료 즉시 웰컴 쿠폰팩 자동 발급 (7일 이내 사용)."
              },
              {
                step: 3, icon: <Star className="w-6 h-6" />, title: "골드 등급 즉시 업그레이드",
                content: "가입 직후 가장 저렴한 기차표(예: 서울↔수원, 약 2,700원) 구매. 탑승 완료 후 약 3시간~1일 이내 자동으로 골드 등급 승격. 골드 달성 후 비로그인 대비 대폭 할인!"
              },
              {
                step: 4, icon: <CreditCard className="w-6 h-6" />, title: "카드 할인코드 선택",
                content: "보유 카드에 맞는 카드사 전용 할인코드 확인. USD/KRW 결제 통화 조건을 반드시 확인하세요."
              },
              {
                step: 5, icon: <CheckCircle className="w-6 h-6" />, title: "할인코드 입력 및 결제",
                content: "할인코드를 복사하고 결제 화면에서 입력합니다. 아래 상세 방법을 참고하세요."
              },
            ].map((item) => (
              <article key={item.step} className="card-trip flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0 font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">{item.icon} {item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
                </div>
              </article>
            ))}
          </div>

          {/* 웰컴 쿠폰팩 */}
          <div className="card-trip mt-6 border-2 border-trip-gold">
            <h3 className="font-bold text-lg text-trip-gold mb-3">🎁 웰컴 쿠폰팩 구성 (신규 회원 전용)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <div className="bg-trip-gold/10 rounded-lg p-3 text-center text-sm"><strong>항공권</strong><br />최대 21,000원</div>
              <div className="bg-trip-gold/10 rounded-lg p-3 text-center text-sm"><strong>호텔</strong><br />최대 10%</div>
              <div className="bg-trip-gold/10 rounded-lg p-3 text-center text-sm"><strong>액티비티</strong><br />5% (최대 4,000원)</div>
              <div className="bg-trip-gold/10 rounded-lg p-3 text-center text-sm"><strong>렌터카</strong><br />최대 8%</div>
              <div className="bg-trip-gold/10 rounded-lg p-3 text-center text-sm"><strong>공항픽업</strong><br />10%</div>
            </div>
            <p className="text-xs text-trip-red mt-3">⚠️ 웰컴 쿠폰팩은 가입 후 7일 이내 사용하지 않으면 소멸됩니다.</p>
            <AffiliateBtn label="지금 가입하고 쿠폰 받기 →" className="mt-3 text-sm" />
          </div>
        </section>

        {/* 할인코드 입력 방법 */}
        <section aria-label="할인코드 입력 방법">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="section-title">📝 할인코드 입력 방법 (단계별)</h2>
              <ol className="space-y-3 mt-4">
                {[
                  "할인코드를 복사 (이 사이트에서 코드 복사 버튼 클릭)",
                  "트립닷컴 앱/웹에서 호텔·항공권 선택 후 \"예약\" 클릭",
                  "예약 정보 확인 페이지에서 \"예약 혜택\" 또는 \"프로모션 코드\" 섹션 확인",
                  "입력란에 복사한 할인코드 붙여넣기",
                  "\"사용\" 또는 \"적용\" 버튼 클릭",
                  "최종 결제 금액이 실제로 할인되었는지 반드시 확인 후 결제",
                  "결제수단 선택 → \"결제하기\" 클릭 → 완료",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-sm font-bold">{i + 1}</span>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 p-3 bg-trip-orange/10 border border-trip-orange/20 rounded-lg text-sm">
                <AlertTriangle className="w-4 h-4 inline text-trip-orange mr-1" />
                할인코드 적용 전·후 금액을 반드시 비교 확인하세요. 적용 버튼을 눌렀더라도 조건 불충족 시 할인이 안 될 수 있습니다.
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                <CopyButton code="TRIPBH3F" label="호텔 12% 코드 복사" />
                <AffiliateBtn label="트립닷컴에서 적용하기 →" className="text-sm py-2 px-4" />
              </div>
            </div>
            <img src={guideImg} alt="할인코드 입력 가이드" width={300} height={225} loading="lazy" className="rounded-xl hidden md:block" />
          </div>
        </section>

        {/* 트립코인 vs 할인코드 */}
        <section aria-label="트립코인 vs 할인코드">
          <h2 className="section-title">🔄 트립코인 vs 할인코드 — 뭐가 더 이득?</h2>
          <div className="table-responsive mt-4">
            <table className="table-trip">
              <thead><tr><th>구분</th><th>트립코인 사용</th><th>할인코드 사용</th></tr></thead>
              <tbody>
                <tr><td className="font-medium">중복 사용</td><td>❌ 불가 (둘 중 하나만)</td><td>❌ 불가</td></tr>
                <tr><td className="font-medium">할인 방식</td><td>적립 포인트 차감</td><td>예약 금액 즉시 차감</td></tr>
                <tr><td className="font-medium">장점</td><td>소액 코인 소진 가능</td><td>즉각적 현금 할인, 상한선 없는 코드 있음</td></tr>
                <tr><td className="font-medium">선택 기준</td><td>코인이 많을 때</td><td>할인액 {'>'} 코인 가치 시</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm font-medium">💡 <strong>판단 공식:</strong> (할인코드 할인 금액) vs (보유 트립코인 ÷ 100 × $1 환산액) → 더 큰 쪽을 선택</p>
          </div>
        </section>

        {/* 예약기간 vs 숙박기간 vs 출발기간 */}
        <section aria-label="기간 개념 이해">
          <h2 className="section-title">📅 예약 기간 vs 숙박 기간 vs 출발 기간 차이</h2>
          <p className="section-subtitle">이 3가지를 헷갈리면 할인 적용이 안 됩니다!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-trip border-t-4 border-t-primary">
              <h3 className="font-bold mb-2 text-primary">예약 기간</h3>
              <p className="text-sm text-muted-foreground">= 프로모션 기간. 이 기간 안에 <strong>예약을 완료</strong>해야 합니다.</p>
              <p className="text-xs text-muted-foreground mt-2">예시: 예약 기간 7/1~7/31 → 7월 안에 예약 완료 필수</p>
            </div>
            <div className="card-trip border-t-4 border-t-trip-green">
              <h3 className="font-bold mb-2 text-trip-green">숙박 기간 (호텔)</h3>
              <p className="text-sm text-muted-foreground">실제 <strong>체크인하여 투숙</strong>할 수 있는 날짜 범위</p>
              <p className="text-xs text-muted-foreground mt-2">예시: 숙박 기간 8/1~12/31 → 7월에 예약해도 8~12월 투숙 가능</p>
            </div>
            <div className="card-trip border-t-4 border-t-trip-orange">
              <h3 className="font-bold mb-2 text-trip-orange">출발 기간 (항공권)</h3>
              <p className="text-sm text-muted-foreground">항공편 <strong>실제 출발일</strong>이 속해야 하는 기간</p>
              <p className="text-xs text-muted-foreground mt-2">예시: 출발 기간 8/1~10/31 → 11월 출발은 적용 불가</p>
            </div>
          </div>
        </section>

        {/* 취소 시 환불 정책 */}
        <section aria-label="취소 시 환불 정책">
          <h2 className="section-title">🔄 취소 시 할인코드 환불 정책</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="card-trip">
              <h3 className="font-bold mb-2">호텔 할인코드</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 취소 시 코드 <strong className="text-trip-green">자동 반환</strong></li>
                <li>• 프로모션 기간 내 재사용 가능</li>
                <li>• 할인 금액 자체는 현금 환불 불가</li>
              </ul>
            </div>
            <div className="card-trip">
              <h3 className="font-bold mb-2">항공권 할인코드</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 항공권 변경·환불 규정에 따라 상이</li>
                <li>• 예약 전 해당 항공권 규정 확인 필수</li>
              </ul>
            </div>
            <div className="card-trip">
              <h3 className="font-bold mb-2">카드사 제휴 코드</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 취소 시 할인 금액 환불 불가</li>
                <li>• 취소된 코드는 계정으로 재발행</li>
                <li>• 예약 변경 시 코드 무효 → 재예약 필요</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 결제 수단별 최저가 결제 방법 */}
        <section aria-label="최저가 결제 방법">
          <h2 className="section-title">💰 결제 수단별 최저가 결제 방법</h2>
          <img src={savingsImg} alt="절약 계산" width={200} height={150} loading="lazy" className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-trip border-l-4 border-l-trip-green">
              <h3 className="font-bold text-trip-green mb-2">원화 결제 추천 조합</h3>
              <p className="text-sm"><strong>네이버 웨일 브라우저</strong> + 네이버페이 결제</p>
              <p className="text-sm text-muted-foreground">→ 호텔 7% + 네이버포인트 0.5% 적립</p>
            </div>
            <div className="card-trip border-l-4 border-l-primary">
              <h3 className="font-bold text-primary mb-2">달러 결제 추천 조합</h3>
              <p className="text-sm"><strong>KB국민카드</strong> (해외 수수료 없는 카드) + USD 결제</p>
              <p className="text-sm text-muted-foreground">→ 호텔 6% + 액티비티 4%</p>
              <p className="text-xs text-muted-foreground mt-1">트래블월렛·트래블로그 등 해외 수수료 무료 체크카드 추천</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
            <Smartphone className="w-4 h-4 inline text-primary mr-1" />
            <strong>앱 vs 웹:</strong> 앱 전용 특가 존재 — 가능하면 모바일 앱 이용 권장. 공항픽업 10% 쿠폰은 앱 전용입니다.
          </div>
        </section>

        {/* 트립코인 적립률 */}
        <section aria-label="트립코인 적립률">
          <h2 className="section-title">🪙 트립코인 적립률 (USD $100당)</h2>
          <div className="table-responsive mt-4">
            <table className="table-trip">
              <thead><tr><th>예약 카테고리</th><th>트립코인 (USD $100당)</th><th>환산 가치</th></tr></thead>
              <tbody>
                {[
                  ["호텔", "80", "$0.80"],
                  ["크루즈", "80", "$0.80"],
                  ["기프트 카드", "50", "$0.50"],
                  ["항공권", "25", "$0.25"],
                  ["항공+호텔 패키지", "25", "$0.25"],
                  ["기차표", "25", "$0.25"],
                  ["보험", "10", "$0.10"],
                ].map(([cat, coins, val], i) => (
                  <tr key={i}><td className="font-medium">{cat}</td><td>{coins} 트립코인</td><td className="text-muted-foreground">{val}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">※ 100 트립코인 = $1, 전 상품 결제에 현금처럼 사용 가능</p>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <AffiliateBtn label="🔥 지금 바로 할인코드 적용하기" className="text-lg py-4 px-8 animate-pulse-glow" />
          <div className="mt-4">
            <Link to="/faq" className="text-primary underline font-medium">할인코드 적용 안 될 때? → FAQ & 트러블슈팅 보기</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToUse;
