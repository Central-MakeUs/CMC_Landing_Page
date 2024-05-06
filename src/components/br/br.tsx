import clsx from 'clsx'

import * as css from './br.module.scss'

interface Props {
  mobile?: boolean
  desktop?: boolean
}

/**
 * 스크린 사이즈별 줄바꿈 컴포넌트
 *
 * @component
 * @param {boolean} mobile 모바일 사이즈에서 줄바꿈 여부 (*기본값: false)
 * @param {boolean} desktop 데스크탑 사이즈에서 줄바꿈 여부 (*기본값: false)
 *
 * @example
 * <Br mobile desktop /> // 모바일, 데스크탑 모두 줄 바꿈
 * <Br mobile /> // 모바일에서만 줄바꿈
 * <Br desktop /> // 데스크탑에서만 줄바꿈
 */
export const Br = ({ mobile = false, desktop = false }: Props) => {
  return <br className={clsx({ [css.br_visible_mobile]: mobile, [css.br_visible_desktop]: desktop })} />
}
