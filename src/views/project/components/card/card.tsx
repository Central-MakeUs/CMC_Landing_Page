import { GatsbyImage, type IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'

import * as css from './card.module.scss'

type Link = {
  android: string
  ios: string
}

type Props = {
  name: string
  year: string
  rank: string
  description: string
  link: Link
  image: IGatsbyImageData
}

export const Card = ({ name, description, year, rank, image, link }: Props) => {
  return (
    <li className={css.card}>
      <figure>
        <GatsbyImage image={image} alt={name} className={css.image} />
        <figcaption>
          <div className={css.card_info}>
            <div className={css.card_info_text}>
              <h2 className={css.name}>{name}</h2>
              <span className={css.year}>{year}기</span>
            </div>
            {rank === '1' && (
              <StaticImage src="../../images/medal-gold.png" alt="대상" className={css.card_info_icon} />
            )}
            {rank === '2' && (
              <StaticImage src="../../images/medal-silver.png" alt="최우수상" className={css.card_info_icon} />
            )}
            {rank === '3' && (
              <StaticImage src="../../images/medal-bronze.png" alt="우수상" className={css.card_info_icon} />
            )}
          </div>

          <p className={css.description}>{description}</p>

          <div className={css.link_group}>
            {link.ios && (
              <a href={link.ios} target="_blank" rel="noreferrer">
                <StaticImage src="../../images/app-store.png" alt="App store 바로가기" className={css.link_img} />
                App Store
              </a>
            )}
            {link.android && (
              <a href={link.android} target="_blank" rel="noreferrer">
                <StaticImage src="../../images/play-store.png" alt="Play store 바로가기" className={css.link_img} />
                Play Store
              </a>
            )}
          </div>
        </figcaption>
      </figure>
    </li>
  )
}
