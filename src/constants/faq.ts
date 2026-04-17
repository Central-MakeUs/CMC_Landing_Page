export type FaqCategoryId = 'documents' | 'interview' | 'activity' | 'other'

export const FAQ_CATEGORIES: readonly { id: FaqCategoryId; label: string }[] = [
  { id: 'documents', label: '서류' },
  { id: 'interview', label: '면접' },
  { id: 'activity', label: '활동' },
  { id: 'other', label: '기타' },
] as const

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const FAQ_BY_CATEGORY: Record<FaqCategoryId, readonly FaqItem[]> = {
  documents: [
    {
      id: 'doc-eligibility',
      question: 'CMC 지원 자격은 어떻게 되나요?',
      answer:
        '현직자 / 대학생 관계없이 직군별 역량에 충족하시는 분 혹은 지원하신 파트에 대한 실력과 열정이 있으신 분이라면 누구나 지원 가능합니다.',
    },
    {
      id: 'doc-duplicate',
      question: '직군 간 중복 지원이 가능한가요?',
      answer: '중복 지원은 불가능하며 한 가지의 직군 지원만 허용하고 있습니다.',
    },
    {
      id: 'doc-result',
      question: '지원 결과는 언제 어디서 확인이 가능한가요?',
      answer: '서류 및 최종 결과 모두 문자를 통해 개별적으로 알려드릴 예정입니다.',
    },
  ],
  interview: [
    {
      id: 'int-how',
      question: '인터뷰는 어떻게 진행되나요?',
      answer:
        '모든 파트의 인터뷰는 화상 인터뷰로 진행됩니다. 자세한 공지사항은 서류 합격자에 한해 개별적으로 안내드릴 예정입니다.',
    },
    {
      id: 'int-final',
      question: '최종 합격 발표는 언제인가요?',
      answer: '최종 합격 발표의 경우 면접 이후 일주일 내로 개별 문자 및 공식 인스타그램을 통해 발표됩니다.',
    },
    {
      id: 'int-contact',
      question: '불합격자에게도 연락이 따로 오나요?',
      answer: '합격/불합격 여부와 상관없이 모든 지원자분들께 연락드릴 예정입니다.',
    },
  ],
  activity: [
    {
      id: 'act-ot',
      question: 'OT 참여는 필수인가요? OT 일정과 장소는 어떻게 되나요?',
      answer:
        'OT는 CMC의 첫 정기세션으로 필수 세션입니다. 향후 일정과 파트별 네트워킹이 이루어지는 행사로 불참 시 불이익이 있을 수 있습니다.',
    },
    {
      id: 'act-hackathon',
      question: '해커톤은 필수 참여인가요?',
      answer:
        '다른 챌린저분들과의 화합이나 동아리 적응을 위해 해커톤 또한 OT와 마찬가지로 필수 참석을 요구하고 있습니다.',
    },
    {
      id: 'act-session',
      question: '매주 진행되는 세션 시간 및 장소가 궁금해요.',
      answer:
        '매주 토요일 오후 2~5시 온/오프라인 병행을 통해 정기세션이 진행될 예정이며, 세션 해당 주차에 공지를 통해 더욱 자세한 사항을 전달드릴 예정입니다.',
    },
  ],
  other: [
    {
      id: 'other-fee',
      question: '회비는 어떻게 되나요?',
      answer:
        '동아리 회비는 8만원입니다. 정기 세션 장소 대관과 데모데이 준비, 네트워킹 지원 비용 등의 동아리 운영으로 사용 됩니다. 별도 요청하신 분들에게 사용 내역을 투명하게 공개하고 있습니다.',
    },
  ],
}
