// 증명서 데이터 배열 (실제로는 더 많은 데이터가 있을 것입니다)
const certificateData = [
    {
        id: 1,
        name: "주민등록등본",
        category: "주민등록·가족관계",
        issuer: "행정안전부",
        issueMethods: ["정부24", "주민센터 방문"],
        description: "주민등록법에 따라 세대별 주민등록표에 기재한 내용을 증명하기 위해 발급하는 문서입니다.",
        url: "https://www.gov.kr",
        fee: "무료 (온라인 발급 시)",
        requiredDocs: "신분증"
    },
    {
        id: 2,
        name: "주민등록초본",
        category: "주민등록·가족관계",
        issuer: "행정안전부",
        issueMethods: ["정부24", "주민센터 방문"],
        description: "개인별 주민등록표에 기재한 내용을 증명하기 위해 발급하는 문서입니다.",
        url: "https://www.gov.kr",
        fee: "무료 (온라인 발급 시)",
        requiredDocs: "신분증"
    },
    {
        id: 3,
        name: "가족관계증명서",
        category: "주민등록·가족관계",
        issuer: "법원행정처",
        issueMethods: ["정부24", "주민센터 방문", "대법원 전자가족관계등록시스템"],
        description: "가족관계등록부에 기록된 출생, 혼인, 사망 등 가족관계에 관한 사항을 증명하는 문서입니다.",
        url: "https://efamily.scourt.go.kr",
        fee: "1,000원 (온라인 발급 시)",
        requiredDocs: "신분증"
    },
    {
        id: 4,
        name: "토지대장",
        category: "부동산",
        issuer: "국토교통부",
        issueMethods: ["정부24", "주민센터 방문", "부동산종합공부시스템"],
        description: "토지의 소재, 지번, 지목, 면적 등 토지에 관한 사항을 증명하는 문서입니다.",
        url: "https://www.gov.kr",
        fee: "1,000원",
        requiredDocs: "신분증"
    },
    {
        id: 5,
        name: "건축물대장",
        category: "부동산",
        issuer: "국토교통부",
        issueMethods: ["정부24", "주민센터 방문", "세움터"],
        description: "건축물의 소재지, 용도, 구조, 면적 등 건축물에 관한 사항을 증명하는 문서입니다.",
        url: "https://www.gov.kr",
        fee: "1,000원",
        requiredDocs: "신분증"
    },
    {
        id: 6,
        name: "소득금액증명",
        category: "소득·세금",
        issuer: "국세청",
        issueMethods: ["홈택스", "세무서 방문"],
        description: "개인이 신고한 소득금액을 증명하는 문서입니다.",
        url: "https://www.hometax.go.kr",
        fee: "무료 (온라인 발급 시)",
        requiredDocs: "공동인증서 또는 신분증"
    },
    {
        id: 7,
        name: "졸업증명서",
        category: "교육",
        issuer: "각 교육기관",
        issueMethods: ["교육기관 방문", "정부24", "민원24"],
        description: "학교 졸업 사실을 증명하는 문서입니다.",
        url: "https://www.gov.kr",
        fee: "500원~2,000원",
        requiredDocs: "신분증"
    },
    {
        id: 8,
        name: "경력증명서",
        category: "고용·취업",
        issuer: "근무지",
        issueMethods: ["근무지 방문", "워크넷"],
        description: "근무 기간과 담당 업무 등을 증명하는 문서입니다.",
        url: "https://www.work.go.kr",
        fee: "무료~3,000원",
        requiredDocs: "신분증"
    },
    {
        id: 9,
        name: "건강보험자격득실확인서",
        category: "건강·의료",
        issuer: "국민건강보험공단",
        issueMethods: ["건강보험공단 홈페이지", "공단 지사 방문"],
        description: "건강보험 자격의 취득과 상실 이력을 증명하는 문서입니다.",
        url: "https://www.nhis.or.kr",
        fee: "무료 (온라인 발급 시)",
        requiredDocs: "공동인증서 또는 신분증"
    },
    {
        id: 10,
        name: "예방접종증명서",
        category: "건강·의료",
        issuer: "질병관리청",
        issueMethods: ["예방접종도우미 홈페이지", "보건소 방문"],
        description: "예방접종 내역을 증명하는 문서입니다.",
        url: "https://nip.kdca.go.kr",
        fee: "무료",
        requiredDocs: "공동인증서 또는 신분증"
    }
];

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 검색 기능 구현
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // 검색 버튼 클릭 이벤트
    searchButton.addEventListener('click', function() {
        performSearch();
    });

    // 엔터 키 이벤트
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 검색 실행 함수
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm === '') {
            alert('검색어를 입력해주세요.');
            return;
        }

        // 검색 결과 필터링
        const results = certificateData.filter(cert => 
            cert.name.includes(searchTerm) || 
            cert.description.includes(searchTerm) ||
            cert.category.includes(searchTerm)
        );

        // 검색 결과 표시
        displaySearchResults(results, searchTerm);
    }

    // 검색 결과 표시 함수
    function displaySearchResults(results, searchTerm) {
        // 검색 결과 섹션이 이미 있으면 제거
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }

        // 검색 결과 섹션 생성
        const resultsSection = document.createElement('section');
        resultsSection.className = 'search-results';

        const container = document.createElement('div');
        container.className = 'container';

        // 검색 결과 헤더
        const header = document.createElement('h3');
        header.textContent = `"${searchTerm}" 검색 결과 (${results.length}건)`;
        container.appendChild(header);

        if (results.length === 0) {
            // 검색 결과가 없는 경우
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <p>검색 결과가 없습니다.</p>
                <p>다른 검색어로 다시 시도해보세요.</p>
            `;
            container.appendChild(noResults);
        } else {
            // 검색 결과 리스트 생성
            const resultsList = document.createElement('div');
            resultsList.className = 'results-list';

            results.forEach(cert => {
                const resultCard = document.createElement('div');
                resultCard.className = 'result-card';
                resultCard.innerHTML = `
                    <h4>${cert.name}</h4>
                    <div class="result-details">
                        <p><strong>카테고리:</strong> ${cert.category}</p>
                        <p><strong>발급기관:</strong> ${cert.issuer}</p>
                        <p><strong>설명:</strong> ${cert.description}</p>
                        <p><strong>발급방법:</strong> ${cert.issueMethods.join(', ')}</p>
                        <p><strong>수수료:</strong> ${cert.fee}</p>
                        <a href="${cert.url}" target="_blank" class="cert-link">발급 사이트 바로가기</a>
                    </div>
                `;
                resultsList.appendChild(resultCard);
            });

            container.appendChild(resultsList);
        }

        resultsSection.appendChild(container);

        // 결과를 히어로 섹션 바로 다음에 삽입
        const heroSection = document.querySelector('.hero');
        heroSection.parentNode.insertBefore(resultsSection, heroSection.nextSibling);

        // 검색 결과로 스크롤
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 카테고리 카드 클릭 이벤트 - 해당 카테고리의 증명서 목록 표시
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        const categoryTitle = card.querySelector('h4').textContent;
        card.addEventListener('click', function() {
            // 카테고리에 해당하는 증명서만 필터링
            const filteredResults = certificateData.filter(cert => cert.category === categoryTitle);
            displaySearchResults(filteredResults, categoryTitle);
        });
    });
});

// 스타일 추가 (동적으로 생성되는 검색 결과 섹션을 위한 CSS)
document.head.insertAdjacentHTML('beforeend', `
<style>
.search-results {
    padding: 50px 0;
    background-color: #fff;
}

.search-results h3 {
    font-size: 1.6rem;
    margin-bottom: 25px;
    color: #333;
}

.no-results {
    background-color: #f8f9fa;
    padding: 30px;
    text-align: center;
    border-radius: 10px;
}

.no-results p {
    margin-bottom: 10px;
    color: #666;
}

.results-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
}

.result-card {
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    padding: 20px;
    transition: transform 0.3s;
}

.result-card:hover {
    transform: translateY(-5px);
}

.result-card h4 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #1a73e8;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

.result-details p {
    margin-bottom: 8px;
    color: #555;
}

.cert-link {
    display: inline-block;
    margin-top: 15px;
    background-color: #1a73e8;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    font-weight: 500;
    transition: background-color 0.3s;
}

.cert-link:hover {
    background-color: #1557b0;
}

@media (max-width: 768px) {
    .results-list {
        grid-template-columns: 1fr;
    }
}
</style>
`); 