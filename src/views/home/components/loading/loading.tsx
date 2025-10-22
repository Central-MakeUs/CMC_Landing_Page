import * as css from './loading.module.scss'

export const Loading = () => {
  return (
    <svg viewBox="25 25 50 50" className={css.spinner}>
      <circle r="20" cy="50" cx="50" />
    </svg>
  )
}
