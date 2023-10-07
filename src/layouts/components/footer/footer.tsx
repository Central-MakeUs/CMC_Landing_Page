import * as css from './footer.module.scss'
import Instagram from './images/instagram.svg'
import KakaoTalk from './images/kakaotalk.svg'

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.info}>
        <span className={css.name}>Central Makeus Challenge (CMC)</span>
        <span className={css.copyright}>Copyrightⓒ 2023 All rights reserved by MakeUs Challenge</span>
      </div>
      <div className={css.contact}>
        {/* TODO: 제대로 된 링크 넣기 */}
        <a href="/">
          <Instagram className={css.icon} />
        </a>
        <a href="/">
          <KakaoTalk className={css.icon} />
        </a>
      </div>
    </footer>
  )
}
