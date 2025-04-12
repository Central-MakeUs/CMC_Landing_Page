export type RecruitDateType = {
  startDate: Date
  endDate: Date
}

export const RecruitDate: RecruitDateType = {
  startDate: new Date('2025-04-19T00:00:00'),
  endDate: new Date('2025-04-25T22:59:59'),
}

export enum RecruitStatusEnum {
  BEFORE_RECRUITING = 'BeforeRecruiting',
  RECRUITING = 'Recruiting',
  AFTER_RECRUITING = 'AfterRecruiting',
}

export type RecruitStatusType = {
  title: string
  buttonText: string
  link: string
}

export type RecruitMentType = {
  title: string
  description: string
  buttonText: string
}

// apply button
export const RecruitStatus: Record<RecruitStatusEnum, RecruitStatusType> = {
  BeforeRecruiting: {
    title: '17기 모집 시작까지',
    buttonText: '알림 받기',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfMSo89WwHvfCNL3eTZe0x7qZu_F8wacW0yDpyxsBOkQzu8rg/viewform',
  },
  Recruiting: {
    title: '17기 모집 마감까지',
    buttonText: '지원하기',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeCU77v4eBRO64n0-PjtB04CPXaTH-p-_9Dr9KaQLPYiUTs6A/viewform',
  },
  AfterRecruiting: {
    title: '17기 지원이 마감되었어요!',
    buttonText: '18기 사전예약 하기',
    link: 'https://forms.gle/hCUqiYbDUkLbt8Bx8',
  },
}

// 메인화면 card
export const RecruitMent: Record<RecruitStatusEnum, RecruitMentType> = {
  BeforeRecruiting: {
    title: '모집이\n곧 시작돼요!',
    description: '아직 모집기간이 아니에요!\n알림 설정을 해주시면\n17기 모집 알림을 전달드릴게요!',
    buttonText: '17기 모집알림 신청하기',
  },
  Recruiting: {
    title: '챌린저를\n찾습니다!',
    description: 'CMC 17기를 모집중이에요.\nCMC의 여정에 합류하고 싶은 분들은\n지원을 서둘러주세요!',
    buttonText: '17기에 지원하기',
  },
  AfterRecruiting: {
    title: '다음 여정에\n참여해주세요!',
    description: '17기 모집이 끝났어요.\nCMC의 다음여정에 함께해요!\n18기 모집알림을 보내드릴게요.',
    buttonText: '18기 모집알림 신청하기',
  },
}
