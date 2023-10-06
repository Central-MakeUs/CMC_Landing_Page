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
        <Instagram />
        <KakaoTalk />
      </div>
    </footer>
  )
}
