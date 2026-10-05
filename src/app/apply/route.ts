import { NextResponse } from 'next/server'

import { getRecruitCta } from '@/utils/recruit'

export const dynamic = 'force-dynamic'

export function GET() {
  return NextResponse.redirect(getRecruitCta(Date.now()).url)
}
