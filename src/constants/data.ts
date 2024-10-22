export type RecruitDateType = {
  startDate: Date
  endDate: Date
}

export const RecruitDate: RecruitDateType = {
  startDate: new Date('2024-10-28T00:00:00'),
  endDate: new Date('2024-11-03T23:59:59'),
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

export const RecruitStatus: Record<RecruitStatusEnum, RecruitStatusType> = {
  BeforeRecruiting: {
    title: '16기 모집 시작까지',
    buttonText: '알림 받기',
    link: 'https://forms.gle/LWfsozJbsrhkpyCr5',
  },
  Recruiting: {
    title: '16기 모집 마감까지',
    buttonText: '지원하기',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSckYFpx4NLpFeme_L30iOb3eM9ll_uudMw2KRzdwLSqsDWhCA/viewform',
  },
  AfterRecruiting: {
    title: '16기 지원이 마감되었어요!',
    buttonText: '17기 사전예약 하기',
    link: 'https://forms.gle/8kCz1TVyjxQtEhLV6',
  },
}
