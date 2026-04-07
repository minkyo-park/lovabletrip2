import { Helmet } from "react-helmet-async";
import CopyButton from "@/components/CopyButton";
import AffiliateBtn from "@/components/AffiliateBtn";
import heroImg from "@/assets/hero-banner.jpg";
import discountImg from "@/assets/discount-codes.png";
import japanImg from "@/assets/japan-travel.jpg";
import bangkokImg from "@/assets/bangkok-travel.jpg";
import macauImg from "@/assets/macau-travel.jpg";
import hotelImg from "@/assets/hotel-room.jpg";
import membershipImg from "@/assets/membership-tiers.png";
import koreaImg from "@/assets/korea-travel.jpg";
import chinaImg from "@/assets/china-travel.jpg";
import { Link } from "react-router-dom";
import { CheckCircle, RefreshCw, CreditCard, Gift, Plane, Hotel, Car, MapPin, Clock, Star, TrendingUp, AlertTriangle } from "lucide-react";

const AFFILIATE = "http://app.ac/XtwdyDM23";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>트립닷컴 할인코드</title>
        <meta name="description" content="트립닷컴(Trip.com) 할인코드 32개 이상 총정리. 호텔 12% 할인, 항공권 3% 할인, 카드사 제휴 최대 20% 할인. 2026년 4월 최신 업데이트." />
        <link rel="canonical" href="https://trip.dongbaektour.co.kr/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "트립닷컴 할인코드 2026년 4월",
          "description": "트립닷컴 할인코드·쿠폰·카드 제휴·프로모션 정보 총정리",
          "url": "https://trip.dongbaektour.co.kr/",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {"@type":"ListItem","position":1,"name":"인플루언서 할인코드 TRIPBH3F","description":"호텔 12% 할인, 횟수 제한 없음"},
              {"@type":"ListItem","position":2,"name":"항공권 기본 할인코드","description":"항공권 3% 할인"},
              {"@type":"ListItem","position":3,"name":"신규회원 웰컴 쿠폰팩","description":"최대 12,800원 상당 쿠폰팩"}
            ]
          }
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="hero-section relative" aria-label="히어로 섹션">
        <div className="absolute inset-0">
          <img src={heroImg} alt="트립닷컴 할인코드 여행 특가" width={1920} height={800} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative container py-16 md:py-24 text-primary-foreground text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            트립닷컴 할인코드<br />
            <span className="text-trip-gold">2026년 4월</span> 최신 업데이트 완료
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            트립닷컴(Trip.com) 할인코드·쿠폰·카드 제휴·프로모션 정보를 한 곳에서 확인하세요.<br />
            매월 정기 업데이트 + 실시간 이벤트 반영. 코드 하나로 최대 50% 이상 절약 가능.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="badge-trip bg-primary-foreground/20 text-primary-foreground"><CheckCircle className="w-4 h-4" /> 사용 가능 코드: 32개 이상</span>
            <span className="badge-trip bg-primary-foreground/20 text-primary-foreground"><RefreshCw className="w-4 h-4" /> 업데이트: 2026.04.07</span>
            <span className="badge-trip bg-primary-foreground/20 text-primary-foreground"><CreditCard className="w-4 h-4" /> 제휴 카드사 8종+</span>
            <span className="badge-trip bg-primary-foreground/20 text-primary-foreground"><Gift className="w-4 h-4" /> 신규회원 최대 12,800원</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <AffiliateBtn label="🔥 지금 바로 할인 적용하기" className="text-lg py-4 px-8 animate-pulse-glow" />
            <Link to="/how-to-use" className="btn-primary-trip bg-primary-foreground/20 text-primary-foreground text-lg py-4 px-8">
              사용방법 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 핵심 할인코드 */}
      <section className="container py-12" aria-label="이달의 핵심 할인코드">
        <div className="flex items-center gap-3 mb-2">
          <img src={discountImg} alt="할인코드" width={60} height={45} loading="lazy" />
          <h2 className="section-title">🔥 이달의 핵심 할인코드 (4월 기준)</h2>
        </div>
        <p className="section-subtitle">지금 바로 쓸 수 있는 트립닷컴 기본 할인코드 — 코드 복사 후 결제 시 입력하세요</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 인플루언서 코드 */}
          <article className="card-trip border-l-4 border-l-trip-orange">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <span className="badge-trip bg-trip-orange/10 text-trip-orange text-xs mb-2">🔥 인기 1위 · 상시</span>
                <h3 className="font-bold text-lg mb-1">인플루언서 할인코드</h3>
                <p className="text-2xl font-black text-primary">호텔 12% 할인</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• 횟수 제한 없음, KRW 결제</li>
                  <li>• 네이버페이 0.5% 추가 적립</li>
                  <li>• 전용 링크 접속 후 결제 필수</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <CopyButton code="TRIPBH3F" />
                <AffiliateBtn label="적용하기 →" className="text-sm py-2 px-4" />
              </div>
            </div>
          </article>

          {/* 항공권 */}
          <article className="card-trip border-l-4 border-l-primary">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <span className="badge-trip bg-primary/10 text-primary text-xs mb-2"><Plane className="w-3 h-3" /> 항공권</span>
                <h3 className="font-bold text-lg mb-1">항공권 기본 할인코드</h3>
                <p className="text-2xl font-black text-primary">항공권 3% 할인</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• KRW 결제, ~2026년 4월 30일</li>
                  <li>• 신규·기존 회원 모두 사용 가능</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <AffiliateBtn label="할인 적용 →" className="text-sm py-2 px-4" />
              </div>
            </div>
          </article>

          {/* 신규회원 호텔 */}
          <article className="card-trip border-l-4 border-l-trip-green">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <span className="badge-trip bg-trip-green/10 text-trip-green text-xs mb-2"><Gift className="w-3 h-3" /> 신규회원 전용</span>
                <h3 className="font-bold text-lg mb-1">신규회원 호텔 쿠폰</h3>
                <p className="text-2xl font-black text-trip-green">최대 10% 할인</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• 호텔 첫 예약, 가입 후 7일 이내</li>
                  <li>• 앱 다운 후 가입 시 적용</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <AffiliateBtn label="가입하기 →" className="text-sm py-2 px-4" />
              </div>
            </div>
          </article>

          {/* 웰컴 쿠폰팩 */}
          <article className="card-trip border-l-4 border-l-trip-gold">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <span className="badge-trip bg-trip-gold/10 text-trip-gold text-xs mb-2"><Star className="w-3 h-3" /> 신규회원 필수</span>
                <h3 className="font-bold text-lg mb-1">신규회원 웰컴 쿠폰팩</h3>
                <p className="text-2xl font-black text-trip-gold">최대 12,800원</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• 항공·호텔·액티비티·렌터카 전부</li>
                  <li>• 가입 후 7일 이내 사용</li>
                  <li>• 추천코드 입력 시 지급</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <AffiliateBtn label="쿠폰 받기 →" className="text-sm py-2 px-4" />
              </div>
            </div>
          </article>

          {/* 렌터카 */}
          <article className="card-trip border-l-4 border-l-primary">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <span className="badge-trip bg-primary/10 text-primary text-xs mb-2"><Car className="w-3 h-3" /> 렌터카</span>
                <h3 className="font-bold text-lg mb-1">신규회원 렌터카</h3>
                <p className="text-2xl font-black text-primary">최대 8% 할인</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• 렌터카 첫 예약, 상시</li>
                  <li>• 결제 전 코드 입력</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <AffiliateBtn label="예약하기 →" className="text-sm py-2 px-4" />
              </div>
            </div>
          </article>

          {/* 3연박 */}
          <article className="card-trip border-l-4 border-l-trip-orange">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <span className="badge-trip bg-trip-orange/10 text-trip-orange text-xs mb-2"><Hotel className="w-3 h-3" /> 장기 숙박</span>
                <h3 className="font-bold text-lg mb-1">3연박 이상 예약 쿠폰</h3>
                <p className="text-2xl font-black text-trip-orange">5% (최대 18,500원)</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• 호텔 3박 이상, 상시</li>
                  <li>• 45만원 이상 시 최대 3만원 별도 쿠폰</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <AffiliateBtn label="예약하기 →" className="text-sm py-2 px-4" />
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 p-4 bg-trip-orange/5 border border-trip-orange/20 rounded-lg">
          <p className="text-sm text-foreground"><AlertTriangle className="w-4 h-4 inline text-trip-orange mr-1" />
            <strong>중요:</strong> 인플루언서 할인코드(TRIPBH3F 등)는 반드시 <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="text-primary underline font-medium">전용 링크</a>를 통해 접속 후 결제해야 적용됩니다. 포털에서 직접 검색 후 접속하면 적용이 안 됩니다.
          </p>
        </div>
      </section>

      {/* 기간 한정 프로모션 */}
      <section className="bg-muted py-12" aria-label="기간 한정 프로모션">
        <div className="container">
          <h2 className="section-title">🗓️ 현재 진행 중인 기간 한정 프로모션</h2>
          <p className="section-subtitle">놓치면 아쉬운 한정 특가 — 기간 내 예약 필수!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="card-trip">
              <img src={japanImg} alt="일본 여행 특가" width={800} height={512} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-4" />
              <span className="badge-trip bg-trip-red/10 text-trip-red text-xs">~4월 12일</span>
              <h3 className="font-bold text-lg mt-2">트립찬스 (TripChance) 프로모션</h3>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li>• 일본 2박 3일 항공+호텔 <strong className="text-foreground">19.9만원</strong> 특가</li>
                <li>• 도쿄 편도 항공권 <strong className="text-foreground">1만원</strong> 특가</li>
                <li>• 호텔 1+1 / 테마파크 1+1 특가</li>
                <li>• 항공+호텔 3만원 할인코드 제공</li>
              </ul>
              <AffiliateBtn label="트립찬스 확인 →" className="mt-4 text-sm py-2 px-4" />
            </article>

            <article className="card-trip">
              <img src={japanImg} alt="일본 특가 프로모션" width={800} height={512} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-4" />
              <span className="badge-trip bg-primary/10 text-primary text-xs">~4월 26일</span>
              <h3 className="font-bold text-lg mt-2">일본 특가 프로모션</h3>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li>• 일본 항공권 최대 <strong className="text-foreground">3만원</strong> 할인</li>
                <li>• 호텔 <strong className="text-foreground">20%</strong> 할인 (최대 2만원 쿠폰)</li>
                <li>• 인기 투어&티켓 1+1 특가</li>
                <li>• 도쿄, 오사카, 삿포로 등 전 지역</li>
              </ul>
              <AffiliateBtn label="일본 특가 보기 →" className="mt-4 text-sm py-2 px-4" />
            </article>

            <article className="card-trip">
              <img src={macauImg} alt="마카오 위클리 특가" width={800} height={512} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-4" />
              <span className="badge-trip bg-trip-gold/10 text-trip-gold text-xs">매주 수요일</span>
              <h3 className="font-bold text-lg mt-2">마카오 위클리 특가</h3>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li>• 매주 수요일 오전 10시 선착순</li>
                <li>• 항공권 최대 <strong className="text-foreground">3만원</strong> 할인</li>
                <li>• 호텔 최대 <strong className="text-foreground">4만원</strong> 할인</li>
              </ul>
              <AffiliateBtn label="마카오 특가 →" className="mt-4 text-sm py-2 px-4" />
            </article>

            <article className="card-trip">
              <img src={bangkokImg} alt="태국 특가 프로모션" width={800} height={512} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-4" />
              <span className="badge-trip bg-trip-green/10 text-trip-green text-xs">연중 상시</span>
              <h3 className="font-bold text-lg mt-2">태국 특가 프로모션 (장기)</h3>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li>• 방콕, 푸켓, 치앙마이, 파타야</li>
                <li>• 항공권 특가 + 호텔 특가 상시 제공</li>
                <li>• ~2026년 12월 31일</li>
              </ul>
              <AffiliateBtn label="태국 특가 →" className="mt-4 text-sm py-2 px-4" />
            </article>
          </div>

          {/* 트립타임 */}
          <div className="card-trip mt-6 border-2 border-primary">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">트립타임 (TripTime) — 매일 진행</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">매일 오전 10시 / 오후 6시 선착순 호텔 할인 쿠폰 지급 (최대 4만원) | 카카오페이 전용</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="bg-muted p-3 rounded-lg text-center"><strong>데일리 특가</strong></div>
              <div className="bg-muted p-3 rounded-lg text-center"><strong>위클리 브랜드 특가</strong></div>
              <div className="bg-muted p-3 rounded-lg text-center"><strong>지역전 특가</strong></div>
              <div className="bg-muted p-3 rounded-lg text-center"><strong>먼슬리 상시 특가</strong></div>
            </div>
            <AffiliateBtn label="트립타임 쿠폰 받기 →" className="mt-4 text-sm" />
          </div>
        </div>
      </section>

      {/* 지역별 항공권 특가 */}
      <section className="container py-12" aria-label="지역별 항공권 특가">
        <h2 className="section-title">✈️ 지역별 항공권 특가 현황 (4월 기준)</h2>
        <p className="section-subtitle">인기 여행지별 현재 할인 가능한 수준을 한눈에 확인하세요</p>
        <div className="table-responsive">
          <table className="table-trip">
            <thead>
              <tr>
                <th>지역</th>
                <th>특가 수준</th>
                <th>주요 혜택</th>
                <th>기간</th>
                <th>바로가기</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["🇯🇵 일본", "최대 3만원 할인", "항공 3만원 + 호텔 20%", "~4월 26일"],
                ["🇹🇭 태국", "상시 특가", "연중 항공+호텔 특가", "~12월 31일"],
                ["🇨🇳 중국", "2인 이상 최대 3만원", "항공 3만원 + 호텔 15%", "상시"],
                ["🇲🇴 마카오", "매주 수요일 최대 7만원", "항공 3만원 + 호텔 4만원", "~4월 12일"],
                ["🇻🇳 베트남", "특가 상시", "국제선 특가", "상시"],
                ["🇺🇸 미주", "티웨이항공 특가", "장거리 특가", "상시"],
                ["🇪🇺 유럽·캐나다·호주", "티웨이항공 특가", "밴쿠버·시드니 등", "상시"],
                ["🇰🇷 국내선", "수요일 특가", "티웨이항공 수요일 세일", "매주 수요일"],
              ].map(([region, level, benefit, period], i) => (
                <tr key={i}>
                  <td className="font-medium whitespace-nowrap">{region}</td>
                  <td>{level}</td>
                  <td>{benefit}</td>
                  <td className="whitespace-nowrap">{period}</td>
                  <td><a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="text-primary underline text-sm whitespace-nowrap">특가 확인 →</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 회원 등급 */}
      <section className="bg-muted py-12" aria-label="회원 등급별 특가">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="section-title">👑 회원 등급별 특가 현황</h2>
              <p className="section-subtitle">로그인 상태에서 예약해야 회원 등급 할인이 적용됩니다</p>
              <div className="table-responsive">
                <table className="table-trip">
                  <thead>
                    <tr><th>등급</th><th>조건</th><th>호텔 할인</th><th>트립코인 추가</th><th>부가 혜택</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="font-medium">실버</td><td>가입 즉시</td><td>기본</td><td>기본</td><td>기본 서비스</td></tr>
                    <tr className="bg-trip-gold/5"><td className="font-bold text-trip-gold">⭐ 골드</td><td>예약 1건 이상</td><td className="font-bold">대폭 할인</td><td>20% 추가</td><td>회원 전용 특가</td></tr>
                    <tr><td className="font-medium">플래티넘</td><td>예약 4건 이상</td><td>추가 할인</td><td>50% 추가</td><td>VIP 라운지</td></tr>
                    <tr><td className="font-medium">다이아몬드</td><td>상위 건수</td><td>최대</td><td>최대</td><td>모든 혜택</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-trip-gold/10 border border-trip-gold/30 rounded-lg">
                <p className="text-sm font-medium">💡 <strong>꿀팁:</strong> 서울→수원 기차표(약 2,700원)를 예약하는 것만으로 골드 등급 달성! 비로그인 대비 <strong className="text-trip-orange">20~34% 저렴한</strong> 회원 특가를 평생 이용 가능합니다.</p>
              </div>
            </div>
            <img src={membershipImg} alt="트립닷컴 멤버십 등급" width={300} height={225} loading="lazy" className="rounded-lg hidden md:block" />
          </div>
        </div>
      </section>

      {/* 결제수단별 할인 요약 */}
      <section className="container py-12" aria-label="결제수단별 할인 요약">
        <h2 className="section-title">💳 제휴 결제 수단별 할인 요약</h2>
        <p className="section-subtitle">보유 카드와 결제 방법에 따른 최적 할인율을 비교하세요. <Link to="/card-discounts" className="text-primary underline">상세 보기 →</Link></p>
        <div className="table-responsive">
          <table className="table-trip">
            <thead>
              <tr><th>결제 수단</th><th>호텔</th><th>항공권</th><th>액티비티</th><th>통화</th><th>기간</th></tr>
            </thead>
            <tbody>
              {[
                ["신한 SOL TRAVEL", "7%", "4%", "3%", "USD", "~2026.03.31"],
                ["신한카드 (일반)", "8% (최대30만)", "4% (최대30만)", "3%", "KRW", "~2025.12.31"],
                ["KB 국민카드", "6%", "3%", "4%", "USD", "~2026.12.31"],
                ["우리카드", "6%", "3%", "4%", "USD/KRW", "~2026.06.30"],
                ["VISA 카드", "최대 6%", "최대 6%", "—", "USD", "상시"],
                ["마스터카드", "제공", "제공", "제공", "USD/KRW", "상시"],
                ["카카오뱅크 마스터", "20% (최대$100)", "10% (최대$80)", "—", "USD", "확인 요망"],
                ["네이버 웨일", "7%", "2.5%", "5%", "KRW", "~2026.06.30"],
                ["BC카드", "할인", "—", "투어 할인", "KRW", "선착순"],
                ["삼성카드", "할인", "—", "—", "KRW", "선착순"],
                ["카카오페이", "최대12%", "—", "—", "KRW", "매일 선착순"],
              ].map(([name, hotel, flight, act, curr, period], i) => (
                <tr key={i}>
                  <td className="font-medium whitespace-nowrap">{name}</td>
                  <td>{hotel}</td>
                  <td>{flight}</td>
                  <td>{act}</td>
                  <td className="whitespace-nowrap"><span className={curr === "USD" ? "text-primary font-medium" : curr === "KRW" ? "text-trip-green font-medium" : "text-muted-foreground"}>{curr}</span></td>
                  <td className="whitespace-nowrap">{period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
          <p><strong>⚠️ 결제 통화 핵심 주의:</strong> KB·VISA·마스터 → <strong className="text-primary">USD 필수</strong> | 네이버웨일·BC·신한(일반)·삼성 → <strong className="text-trip-green">KRW 필수</strong></p>
        </div>
        <div className="mt-4 text-center">
          <Link to="/card-discounts" className="btn-primary-trip">카드사별 할인 상세 보기 →</Link>
        </div>
      </section>

      {/* 실전 절약 예시 */}
      <section className="bg-muted py-12" aria-label="실전 절약 예시">
        <div className="container">
          <h2 className="section-title">💰 실전 절약 예시 계산</h2>
          <p className="section-subtitle">실제 예약 시 얼마나 절약할 수 있는지 수치로 확인하세요</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="card-trip">
              <img src={bangkokImg} alt="방콕 호텔 절약 예시" width={800} height={512} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-lg mb-3">방콕 쉐라톤 그랜드 3박 예약</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-muted rounded"><span>비로그인</span><span className="font-bold">1,103,946원</span></div>
                <div className="flex justify-between p-2 bg-trip-gold/10 rounded"><span>골드/플래티넘 로그인</span><span className="font-bold text-trip-green">864,369원 (-239,577원)</span></div>
                <div className="flex justify-between p-2 bg-trip-green/10 rounded"><span>플래티넘 + 6% 코드</span><span className="font-bold text-trip-green">812,507원 (-291,439원)</span></div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">※ 2,700원 기차표 하나로 골드 달성 → 3박에 24만원 절약</p>
            </article>

            <article className="card-trip">
              <img src={hotelImg} alt="호텔 예약 전략" width={800} height={512} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-lg mb-3">일본 여행 최저가 전략</h3>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>트립찬스 기간 중 도쿄 편도 1만원 특가</li>
                <li>KB국민카드 USD 결제 6% 할인코드</li>
                <li>카카오페이 트립타임 최대 4만원 추가</li>
                <li>예약 후 리뷰 → 트립코인 적립 → 다음 여행 할인</li>
              </ol>
              <AffiliateBtn label="지금 바로 예약하기 →" className="mt-4 text-sm" />
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-16 text-center" aria-label="할인 적용 CTA">
        <div className="container relative z-10">
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground mb-4">지금 바로 트립닷컴 할인코드를 적용하세요</h2>
          <p className="text-primary-foreground/80 mb-6">코드 하나로 최대 50% 이상 절약. 전용 링크 접속 후 결제 시 자동 적용!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <AffiliateBtn label="🔥 할인코드 적용하기" className="text-lg py-4 px-8 animate-pulse-glow" />
            <CopyButton code="TRIPBH3F" label="호텔 12% 코드 복사" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
