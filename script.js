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
        url: "https://www.work24.go.kr/cm/c/b/1100/selectBbttInfo.do?polySvcFomtId=FM00000264",
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
    },
    {
        id: 11,
        name: "근로소득원천징수영수증",
        category: "소득·세금",
        issuer: "국세청",
        issueMethods: ["홈택스", "세무서 방문"],
        description: "근로소득원천징수 내역을 증명하는 문서입니다.",
        url: "https://www.hometax.go.kr",
        fee: "무료",
        requiredDocs: "공동인증서 또는 신분증"
    },
    // 추가 증명서 추가
    {
        id: 12,
        name: "혼인관계증명서",
        category: "주민등록·가족관계",
        issuer: "법원행정처",
        issueMethods: ["정부24", "주민센터 방문", "대법원 전자가족관계등록시스템"],
        description: "혼인 및 이혼에 관한 사항을 증명하는 문서입니다.",
        url: "https://efamily.scourt.go.kr",
        fee: "1,000원 (온라인 발급 시)",
        requiredDocs: "신분증"
    },
    {
        id: 13,
        name: "기본증명서",
        category: "주민등록·가족관계",
        issuer: "법원행정처",
        issueMethods: ["정부24", "주민센터 방문", "대법원 전자가족관계등록시스템"],
        description: "개인의 출생, 사망, 국적 등 신분사항을 증명하는 문서입니다.",
        url: "https://efamily.scourt.go.kr",
        fee: "1,000원 (온라인 발급 시)",
        requiredDocs: "신분증"
    },
    {
        id: 14,
        name: "등기부등본",
        category: "부동산",
        issuer: "대법원",
        issueMethods: ["인터넷등기소", "등기소 방문"],
        description: "부동산의 소유권, 저당권 등 권리관계를 증명하는 문서입니다.",
        url: "https://www.iros.go.kr",
        fee: "1,000원~2,000원",
        requiredDocs: "신분증"
    },
    {
        id: 15,
        name: "토지이용계획확인원",
        category: "부동산",
        issuer: "국토교통부",
        issueMethods: ["정부24", "주민센터 방문"],
        description: "토지의 이용계획과 규제내용을 확인하는 문서입니다.",
        url: "https://www.gov.kr",
        fee: "1,000원",
        requiredDocs: "신분증"
    },
    {
        id: 16,
        name: "부동산종합공증명서",
        category: "부동산",
        issuer: "국토교통부",
        issueMethods: ["정부24", "주민센터 방문", "부동산공부시스템"],
        description: "토지와 건물의 다양한 정보를 종합적으로 증명하는 문서입니다.",
        url: "https://www.gov.kr",
        fee: "1,500원",
        requiredDocs: "신분증"
    },
    {
        id: 17,
        name: "납세증명서",
        category: "소득·세금",
        issuer: "국세청",
        issueMethods: ["홈택스", "세무서 방문"],
        description: "국세의 납부 완료 여부를 증명하는 문서입니다.",
        url: "https://www.hometax.go.kr",
        fee: "무료 (온라인 발급 시)",
        requiredDocs: "공동인증서 또는 신분증"
    },
    {
        id: 18,
        name: "사업자등록증명",
        category: "소득·세금",
        issuer: "국세청",
        issueMethods: ["홈택스", "세무서 방문"],
        description: "사업자등록 사실을 증명하는 문서입니다.",
        url: "https://www.hometax.go.kr",
        fee: "무료 (온라인 발급 시)",
        requiredDocs: "공동인증서 또는 신분증"
    },
    {
        id: 19,
        name: "지방세납세증명서",
        category: "소득·세금",
        issuer: "지방자치단체",
        issueMethods: ["위택스", "주민센터 방문"],
        description: "지방세의 납부 완료 여부를 증명하는 문서입니다.",
        url: "https://www.wetax.go.kr",
        fee: "무료 (온라인 발급 시)",
        requiredDocs: "공동인증서 또는 신분증"
    },
    {
        id: 20,
        name: "국세완납증명서",
        category: "소득·세금",
        issuer: "국세청",
        issueMethods: ["홈택스", "세무서 방문"],
        description: "모든 세금의 완납 여부를 증명하는 문서입니다.",
        url: "https://www.hometax.go.kr",
        fee: "무료 (온라인 발급 시)",
        requiredDocs: "공동인증서 또는 신분증"
    },
    {
        id: 21,
        name: "성적증명서",
        category: "교육",
        issuer: "각 교육기관",
        issueMethods: ["교육기관 방문", "교육기관 홈페이지"],
        description: "학업 성적을 증명하는 문서입니다.",
        url: "해당 교육기관 홈페이지",
        fee: "500원~3,000원",
        requiredDocs: "신분증"
    },
    {
        id: 22,
        name: "대학교 재학 증명서",
        category: "교육",
        issuer: "각 교육기관",
        issueMethods: ["교육기관 방문", "교육기관 홈페이지", "정부24"],
        description: "현재 학교에 재학 중임을 증명하는 문서입니다.",
        url: "https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=&CappBizCD=13404000010",
        fee: "500원~2,000원",
        requiredDocs: "신분증 또는 학생증"
    },
    {
        id: 23,
        name: "교육비납입증명서",
        category: "교육",
        issuer: "각 교육기관",
        issueMethods: ["교육기관 방문", "교육기관 홈페이지", "홈택스"],
        description: "교육비 납입 내역을 증명하는 문서입니다.",
        url: "해당 교육기관 홈페이지",
        fee: "무료~1,000원",
        requiredDocs: "신분증 또는 학생증"
    },
    {
        id: 24,
        name: "검정고시 합격증명서",
        category: "교육",
        issuer: "교육청",
        issueMethods: ["정부24", "교육청 방문"],
        description: "검정고시 합격 사실을 증명하는 문서입니다.",
        url: "https://www.gov.kr",
        fee: "무료",
        requiredDocs: "신분증"
    },
    {
        id: 25,
        name: "재직증명서",
        category: "고용·취업",
        issuer: "근무지",
        issueMethods: ["근무지 방문", "사내 시스템"],
        description: "현재 회사에 재직 중임을 증명하는 문서입니다.",
        url: "해당 근무지 문의",
        fee: "무료",
        requiredDocs: "사원증 또는 신분증"
    },
    {
        id: 26,
        name: "퇴직증명서",
        category: "고용·취업",
        issuer: "이전 근무지",
        issueMethods: ["이전 근무지 방문", "우편 신청"],
        description: "이전 직장의 퇴직 사실을 증명하는 문서입니다.",
        url: "해당 근무지 문의",
        fee: "무료~3,000원",
        requiredDocs: "신분증"
    },
    {
        id: 27,
        name: "4대보험 가입증명서",
        category: "고용·취업",
        issuer: "국민건강보험공단",
        issueMethods: ["4대사회보험 정보연계센터", "건강보험공단 방문"],
        description: "국민연금, 건강보험, 고용보험, 산재보험의 가입 여부를 증명하는 문서입니다.",
        url: "https://www.4insure.or.kr",
        fee: "무료",
        requiredDocs: "공동인증서 또는 신분증"
    },
    {
        id: 28,
        name: "건강검진결과서",
        category: "건강·의료",
        issuer: "국민건강보험공단",
        issueMethods: ["건강보험공단 홈페이지", "검진기관 방문"],
        description: "건강검진 결과를 증명하는 문서입니다.",
        url: "https://www.nhis.or.kr",
        fee: "무료 (온라인 발급 시)",
        requiredDocs: "공동인증서 또는 신분증"
    },
    {
        id: 29,
        name: "진단서",
        category: "건강·의료",
        issuer: "의료기관",
        issueMethods: ["의료기관 방문", "정부24"],
        description: "의사가 환자의 질병이나 상해 상태를 증명하는 문서입니다.",
        url: "https://www.gov.kr/portal/service/serviceInfo/PTR000050357",
        fee: "5,000원~30,000원",
        requiredDocs: "신분증"
    },
    {
        id: 30,
        name: "의료비 납입증명서",
        category: "건강·의료",
        issuer: "의료기관",
        issueMethods: ["의료기관 방문", "건강보험공단 홈페이지", "홈택스"],
        description: "의료비 납부 내역을 증명하는 문서입니다.",
        url: "https://www.nhis.or.kr",
        fee: "무료~2,000원",
        requiredDocs: "공동인증서 또는 신분증"
    }
];

// 샘플 피드백 데이터 - 실제로는 서버에서 받아올 데이터
const sampleFeedbacks = [
    {
        id: 1,
        name: "김지민",
        email: "jimin@example.com",
        category: "suggestion",
        feedback: "증명서 발급 시간을 조금 더 단축했으면 좋겠습니다. 현재는 대기 시간이 조금 긴 것 같아요.",
        date: "2023-05-15"
    },
    {
        id: 2,
        name: "이승호",
        email: "seungho@example.com",
        category: "compliment",
        feedback: "UI가 매우 직관적이고 사용하기 편리합니다. 특히 검색 기능이 정확해서 좋아요!",
        date: "2023-05-10"
    },
    {
        id: 3,
        name: "박소연",
        email: "soyeon@example.com",
        category: "error",
        feedback: "모바일에서 특정 증명서를 선택할 때 가끔 오류가 발생합니다. 확인 부탁드립니다.",
        date: "2023-05-08"
    },
    {
        id: 4,
        name: "정다운",
        email: "dawoon@example.com",
        category: "question",
        feedback: "해외에서도 증명서 발급이 가능한가요? 현재 외국에 거주 중인데 서비스를 이용할 수 있을지 궁금합니다.",
        date: "2023-05-05"
    },
    {
        id: 5,
        name: "최준서",
        email: "junseo@example.com",
        category: "suggestion",
        feedback: "카테고리별로 인기 있는 증명서를 표시해주면 더 좋을 것 같아요.",
        date: "2023-05-03"
    }
];

// 로컬 스토리지 키
const FEEDBACK_STORAGE_KEY = 'userFeedbacks';

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 검색 기능 구현
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchBox = document.querySelector('.search-box');
    
    // 카테고리 카드 선언 (변수 중복 선언 오류 해결)
    const categoryCards = document.querySelectorAll('.category-card');
    
    // 검색창 포커스 시 효과
    searchInput.addEventListener('focus', function() {
        searchBox.classList.add('active');
    });
    
    searchInput.addEventListener('blur', function() {
        searchBox.classList.remove('active');
    });
    
    // 페이지 로드 시 검색창에 포커스
    setTimeout(() => {
        searchInput.focus();
    }, 1000);
    
    // 실시간 검색을 위한 디바운스 함수
    function debounce(func, delay) {
        let timer;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }
    
    // 실시간 검색 이벤트 - 타이핑 후 300ms가 지나면 검색 실행
    searchInput.addEventListener('input', debounce(function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm.length >= 1) { // 최소 1글자 이상 입력해야 검색
            showLoadingIndicator();
            // 실제 검색은 비동기적으로 처리하는 것을 시뮬레이션
            setTimeout(() => {
                performSearch();
            }, 300);
        } else if (searchTerm === '') {
            // 검색어가 없으면 결과 섹션 제거
            const existingResults = document.querySelector('.search-results');
            if (existingResults) {
                existingResults.remove();
            }
        }
    }, 300));

    // 검색 버튼 클릭 이벤트
    searchButton.addEventListener('click', function() {
        showLoadingIndicator();
        performSearch();
    });

    // 엔터 키 이벤트
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            showLoadingIndicator();
            performSearch();
        }
    });
    
    // 로딩 인디케이터 표시 함수
    function showLoadingIndicator() {
        // 이미 있는 결과 확인
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            // 로딩 인디케이터를 추가하기 전에 기존 것을 제거
            const existingIndicator = document.querySelector('.loading-indicator');
            if (existingIndicator) {
                existingIndicator.remove();
            }
            
            // 로딩 인디케이터 추가
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'loading-indicator';
            loadingIndicator.innerHTML = '<div class="spinner"></div><p>검색 중...</p>';
            existingResults.prepend(loadingIndicator);
        } else {
            // 검색 결과 섹션이 없으면 새로 생성
            const resultsSection = document.createElement('section');
            resultsSection.className = 'search-results';
            
            const container = document.createElement('div');
            container.className = 'container';
            
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'loading-indicator';
            loadingIndicator.innerHTML = '<div class="spinner"></div><p>검색 중...</p>';
            
            container.appendChild(loadingIndicator);
            resultsSection.appendChild(container);
            
            // 결과를 히어로 섹션 바로 다음에 삽입
            const heroSection = document.querySelector('.hero');
            heroSection.parentNode.insertBefore(resultsSection, heroSection.nextSibling);
        }
    }

    // 검색 실행 함수
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm === '') {
            alert('검색어를 입력해주세요.');
            return;
        }
        
        // 검색 히스토리에 저장
        saveToHistory(searchTerm);

        // 검색 결과 필터링 (부분 일치 검색으로 개선)
        const results = certificateData.filter(cert => 
            cert.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (cert.issuer && cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        // 검색 결과 표시
        displaySearchResults(results, searchTerm);
        
        // 검색 후 히스토리 업데이트
        updateAfterSearch();
    }

    // 검색 결과가 성공적으로 표시된 후 히스토리 업데이트
    function updateAfterSearch() {
        showSearchHistory();
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
                <div class="suggestions">
                    <p><strong>추천 검색어:</strong></p>
                    <div class="suggestion-tags">
                        <a href="#" class="suggestion-tag" data-term="주민등록">주민등록</a>
                        <a href="#" class="suggestion-tag" data-term="졸업">졸업</a>
                        <a href="#" class="suggestion-tag" data-term="소득">소득</a>
                        <a href="#" class="suggestion-tag" data-term="건강">건강</a>
                    </div>
                </div>
            `;
            container.appendChild(noResults);
            
            // 추천 검색어 클릭 이벤트 추가
            setTimeout(() => {
                const suggestionTags = document.querySelectorAll('.suggestion-tag');
                suggestionTags.forEach(tag => {
                    tag.addEventListener('click', function(e) {
                        e.preventDefault();
                        const term = this.getAttribute('data-term');
                        searchInput.value = term;
                        showLoadingIndicator();
                        performSearch();
                    });
                });
            }, 100);
        } else {
            // 검색 결과 리스트 생성
            const resultsList = document.createElement('div');
            resultsList.className = 'results-list';

            results.forEach(cert => {
                const resultCard = document.createElement('div');
                resultCard.className = 'result-card';
                
                // 검색어 강조 함수
                function highlightText(text, term) {
                    if (!text) return '';
                    const regex = new RegExp(`(${term})`, 'gi');
                    return text.replace(regex, '<span class="highlight">$1</span>');
                }
                
                let categoryText = cert.category;
                let nameText = cert.name;
                let issuerText = cert.issuer || '';
                let descriptionText = cert.description;
                
                // 검색어 강조
                if (searchTerm) {
                    categoryText = highlightText(categoryText, searchTerm);
                    nameText = highlightText(nameText, searchTerm);
                    issuerText = highlightText(issuerText, searchTerm);
                    descriptionText = highlightText(descriptionText, searchTerm);
                }
                
                resultCard.innerHTML = `
                    <h4>${nameText}</h4>
                    <div class="result-details">
                        <p><strong>카테고리:</strong> ${categoryText}</p>
                        <p><strong>발급기관:</strong> ${issuerText}</p>
                        <p><strong>설명:</strong> ${descriptionText}</p>
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
        
        // 연관 검색어 추천 (실시간 검색 지원)
        if (results.length > 0) {
            const relatedTerms = document.createElement('div');
            relatedTerms.className = 'related-terms';
            relatedTerms.innerHTML = `
                <h4>연관 검색어</h4>
                <div class="related-tags">
                    ${getRelatedTerms(searchTerm, results).map(term => 
                        `<a href="#" class="related-tag" data-term="${term}">${term}</a>`
                    ).join('')}
                </div>
            `;
            container.appendChild(relatedTerms);
            
            // 연관 검색어 클릭 이벤트
            setTimeout(() => {
                const relatedTags = document.querySelectorAll('.related-tag');
                relatedTags.forEach(tag => {
                    tag.addEventListener('click', function(e) {
                        e.preventDefault();
                        const term = this.getAttribute('data-term');
                        searchInput.value = term;
                        showLoadingIndicator();
                        performSearch();
                    });
                });
            }, 100);
        }
    }
    
    // 연관 검색어 생성 함수
    function getRelatedTerms(searchTerm, results) {
        // 카테고리 기반 연관 검색어 생성
        const categories = [...new Set(results.map(item => item.category))];
        // 발급기관 기반 연관 검색어 생성
        const issuers = [...new Set(results.map(item => item.issuer).filter(Boolean))];
        
        // 결합 및 중복 제거
        let relatedTerms = [...categories, ...issuers];
        // 현재 검색어와 동일한 단어는 제외
        relatedTerms = relatedTerms.filter(term => term.toLowerCase() !== searchTerm.toLowerCase());
        
        // 최대 5개까지만 반환
        return relatedTerms.slice(0, 5);
    }

    // 카테고리 카드 클릭 이벤트 - 해당 카테고리의 증명서 목록 표시
    categoryCards.forEach(card => {
        const categoryTitle = card.querySelector('h4').textContent;
        card.addEventListener('click', function() {
            // 카테고리에 해당하는 증명서만 필터링
            const filteredResults = certificateData.filter(cert => cert.category === categoryTitle);
            searchInput.value = categoryTitle; // 검색창에 카테고리 이름 표시
            showLoadingIndicator();
            // 검색 히스토리에 저장
            saveToHistory(categoryTitle);
            displaySearchResults(filteredResults, categoryTitle);
            // 검색 후 히스토리 업데이트
            updateAfterSearch();
        });
        
        // 카테고리 내 각 증명서 링크 클릭 이벤트
        const certLinks = card.querySelectorAll('ul li a');
        certLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
                const certName = this.textContent;
                // 해당 이름의 증명서만 필터링
                const filteredResult = certificateData.filter(cert => cert.name === certName);
                searchInput.value = certName; // 검색창에 증명서 이름 표시
                showLoadingIndicator();
                // 검색 히스토리에 저장
                saveToHistory(certName);
                displaySearchResults(filteredResult, certName);
                // 검색 후 히스토리 업데이트
                updateAfterSearch();
            });
        });
    });
    
    // 카테고리 카드 키보드 접근성 개선
    categoryCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            // 엔터 또는 스페이스 키 입력 시 클릭 이벤트 트리거
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // 검색 히스토리 저장 및 관리
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    // 검색 히스토리 저장 함수
    function saveToHistory(term) {
        // 중복 검색어 제거
        searchHistory = searchHistory.filter(item => item.toLowerCase() !== term.toLowerCase());
        // 새 검색어 추가
        searchHistory.unshift(term);
        // 최대 10개까지만 저장
        if (searchHistory.length > 10) {
            searchHistory.pop();
        }
        // 로컬 스토리지에 저장
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
    
    // 검색 히스토리 표시 함수
    function showSearchHistory() {
        if (searchHistory.length === 0) return;
        
        const historyContainer = document.createElement('div');
        historyContainer.className = 'search-history';
        historyContainer.innerHTML = `
            <h4>최근 검색어</h4>
            <ul class="history-list">
                ${searchHistory.map(term => 
                    `<li>
                        <a href="#" class="history-item" data-term="${term}">${term}</a>
                        <button class="remove-history" data-term="${term}" aria-label="검색어 삭제">×</button>
                    </li>`
                ).join('')}
            </ul>
            <button class="clear-history">검색 기록 삭제</button>
        `;
        
        // 히어로 섹션 아래에 추가
        const heroSection = document.querySelector('.hero');
        if (document.querySelector('.search-history')) {
            document.querySelector('.search-history').remove();
        }
        heroSection.after(historyContainer);
        
        // 검색 히스토리 항목 클릭 이벤트
        const historyItems = document.querySelectorAll('.history-item');
        historyItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const term = this.getAttribute('data-term');
                searchInput.value = term;
                showLoadingIndicator();
                performSearch();
            });
        });
        
        // 검색어 삭제 버튼 이벤트
        const removeButtons = document.querySelectorAll('.remove-history');
        removeButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const term = this.getAttribute('data-term');
                // 검색 히스토리에서 해당 항목 제거
                searchHistory = searchHistory.filter(item => item !== term);
                localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
                // 히스토리 UI 업데이트
                this.parentElement.remove();
                if (searchHistory.length === 0) {
                    document.querySelector('.search-history').remove();
                }
            });
        });
        
        // 검색 기록 전체 삭제 버튼 이벤트
        const clearButton = document.querySelector('.clear-history');
        clearButton.addEventListener('click', function() {
            searchHistory = [];
            localStorage.removeItem('searchHistory');
            document.querySelector('.search-history').remove();
        });
    }
    
    // 페이지 로드 시 검색 히스토리 표시
    showSearchHistory();

    // 피드백 폼이 있는지 확인
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        initializeFeedbackPage();
    }
    
    // 기존 코드에 방해되지 않도록 여기서 실행 종료
    if (!feedbackForm) return;
    
    // 피드백 폼 제출 이벤트 처리
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitFeedback();
    });
});

// 피드백 페이지 초기화
function initializeFeedbackPage() {
    // 샘플 데이터와 로컬 스토리지의 데이터를 합쳐 표시
    displayFeedbacks();
}

// 피드백 제출 처리
function submitFeedback() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const feedbackInput = document.getElementById('feedback');
    const categorySelect = document.getElementById('category');
    const agreeCheckbox = document.getElementById('agree');
    
    // 입력값 검증
    if (!nameInput.value || !emailInput.value || !feedbackInput.value || !agreeCheckbox.checked) {
        return; // HTML의 required 속성이 처리
    }
    
    // 새로운 피드백 객체 생성
    const newFeedback = {
        id: Date.now(), // 고유 ID 생성
        name: nameInput.value,
        email: emailInput.value,
        feedback: feedbackInput.value,
        category: categorySelect.value,
        date: formatDate(new Date())
    };
    
    // 로컬 스토리지에 피드백 저장
    saveFeedback(newFeedback);
    
    // 목록 새로고침
    displayFeedbacks();
    
    // 폼 초기화
    feedbackForm.reset();
    
    // 성공 메시지 표시
    alert('피드백이 성공적으로 제출되었습니다. 감사합니다!');
}

// 로컬 스토리지에 피드백 저장
function saveFeedback(feedback) {
    let userFeedbacks = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    
    if (userFeedbacks) {
        userFeedbacks = JSON.parse(userFeedbacks);
        userFeedbacks.unshift(feedback); // 새 피드백을 배열 맨 앞에 추가
    } else {
        userFeedbacks = [feedback];
    }
    
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(userFeedbacks));
}

// 피드백 목록 표시
function displayFeedbacks() {
    const feedbackList = document.getElementById('feedbackList');
    if (!feedbackList) return;
    
    // 로컬 스토리지에서 사용자 피드백 가져오기
    let userFeedbacks = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    userFeedbacks = userFeedbacks ? JSON.parse(userFeedbacks) : [];
    
    // 모든 피드백 데이터 합치기 (실제로는 API에서 가져올 것)
    const allFeedbacks = [...userFeedbacks, ...sampleFeedbacks];
    
    // 날짜 기준으로 최신순 정렬
    allFeedbacks.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 피드백 목록 HTML 생성
    let feedbackHTML = '';
    
    if (allFeedbacks.length === 0) {
        feedbackHTML = '<p class="no-feedbacks">아직 등록된 피드백이 없습니다.</p>';
    } else {
        allFeedbacks.forEach(item => {
            feedbackHTML += `
                <div class="feedback-item">
                    <div class="feedback-item-header">
                        <span class="feedback-name">${item.name}</span>
                        <span class="feedback-date">${item.date}</span>
                    </div>
                    <span class="feedback-category ${item.category}">${getCategoryName(item.category)}</span>
                    <p class="feedback-text">${item.feedback}</p>
                </div>
            `;
        });
    }
    
    // HTML 삽입
    feedbackList.innerHTML = feedbackHTML;
}

// 카테고리 코드를 한글 이름으로 변환
function getCategoryName(category) {
    const categoryMap = {
        'suggestion': '개선 제안',
        'error': '오류 신고',
        'compliment': '칭찬',
        'question': '문의사항',
        'other': '기타'
    };
    
    return categoryMap[category] || '기타';
}

// 날짜 포맷팅 (YYYY-MM-DD)
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}
