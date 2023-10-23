import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image'

import * as css from './card.module.scss'

type Link = {
  android: string
  ios: string
}

type Props = {
  name: string
  year: string
  description: string
  link: Link
  image: IGatsbyImageData
}

export const Card = ({ name, description, year, image, link }: Props) => {
  return (
    <li className={css.card}>
      <figure>
        <GatsbyImage image={image} alt={name} className={css.image} />
        <figcaption>
          <h2 className={css.name}>{name}</h2>
          <span className={css.year}>{year}기</span>
          <p className={css.description}>{description}</p>
          <div className={css.link_group}>
            {link.ios ? <a href={link.ios}>iOS</a> : <span>iOS</span>}
            <span className={css.divider} />
            {link.android ? <a href={link.android}>AOS</a> : <span>AOS</span>}
          </div>
        </figcaption>
      </figure>
    </li>
  )
}
