import { Helmet } from "react-helmet-async";
import CopyButton from "@/components/CopyButton";
import AffiliateBtn from "@/components/AffiliateBtn";
import faqImg from "@/assets/troubleshooting.png";
import comparisonImg from "@/assets/comparison.png";
import customerImg from "@/assets/customer-service.png";
import savingsImg from "@/assets/savings-calc.png";
import bangkokImg from "@/assets/bangkok-travel.jpg";
import vietnamImg from "@/assets/vietnam-travel.jpg";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, XCircle, HelpCircle, Calendar, Phone, MessageCircle, Globe } from "lucide-react";

const AFFILIATE = "http://app.ac/XtwdyDM23";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ & 트러블슈팅 - 트립닷컴 할인코드</title>
        <meta name="description" content="트립닷컴 할인코드 적용 오류 해결 가이드. 코드 무효, 할인 미적용, 결제 통화 문제 등 모든 문제 해결법과 FAQ 총정리." />
        <link rel="canonical" href="https://trip.dongbaektour.co.kr/faq" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {"@type":"Question","name":"트립닷컴 할인코드가 적용되지 않으면 어떻게 하나요?","acceptedAnswer":{"@type":"Answer","text":"결제 통화(USD/KRW) 불일치, 전용 링크 미사용, 예산 소진 등이 원인일 수 있습니다. 결제 통화를 확인하고 전용 링크로 재접속해보세요."}},
            {"@type":"Question","name":"트립코인과 할인코드를 동시에 사용할 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"아니요, 트립코인과 할인코드는 동시 적용이 불가합니다. 둘 중 할인액이 큰 쪽을 선택하세요."}},
            {"@type":"Question","name":"골드 등급은 어떻게 달성하나요?","acceptedAnswer":{"@type":"Answer","text":"예약 1건만 완료하면 됩니다. 가장 저렴한 기차표(약 2,700원)로도 달성 가능합니다."}},
            {"@type":"Question","name":"패키지 상품에 할인코드를 사용할 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"아니요, 항공+호텔 결합 패키지에는 할인코드 적용이 불가합니다. 각각 단독 예약 시에만 사용 가능합니다."}}
          ]
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="hero-section py-12 md:py-16 text-center">
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">❓ FAQ & 트러블슈팅 위키</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">할인코드 적용 오류 해결, 자주 묻는 질문, 트립닷컴 이용 심화 정보</p>
        </div>
      </section>

      <div className="container py-12 space-y-16">
        {/* 트러블슈팅 */}
        <section aria-label="할인코드 트러블슈팅">
          <div className="flex items-center gap-3 mb-6">
            <img src={faqImg} alt="트러블슈팅" width={60} height={45} loading="lazy" />
            <h2 className="section-title">🔧 할인코드가 적용되지 않을 때 — 트러블슈팅</h2>
          </div>

          <div className="space-y-4">
            {/* 문제 1 */}
            <details className="card-trip group" open>
              <summary className="font-bold text-lg cursor-pointer flex items-center gap-2 list-none">
                <XCircle className="w-5 h-5 text-trip-red shrink-0" />
                <span>❌ "이 코드는 유효하지 않습니다" 메시지</span>
              </summary>
              <div className="mt-3 text-sm space-y-2 text-muted-foreground">
                <p><strong>1. 코드 유효 기간 초과</strong> → 예약·숙박·출발 기간 모두 확인</p>
                <p><strong>2. 선착순 예산 소진</strong> → 해당 프로모션 조기 종료, 다른 코드 사용</p>
                <p><strong>3. 오탈자</strong> → 코드 복사 시 앞뒤 공백 제거</p>
                <p><strong>4. 사용 횟수 초과</strong> → 1 ID당 최대 사용 횟수 확인</p>
                <CopyButton code="TRIPBH3F" label="정확한 코드 복사하기" />
              </div>
            </details>

            {/* 문제 2 */}
            <details className="card-trip group">
              <summary className="font-bold text-lg cursor-pointer flex items-center gap-2 list-none">
                <XCircle className="w-5 h-5 text-trip-red shrink-0" />
                <span>❌ 코드 입력했는데 할인 금액이 0원</span>
              </summary>
              <div className="mt-3 text-sm space-y-2 text-muted-foreground">
                <p><strong className="text-trip-red">1. 결제 통화 불일치 — 가장 흔한 원인!</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• KB·우리·VISA·마스터 코드 → <strong className="text-primary">USD로 변경</strong></li>
                  <li>• 네이버웨일·BC·신한(일반)·삼성 코드 → <strong className="text-trip-green">KRW로 변경</strong></li>
                </ul>
                <p><strong>2. 전용 링크 미사용</strong> → <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="text-primary underline">전용 링크</a>로 재접속</p>
                <p><strong>3. 광고 링크 경유</strong> → 포털 '광고' 링크 아닌 전용 URL로 접속</p>
              </div>
            </details>

            {/* 문제 3 */}
            <details className="card-trip group">
              <summary className="font-bold text-lg cursor-pointer flex items-center gap-2 list-none">
                <XCircle className="w-5 h-5 text-trip-red shrink-0" />
                <span>❌ 카드사 제휴 할인코드가 적용 안 됨</span>
              </summary>
              <div className="mt-3 text-sm text-muted-foreground">
                <p className="font-bold mb-2">체크리스트:</p>
                <ul className="space-y-1">
                  <li>☐ 해당 카드사 전용 링크로 접속했는가?</li>
                  <li>☐ 해당 카드사 카드로 결제했는가?</li>
                  <li>☐ 결제 통화를 올바르게 설정했는가? (USD or KRW)</li>
                  <li>☐ 간편결제(카카오페이 등)를 사용하지 않았는가?</li>
                  <li>☐ 대상 카드인가? (기업카드, BC 제외 등)</li>
                  <li>☐ 선착순 예산 소진 여부</li>
                </ul>
              </div>
            </details>

            {/* 문제 4 */}
            <details className="card-trip group">
              <summary className="font-bold text-lg cursor-pointer flex items-center gap-2 list-none">
                <XCircle className="w-5 h-5 text-trip-red shrink-0" />
                <span>❌ 패키지(항공+호텔)에 코드 적용 안 됨</span>
              </summary>
              <div className="mt-3 text-sm text-muted-foreground">
                <p>트립닷컴 할인코드는 <strong>단독 예약에만</strong> 적용 가능합니다. 패키지 결합 상품 불가.</p>
                <p className="mt-1">→ 호텔과 항공권을 <strong>각각 따로 예약</strong> 후 각각 코드 적용하세요.</p>
              </div>
            </details>

            {/* 문제 5 */}
            <details className="card-trip group">
              <summary className="font-bold text-lg cursor-pointer flex items-center gap-2 list-none">
                <XCircle className="w-5 h-5 text-trip-red shrink-0" />
                <span>❌ 트립코인 + 할인코드 동시 사용 안 됨</span>
              </summary>
              <div className="mt-3 text-sm text-muted-foreground">
                <p>트립닷컴은 트립코인과 할인코드 <strong>동시 적용 불가</strong>. 둘 중 하나만 선택.</p>
                <p className="mt-1">💡 보유 트립코인 가치 vs 할인코드 할인액 비교 후 유리한 쪽 선택</p>
              </div>
            </details>

            {/* 문제 6 */}
            <details className="card-trip group">
              <summary className="font-bold text-lg cursor-pointer flex items-center gap-2 list-none">
                <XCircle className="w-5 h-5 text-trip-red shrink-0" />
                <span>❌ 코드 입력 후 결제했는데 원래 금액과 같음</span>
              </summary>
              <div className="mt-3 text-sm text-muted-foreground">
                <ol className="space-y-1 list-decimal list-inside">
                  <li>예약 확인 이메일의 결제 금액 확인</li>
                  <li>트립닷컴 앱 → 내 예약 → 결제 내역 확인</li>
                  <li>이상 시 고객센터 즉시 문의 (예약 번호, 사용 코드, 결제 금액 필요)</li>
                </ol>
              </div>
            </details>

            {/* 문제 7 */}
            <details className="card-trip group">
              <summary className="font-bold text-lg cursor-pointer flex items-center gap-2 list-none">
                <XCircle className="w-5 h-5 text-trip-red shrink-0" />
                <span>❌ 앱에서는 되는데 웹에서 안 됨</span>
              </summary>
              <div className="mt-3 text-sm text-muted-foreground">
                <p>일부 할인코드는 <strong>앱 전용</strong>입니다 (공항픽업 쿠폰, 앱 전용 특가 등). 앱에서 다시 시도하세요.</p>
              </div>
            </details>

            {/* 문제 8 */}
            <details className="card-trip group">
              <summary className="font-bold text-lg cursor-pointer flex items-center gap-2 list-none">
                <XCircle className="w-5 h-5 text-trip-red shrink-0" />
                <span>❌ 취소 후 코드 재사용이 안 됨</span>
              </summary>
              <div className="mt-3 text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li>• 호텔 코드: 취소 시 자동 재발행 → 할인코드 탭 확인</li>
                  <li>• 항공권 코드: 환불 규정에 따라 재사용 불가할 수 있음</li>
                  <li>• 예약 변경 후 코드 무효 → 새로운 코드 필요</li>
                </ul>
              </div>
            </details>
          </div>
        </section>

        {/* 예약·결제 FAQ */}
        <section aria-label="예약 결제 FAQ">
          <h2 className="section-title">💳 예약·결제 관련 FAQ</h2>
          <div className="space-y-3 mt-4">
            {[
              ["비회원으로도 예약이 가능한가요?", "가능한 경우가 있지만, 예약 관리가 번거롭고 회원 할인·트립코인 적립이 불가합니다. 반드시 회원 가입 후 이용을 권장합니다."],
              ["결제 수단은 어떤 것이 있나요?", "신용/체크카드(VISA, 마스터, 국내 카드사), 카카오페이, 네이버페이, 삼성페이 등 주요 간편결제. 일부 숙소는 현장 결제도 가능합니다."],
              ["예약 후 호텔 바우처는 어디서 받나요?", "예약 완료 후 입력한 이메일로 자동 발송됩니다. 트립닷컴 앱 → 내 예약에서도 확인 가능합니다."],
              ["노쇼(No-Show)가 되면 어떻게 되나요?", "체크인 예정일에 나타나지 않으면 첫날 요금 또는 전액이 청구됩니다. 늦게 도착하는 경우 사전에 연락하세요."],
              ["무료 취소 가능한 숙소만 보고 싶어요.", "검색 필터에서 '무료 취소' 옵션을 체크하면 됩니다. 가격이 더 높을 수 있습니다."],
              ["원화 결제와 달러 결제 중 뭐가 더 유리한가요?", "해외 수수료 없는 카드 + USD → 달러 결제 코드 사용 가능. 일반 카드 + USD → 해외 수수료 추가 → KRW가 더 나을 수 있음."],
            ].map(([q, a], i) => (
              <details key={i} className="card-trip">
                <summary className="font-bold cursor-pointer flex items-center gap-2 list-none">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>Q. {q}</span>
                </summary>
                <p className="mt-2 text-sm text-muted-foreground pl-7">A. {a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 멤버십·트립코인 FAQ */}
        <section aria-label="멤버십 FAQ">
          <h2 className="section-title">👑 멤버십·트립코인 FAQ</h2>
          <div className="space-y-3 mt-4">
            {[
              ["트립코인의 유효기간은?", "유효기간이 있으며, 기간 내 사용해야 합니다. 프로그램 종료 시 공지 후 30일간 사용 가능."],
              ["골드 등급은 유지 조건이 있나요?", "등급 유효기간이 있으며, 지난 1년의 예약 건수·지출액으로 재산정됩니다. 다이아몬드는 유지 시 1년 연장."],
              ["트립코인으로 살 수 있는 것은?", "호텔, 항공권, 기차표, 렌터카, 공항픽업 예약 시 현금처럼 사용 가능합니다."],
              ["친구 초대하면 혜택이 있나요?", "1명 초대당 최대 2,000 트립코인. 최대 10명까지. 본인·친구 모두 첫 예약 완료 시 확정."],
              ["리뷰를 쓰면 트립코인을 받을 수 있나요?", "네, 예약 완료 후 사진 리뷰 작성 시 추가 트립코인 적립됩니다."],
            ].map(([q, a], i) => (
              <details key={i} className="card-trip">
                <summary className="font-bold cursor-pointer flex items-center gap-2 list-none"><HelpCircle className="w-5 h-5 text-trip-gold shrink-0" /><span>Q. {q}</span></summary>
                <p className="mt-2 text-sm text-muted-foreground pl-7">A. {a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 프로모션 FAQ */}
        <section aria-label="프로모션 FAQ">
          <h2 className="section-title">🎁 프로모션 FAQ</h2>
          <div className="space-y-3 mt-4">
            {[
              ["매월 할인코드가 바뀌나요?", "네, 매월 1일 정기 업데이트됩니다. 카드사 코드는 별도 기간으로 운영. 이 사이트에서 매월 최신 코드를 확인하세요."],
              ["선착순 코드는 몇 개가 준비되나요?", "트립닷컴은 수량을 공개하지 않습니다. 인기 프로모션은 오픈 직후 빠르게 소진 — 정시에 접속 권장."],
              ["카카오톡 채널을 추가하면 혜택이 있나요?", "네, 할인 코드 및 특가 정보를 먼저 받아볼 수 있습니다."],
              ["주말 특가가 있나요?", "매주 목요일~일요일 인기 상품 주말 특가가 진행됩니다."],
              ["가격 알리미 기능이 있나요?", "네, 원하는 항공권이나 호텔 가격이 하락하면 알림을 받을 수 있습니다."],
            ].map(([q, a], i) => (
              <details key={i} className="card-trip">
                <summary className="font-bold cursor-pointer flex items-center gap-2 list-none"><HelpCircle className="w-5 h-5 text-trip-green shrink-0" /><span>Q. {q}</span></summary>
                <p className="mt-2 text-sm text-muted-foreground pl-7">A. {a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 서비스 보장제 */}
        <section aria-label="서비스 보장제">
          <h2 className="section-title">🛡️ 서비스 보장제 안내</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="card-trip border-l-4 border-l-primary">
              <h3 className="font-bold mb-2">호텔 보장제</h3>
              <p className="text-sm text-muted-foreground">예약 완료 후 체크인 시 문제 발생 시 동급 또는 업그레이드 객실로 재배정. 트립닷컴이 숙소와 직접 협의하여 해결.</p>
            </div>
            <div className="card-trip border-l-4 border-l-trip-gold">
              <h3 className="font-bold mb-2">항공권 가격 보장</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 소액 보증금으로 항공권 요금 <strong>14일간 동결</strong></li>
                <li>• 가격 상승 시 트립닷컴이 차액 보전</li>
                <li>• 가격 하락 시 자동으로 더 낮은 금액 적용</li>
                <li>• 성수기 인기 노선 좌석 확보 시 유용</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 경쟁사 비교 */}
        <section aria-label="경쟁사 비교">
          <h2 className="section-title">📊 트립닷컴 vs 경쟁사 비교 (독점 분석)</h2>
          <p className="section-subtitle">어떤 플랫폼을 쓸지 한눈에 비교하세요</p>
          <img src={comparisonImg} alt="플랫폼 비교" width={200} height={150} loading="lazy" className="mb-4" />
          <div className="table-responsive">
            <table className="table-trip">
              <thead>
                <tr><th>항목</th><th>트립닷컴</th><th>아고다</th><th>부킹닷컴</th><th>익스피디아</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-medium">체인호텔 할인코드</td><td className="text-trip-green font-bold">✅ 가능</td><td>⚠️ 제한적</td><td>⚠️ 제한적</td><td>⚠️ 제한적</td></tr>
                <tr><td className="font-medium">회원 등급제 특가</td><td className="text-trip-green font-bold">✅ 강력</td><td>✅ 제공</td><td>✅ 제공</td><td>✅ 제공</td></tr>
                <tr><td className="font-medium">한국 카드사 제휴</td><td className="text-trip-green font-bold">✅ 다양 (8종+)</td><td>✅ 일부</td><td>❌ 거의 없음</td><td>⚠️ 일부</td></tr>
                <tr><td className="font-medium">무료 취소 유연성</td><td>⚠️ 상품별 상이</td><td>⚠️ 상품별 상이</td><td className="text-trip-green font-bold">✅ 매우 유연</td><td>⚠️ 상품별 상이</td></tr>
                <tr><td className="font-medium">최저가 항공권</td><td className="text-trip-green font-bold">✅ 경쟁력 높음</td><td>❌ 미제공</td><td>✅ 일부</td><td>✅ 제공</td></tr>
                <tr><td className="font-medium">포인트 시스템</td><td className="text-trip-green font-bold">✅ 트립코인</td><td>✅ 캐시백</td><td>✅ 지니어스</td><td>✅ 리워드</td></tr>
                <tr><td className="font-medium">앱 전용 특가</td><td className="text-trip-green font-bold">✅ 강력</td><td>✅ 있음</td><td>✅ 있음</td><td>✅ 있음</td></tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="card-trip border-l-4 border-l-primary">
              <h3 className="font-bold text-primary mb-2">트립닷컴이 가장 유리한 경우</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 체인호텔(하얏트·메리어트·힐튼) 예약 시</li>
                <li>• 한국 카드사 제휴 할인 활용 시</li>
                <li>• 항공권 + 호텔 각각 코드 적용 시</li>
                <li>• 골드/플래티넘 회원 등급 보유 시</li>
              </ul>
            </div>
            <div className="card-trip border-l-4 border-l-muted-foreground">
              <h3 className="font-bold mb-2">부킹닷컴이 더 나을 수 있는 경우</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 일정 불확실 → 무료 취소가 절대적으로 필요할 때</li>
                <li>• 한국 카드사 제휴 할인이 없는 숙소 예약 시</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 자주 오해하는 것들 */}
        <section aria-label="주의사항 모음">
          <h2 className="section-title">⚠️ 자주 오해하는 것들 (주의사항 모음)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {[
              ["\"할인코드 입력했으니 무조건 적용됐겠지\"", "❌ 반드시 할인 금액이 줄어든 것을 결제 전 확인해야 합니다"],
              ["\"아무 링크로 들어가서 코드만 쓰면 돼\"", "❌ 반드시 코드별 전용 링크로 접속 후 결제해야 적용됩니다"],
              ["\"달러 결제하면 더 비싸니까 원화로 해야지\"", "❌ 해외 수수료 없는 카드 사용 시 달러 결제가 더 유리할 수 있습니다"],
              ["\"패키지에 코드 쓰면 더 많이 절약할 수 있겠지\"", "❌ 결합 패키지에는 코드 적용 불가합니다"],
              ["\"트립코인이랑 할인코드 둘 다 쓰면 되겠네\"", "❌ 동시 적용 불가, 하나만 선택하세요"],
              ["\"골드 등급은 호텔을 많이 예약해야 달성\"", "❌ 기차표 1건(2,700원)만으로 달성 가능합니다"],
              ["\"할인코드 취소하면 코드도 사라지겠지\"", "❌ 호텔 코드는 자동 재발행되어 기간 내 재사용 가능합니다"],
            ].map(([myth, truth], i) => (
              <div key={i} className="card-trip p-4">
                <p className="text-sm font-medium mb-1">{myth}</p>
                <p className="text-sm text-trip-red">{truth}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 월별 프로모션 캘린더 */}
        <section aria-label="월별 프로모션 캘린더">
          <h2 className="section-title flex items-center gap-2"><Calendar className="w-6 h-6" /> 월별 주요 프로모션 캘린더</h2>
          <p className="section-subtitle">연간 패턴을 파악하고 최적의 예약 타이밍을 잡으세요</p>
          <div className="table-responsive mt-4">
            <table className="table-trip">
              <thead><tr><th>월</th><th>주요 이벤트</th><th>특징</th></tr></thead>
              <tbody>
                {[
                  ["1월", "새해·설날 특가", "연초 특가, 동계 여행"],
                  ["2월", "발렌타인 커플 특가", "2인 프로모션"],
                  ["3월", "봄 여행·벚꽃 시즌", "일본 할인 최고 시즌"],
                  ["4월", "트립찬스·골든위크 대비", "얼리버드 집중"],
                  ["5월", "여름 특가 준비", "여름 얼리버드"],
                  ["6월", "여름 휴가 대규모", "연중 최대 할인"],
                  ["7월", "성수기 (한정적)", "동남아 특가"],
                  ["8월", "가을 특가 시작", "비수기 특가 주목"],
                  ["9월", "추석·가을 시즌", "단풍 일본 특가"],
                  ["10월", "가을 대규모 특가", "연중 최대 이벤트"],
                  ["11월", "블프·사이버먼데이", "연중 최저가"],
                  ["12월", "크리스마스·연말 최대 50%", "조기 마감 주의"],
                ].map(([month, event, note], i) => (
                  <tr key={i}><td className="font-bold">{month}</td><td>{event}</td><td className="text-muted-foreground">{note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
            💡 <strong>비수기 공략 팁:</strong> 7~8월 성수기를 피해 9~10월 또는 1~3월에 예약 시 가장 풍부한 할인 혜택!
          </div>
        </section>

        {/* 고객센터 */}
        <section aria-label="고객센터 이용 방법">
          <h2 className="section-title">📞 고객센터 이용 방법</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start mt-4">
            <div className="flex-1 space-y-3">
              <div className="card-trip flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold">앱 내 채팅</h3>
                  <p className="text-sm text-muted-foreground">트립닷컴 앱 → 하단 'My Trip' → 고객센터 → 채팅 시작</p>
                </div>
              </div>
              <div className="card-trip flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold">웹 채팅</h3>
                  <p className="text-sm text-muted-foreground">kr.trip.com 우측 하단 채팅 아이콘 클릭</p>
                </div>
              </div>
              <div className="card-trip flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold">운영 시간</h3>
                  <p className="text-sm text-muted-foreground">연중무휴 24시간 (한국어 지원)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">문의 시 필요 정보: 예약 번호, 예약자명, 결제 금액, 문제 상세 내용</p>
            </div>
            <img src={customerImg} alt="고객센터" width={200} height={150} loading="lazy" className="rounded-lg hidden md:block" />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <AffiliateBtn label="🔥 지금 바로 할인코드 적용하기" className="text-lg py-4 px-8 animate-pulse-glow" />
          <p className="text-sm text-muted-foreground mt-4">문제가 해결되지 않으셨나요? 트립닷컴 고객센터에 직접 문의하세요 (24시간 한국어 지원)</p>
        </section>
      </div>
    </>
  );
};

export default FAQ;
