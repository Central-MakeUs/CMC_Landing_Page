import * as css from './section-header.module.scss'

type Props = {
  title: string
  description: string
}

export const SectionHeader = ({ title, description }: Props) => {
  return (
    <>
      <h2 className={css.heading}>{title}</h2>
      <p className={css.description}>{description}</p>
      {/* <div className={css.background_container}> */}
      {/*  <div className={css.background} /> */}
      {/* </div> */}
    </>
  )
}
