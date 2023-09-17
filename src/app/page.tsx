import Image from 'next/image'

import css from './page.module.scss'
import react from './react.jpeg'

const Home = () => {
  return (
    <>
      <h1 className={css.test}>CMC 홈페이지 환경설정</h1>
      <Image src={react} alt="CMC" />
    </>
  )
}

export default Home
