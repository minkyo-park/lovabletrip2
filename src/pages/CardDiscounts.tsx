import { Helmet } from "react-helmet-async";
import CopyButton from "@/components/CopyButton";
import AffiliateBtn from "@/components/AffiliateBtn";
import cardImg from "@/assets/card-discounts.png";
import comparisonImg from "@/assets/comparison.png";
import hotelImg from "@/assets/hotel-room.jpg";
import airportImg from "@/assets/airport.jpg";
import savingsImg from "@/assets/savings-calc.png";
import mobileImg from "@/assets/mobile-app.png";
import { CreditCard, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const AFFILIATE = "http://app.ac/XtwdyDM23";

const CardDiscounts = () => {
  return (
    <>
      <Helmet>
        <title>카드사별 할인 상세 - 트립닷컴 할인코드</title>
        <meta name="description" content="트립닷컴 카드사별 제휴 할인 총정리. 신한카드 8%, KB국민 6%, 카카오뱅크 20% 등 카드별 조건·기간·사용법 완벽 가이드." />
        <link rel="canonical" href="https://trip.dongbaektour.co.kr/card-discounts" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "트립닷컴 카드사별 할인 상세 가이드 2026",
          "description": "카드사별 트립닷컴 제휴 할인의 조건·기간·금액·사용법 완벽 정리",
          "url": "https://trip.dongbaektour.co.kr/card-discounts",
          "dateModified": "2026-04-07",
          "author": {"@type":"Organization","name":"트립닷컴 할인코드"}
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="hero-section py-12 md:py-16 text-center">
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">💳 카드사별 할인 상세 가이드</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">카드사별 트립닷컴 제휴 할인의 조건·기간·금액·사용법을 카드사 단위로 상세 정리했습니다</p>
        </div>
      </section>

      <div className="container py-12 space-y-12">
        {/* 신한카드 */}
        <section aria-label="신한카드 할인">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">신한카드 × 트립닷컴</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="card-trip">
              <h3 className="font-bold text-lg mb-2 text-primary">신한 SOL TRAVEL 카드</h3>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-primary/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-primary">7%</div><div className="text-xs text-muted-foreground">호텔</div></div>
                <div className="bg-primary/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-primary">4%</div><div className="text-xs text-muted-foreground">항공권</div></div>
                <div className="bg-primary/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-primary">3%</div><div className="text-xs text-muted-foreground">액티비티</div></div>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 예약 기간: ~2026년 3월 31일 (기간 만료 확인 요망)</li>
                <li>• 결제 통화: <strong className="text-primary">USD(달러)</strong> 결제 시만 적용</li>
                <li>• 신한카드 전용 URL로 접속 후 결제</li>
              </ul>
              <div className="flex gap-2 mt-3 flex-wrap">
                <AffiliateBtn label="할인 적용 →" className="text-sm py-2 px-4" />
              </div>
            </article>

            <article className="card-trip">
              <h3 className="font-bold text-lg mb-2 text-primary">신한카드 (일반 제휴)</h3>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-trip-green/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-trip-green">8%</div><div className="text-xs text-muted-foreground">호텔 (최대30만)</div></div>
                <div className="bg-trip-green/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-trip-green">4%</div><div className="text-xs text-muted-foreground">항공 (최대30만)</div></div>
                <div className="bg-trip-green/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-trip-green">3%</div><div className="text-xs text-muted-foreground">액티비티</div></div>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 예약 기간: 2025.01.01~2025.12.31</li>
                <li>• 결제 통화: <strong className="text-trip-green">KRW(원화)</strong></li>
                <li>• 지정 URL로 접속 후 즉시 결제</li>
              </ul>
              <AffiliateBtn label="할인 적용 →" className="mt-3 text-sm py-2 px-4" />
            </article>

            <article className="card-trip md:col-span-2">
              <h3 className="font-bold text-lg mb-2 text-trip-gold">🏅 신한 Visa 카드 (마이셀렉트샵 경유)</h3>
              <p className="text-2xl font-black text-trip-gold mb-2">최대 30% 캐시백</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 기본 15% + 추가 15% 캐시백 (합산 최대 30%)</li>
                <li>• 마이셀렉트샵 경유 → 트립닷컴 호텔 예약 → 숙박 완료 후 90일 이내 환급</li>
                <li>• 추가 캐시백 한도: 트립닷컴+KKday 합산 최대 USD $100</li>
                <li>• <strong className="text-trip-red">제외:</strong> PayPal·네이버페이·카카오페이·PAYCO 결제 시 미적용</li>
                <li>• 예약 변경·취소 시 캐시백 미지급</li>
              </ul>
            </article>
          </div>
        </section>

        {/* KB국민카드 */}
        <section aria-label="KB국민카드 할인">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><CreditCard className="w-6 h-6 text-primary" /> KB 국민카드 × 트립닷컴</h2>
          <article className="card-trip">
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-3xl font-black text-primary">6%</div><div className="text-sm text-muted-foreground">호텔 즉시 할인</div></div>
              <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-3xl font-black text-primary">3%</div><div className="text-sm text-muted-foreground">항공권 즉시 할인</div></div>
              <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-3xl font-black text-primary">4%</div><div className="text-sm text-muted-foreground">액티비티 즉시 할인</div></div>
            </div>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• 예약 기간: <strong>~2026년 12월 31일</strong> (예산 소진 시 조기 종료)</li>
              <li>• 결제 통화: <strong className="text-primary">USD(달러) 결제 필수</strong></li>
              <li>• 대상 카드: KB국민 개인 신용/체크 국내외겸용 (기업·비씨·마에스트로 제외)</li>
              <li>• KB 전용 트립닷컴 URL 접속 → 코드 입력 → USD 결제</li>
            </ul>
            <div className="flex gap-2 mt-4 flex-wrap">
              <AffiliateBtn label="KB 할인 적용하기 →" className="text-sm py-2 px-4" />
            </div>
          </article>
        </section>

        {/* 우리카드 */}
        <section aria-label="우리카드 할인">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><CreditCard className="w-6 h-6 text-primary" /> 우리카드 × 트립닷컴</h2>
          <article className="card-trip">
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-trip-green/10 rounded-lg p-4 text-center"><div className="text-3xl font-black text-trip-green">6%</div><div className="text-sm">호텔</div></div>
              <div className="bg-trip-green/10 rounded-lg p-4 text-center"><div className="text-3xl font-black text-trip-green">3%</div><div className="text-sm">항공권</div></div>
              <div className="bg-trip-green/10 rounded-lg p-4 text-center"><div className="text-3xl font-black text-trip-green">4%</div><div className="text-sm">액티비티</div></div>
            </div>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• 예약 기간: ~2026년 6월 30일 (선착순)</li>
              <li>• 결제 통화: USD 또는 KRW (코드별 상이)</li>
              <li>• 우리카드 전용 링크 접속 → 코드 입력 → 우리카드로 결제</li>
            </ul>
            <AffiliateBtn label="우리카드 할인 →" className="mt-4 text-sm py-2 px-4" />
          </article>
        </section>

        {/* VISA */}
        <section aria-label="VISA 카드 할인">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><CreditCard className="w-6 h-6 text-primary" /> VISA 카드 × 트립닷컴</h2>
          <article className="card-trip">
            <p className="text-2xl font-black text-primary mb-3">최대 6% 할인</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• 적용: 항공권, 호텔, 액티비티</li>
              <li>• 결제 통화: <strong className="text-primary">USD(달러)</strong></li>
              <li>• VISA 전용 URL 경유 접속 후 결제</li>
              <li>• 기간: 상시 (선착순 예산 소진 시 종료)</li>
            </ul>
            <AffiliateBtn label="VISA 할인 적용 →" className="mt-4 text-sm py-2 px-4" />
          </article>
        </section>

        {/* 마스터카드 + 카카오뱅크 */}
        <section aria-label="마스터카드 할인">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><CreditCard className="w-6 h-6 text-primary" /> 마스터카드 × 트립닷컴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="card-trip">
              <h3 className="font-bold text-lg mb-2">마스터카드 (일반)</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 적용: 항공권, 액티비티, 호텔</li>
                <li>• 결제: 트립닷컴에서 마스터카드 <strong className="text-primary">USD 결제</strong></li>
                <li>• 기간: 상시 (선착순 마감)</li>
              </ul>
              <AffiliateBtn label="마스터카드 할인 →" className="mt-4 text-sm py-2 px-4" />
            </article>

            <article className="card-trip border-2 border-trip-gold">
              <span className="badge-trip bg-trip-gold/10 text-trip-gold text-xs mb-2">⭐ 최대 할인율</span>
              <h3 className="font-bold text-lg mb-2 text-trip-gold">카카오뱅크 마스터 체크카드</h3>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-trip-gold/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-trip-gold">20%</div><div className="text-xs">호텔 (최대 $100)</div></div>
                <div className="bg-trip-gold/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-trip-gold">10%</div><div className="text-xs">항공권 (최대 $80)</div></div>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 프렌즈/개인사업자/모임 체크카드 대상</li>
                <li>• 결제: <strong className="text-primary">USD 필수</strong></li>
                <li>• 취소 시 할인 금액 환불 불가, 코드 재발행</li>
                <li>• ⚠️ 최신 프로모션 기간 카카오뱅크 앱 확인</li>
              </ul>
              <AffiliateBtn label="카카오뱅크 할인 →" className="mt-4 text-sm py-2 px-4" />
            </article>
          </div>
        </section>

        {/* BC / 삼성 / 네이버웨일 / 카카오페이 */}
        <section aria-label="기타 결제수단 할인">
          <h2 className="text-2xl font-bold mb-4">기타 결제수단 할인</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="card-trip">
              <h3 className="font-bold text-lg mb-2">BC카드 × 트립닷컴</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 호텔 및 투어 할인코드</li>
                <li>• 결제 통화: <strong className="text-trip-green">KRW(원화)</strong></li>
                <li>• 선착순 소진 시 종료</li>
              </ul>
              <AffiliateBtn label="BC카드 할인 →" className="mt-3 text-sm py-2 px-4" />
            </article>

            <article className="card-trip">
              <h3 className="font-bold text-lg mb-2">삼성카드 × 트립닷컴</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 호텔 할인</li>
                <li>• 결제 통화: <strong className="text-trip-green">KRW(원화)</strong></li>
                <li>• 선착순 소진 시 종료</li>
              </ul>
              <AffiliateBtn label="삼성카드 할인 →" className="mt-3 text-sm py-2 px-4" />
            </article>

            <article className="card-trip border-2 border-trip-green">
              <span className="badge-trip bg-trip-green/10 text-trip-green text-xs mb-2">💡 원화 결제 추천</span>
              <h3 className="font-bold text-lg mb-2 text-trip-green">네이버 웨일 × 트립닷컴</h3>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-trip-green/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-trip-green">7%</div><div className="text-xs">호텔</div></div>
                <div className="bg-trip-green/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-trip-green">2.5%</div><div className="text-xs">항공권</div></div>
                <div className="bg-trip-green/10 rounded-lg p-3 text-center"><div className="text-2xl font-black text-trip-green">5%</div><div className="text-xs">투어·티켓</div></div>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• ~2026년 6월 30일 (선착순)</li>
                <li>• <strong className="text-trip-green">KRW(원화) 결제 필수</strong></li>
                <li>• 반드시 네이버 웨일 브라우저에서 접속</li>
                <li>• 네이버페이 결제 시 0.5% 추가 적립</li>
              </ul>
              <AffiliateBtn label="네이버 웨일 할인 →" className="mt-3 text-sm py-2 px-4" />
            </article>

            <article className="card-trip">
              <h3 className="font-bold text-lg mb-2">카카오페이 × 트립닷컴</h3>
              <p className="text-2xl font-black text-trip-orange mb-2">최대 12% (최대 3만원)</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 매일 오전 10시·오후 6시 선착순</li>
                <li>• 호텔 첫 예약 고객 대상</li>
                <li>• 체인호텔(하얏트·메리어트·힐튼) 적용 가능</li>
                <li>• 기간: 2026.03.09 ~ 12.31</li>
              </ul>
              <AffiliateBtn label="카카오페이 쿠폰 →" className="mt-3 text-sm py-2 px-4" />
            </article>
          </div>
        </section>

        {/* 상황별 최적 카드 선택 가이드 */}
        <section className="bg-muted -mx-4 px-4 md:mx-0 md:px-0 py-8 md:bg-transparent" aria-label="상황별 최적 카드 가이드">
          <h2 className="text-2xl font-bold mb-6">💡 상황별 최적 카드 선택 가이드</h2>
          <img src={comparisonImg} alt="카드 비교" width={200} height={150} loading="lazy" className="mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-trip">
              <h3 className="font-bold text-trip-green mb-3">🟢 원화 결제가 편한 경우</h3>
              <ol className="text-sm space-y-2 list-decimal list-inside">
                <li><strong>네이버 웨일</strong> — 호텔 7% (최고 원화 호텔 할인)</li>
                <li><strong>BC카드</strong> — 선착순 호텔+투어 할인</li>
                <li><strong>신한카드·삼성카드</strong> — KRW 결제 조건</li>
              </ol>
            </div>
            <div className="card-trip">
              <h3 className="font-bold text-primary mb-3">🔵 달러 결제가 가능한 경우</h3>
              <ol className="text-sm space-y-2 list-decimal list-inside">
                <li><strong>KB국민카드</strong> — 호텔 6% + 액티비티 4%</li>
                <li><strong>우리카드</strong> — 호텔 6% + 액티비티 4%</li>
                <li><strong>VISA 카드</strong> — 최대 6%</li>
                <li><strong>신한 SOL TRAVEL</strong> — 호텔 7% + 항공 4%</li>
              </ol>
            </div>
            <div className="card-trip">
              <h3 className="font-bold text-trip-gold mb-3">⭐ 특별 상황 — 큰 금액 지불 시</h3>
              <p className="text-sm">카카오뱅크 마스터 체크카드: <strong>20% 할인</strong> (최대 USD $100)</p>
            </div>
            <div className="card-trip">
              <h3 className="font-bold text-trip-orange mb-3">✈️ 항공권 위주 여행자</h3>
              <ol className="text-sm space-y-1 list-decimal list-inside">
                <li>신한카드: 항공 4% (최대 30만원)</li>
                <li>신한 SOL TRAVEL: 항공 4%</li>
                <li>KB국민: 항공 3%</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 중요 주의사항 */}
        <section aria-label="카드 할인 주의사항">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-trip-orange" /> 카드 할인 적용 시 반드시 알아야 할 것</h2>

          <div className="space-y-4">
            <article className="card-trip border-l-4 border-l-trip-red">
              <h3 className="font-bold mb-2">⚠️ 이중환전(DCC) 주의사항</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 국내 간편결제(카카오·네이버·삼성페이) → KRW 설정 → 해외 수수료 없음</li>
                <li>• VISA·마스터 직접 입력 → USD 설정 → DCC 수수료 회피</li>
                <li>• <strong className="text-trip-red">USD 카드를 KRW로 결제하면</strong> → 제휴 할인 미적용 + 이중환전 손실</li>
              </ul>
            </article>

            <article className="card-trip border-l-4 border-l-trip-orange">
              <h3 className="font-bold mb-2">🔗 광고 링크 경유 시 할인코드 무효화</h3>
              <p className="text-sm text-muted-foreground">포털 '광고'/'스폰서' 링크 경유 시 할인코드가 적용되지 않습니다. 반드시 <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="text-primary underline">전용 제휴 링크</a>를 통해 접속하세요.</p>
            </article>

            <article className="card-trip border-l-4 border-l-primary">
              <h3 className="font-bold mb-2">📦 패키지 상품 적용 불가</h3>
              <p className="text-sm text-muted-foreground">항공+호텔 결합(패키지) 상품에는 할인코드 적용 불가. 호텔 또는 항공권 <strong>단독 예약에만</strong> 사용 가능합니다.</p>
            </article>
          </div>
        </section>

        {/* 카드사별 완벽 비교표 (독보적 추가 정보) */}
        <section aria-label="카드사별 완벽 비교">
          <h2 className="text-2xl font-bold mb-6">📊 카드사별 완벽 비교표 (독점 분석)</h2>
          <p className="section-subtitle">할인율뿐만 아니라 실질 절약액, 편의성, 추천도까지 종합 비교</p>
          <div className="table-responsive">
            <table className="table-trip">
              <thead>
                <tr><th>카드사</th><th>호텔</th><th>항공</th><th>액티비티</th><th>통화</th><th>한도</th><th>기간</th><th>편의성</th><th>추천도</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-medium">신한 SOL</td><td>7%</td><td>4%</td><td>3%</td><td className="text-primary font-medium">USD</td><td>제한 없음</td><td>~'26.03</td><td>★★★</td><td>⭐⭐⭐⭐</td></tr>
                <tr><td className="font-medium">신한 (일반)</td><td>8%</td><td>4%</td><td>3%</td><td className="text-trip-green font-medium">KRW</td><td>각 30만</td><td>~'25.12</td><td>★★★★</td><td>⭐⭐⭐⭐</td></tr>
                <tr><td className="font-medium">KB국민</td><td>6%</td><td>3%</td><td>4%</td><td className="text-primary font-medium">USD</td><td>예산한도</td><td>~'26.12</td><td>★★★</td><td>⭐⭐⭐⭐⭐</td></tr>
                <tr><td className="font-medium">우리</td><td>6%</td><td>3%</td><td>4%</td><td>혼합</td><td>선착순</td><td>~'26.06</td><td>★★★</td><td>⭐⭐⭐</td></tr>
                <tr><td className="font-medium">VISA</td><td>~6%</td><td>~6%</td><td>—</td><td className="text-primary font-medium">USD</td><td>선착순</td><td>상시</td><td>★★★</td><td>⭐⭐⭐</td></tr>
                <tr className="bg-trip-gold/5"><td className="font-bold text-trip-gold">카카오뱅크</td><td className="font-bold">20%</td><td>10%</td><td>—</td><td className="text-primary font-medium">USD</td><td>$100/$80</td><td>확인</td><td>★★</td><td>⭐⭐⭐⭐⭐</td></tr>
                <tr className="bg-trip-green/5"><td className="font-bold text-trip-green">네이버 웨일</td><td className="font-bold">7%</td><td>2.5%</td><td>5%</td><td className="text-trip-green font-medium">KRW</td><td>선착순</td><td>~'26.06</td><td>★★★★★</td><td>⭐⭐⭐⭐⭐</td></tr>
                <tr><td className="font-medium">카카오페이</td><td>~12%</td><td>—</td><td>—</td><td className="text-trip-green font-medium">KRW</td><td>3만원</td><td>~'26.12</td><td>★★★★</td><td>⭐⭐⭐⭐</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">※ 편의성: 사용 조건의 간편함 (★ 많을수록 쉬움) | 추천도: 할인율+기간+한도 종합 평가</p>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <AffiliateBtn label="🔥 지금 바로 카드 할인 적용하기" className="text-lg py-4 px-8 animate-pulse-glow" />
        </section>
      </div>
    </>
  );
};

export default CardDiscounts;
