import Image from 'next/image'

import react from './react.jpeg'
import css from './page.module.scss'

const Home = () => {
  return (
    <>
      <h1 className={css.test}>CMC 홈페이지 환경설정</h1>
      <Image src={react} alt="CMC" />
    </>
  )
}

export default Home
