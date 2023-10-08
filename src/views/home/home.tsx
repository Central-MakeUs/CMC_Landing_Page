import { StaticImage } from 'gatsby-plugin-image'

import { SectionHeader } from './components'
import * as css from './home.module.scss'

const HomePage = () => {
  return (
    <main>
      <section className={css.intro}>
        <SectionHeader
          title="introduction"
          description={'우리만의 룰을 세워 세상을 바꾸는\n우리는 CMC ‘챌린저’입니다'}
        />
        <div className={css.grid_container}>
          <div>
            <span>현재까지 CMC의 팀</span>
            <span>80+</span>
          </div>
          <div>
            <span>
              지금까지 런칭된 앱 수<br />
              (Android, iOS 스토어)
            </span>
            <span>130+</span>
          </div>
          <div>
            <span>CMC앱 전체 다운로드 수</span>
            <span>5000+</span>
          </div>
          <div>
            <span>CMC 챌린저의 외주연계 횟수</span>
            <span>100+</span>
          </div>
        </div>
      </section>
      <section className={css.identity}>
        <SectionHeader title="cmc identity" description={'CMC는 도전을 즐기며,\n새로운 도전에 맞서는 사람들입니다'} />
        <div className={css.people}>
          <figure>
            <StaticImage
              src="./images/challenger.png"
              alt="너디너리 데모데이 간판"
              objectFit="fill"
              className={css.image}
            />
            <div className={css.overlay} />
            <figcaption>도전자</figcaption>
            <p>
              우리는 도전자입니다. 우리는 모두 도전을
              <br />
              즐기며, 새로운 도전에 맞서는 사람들입니다.
              <br />
              우리는 끊임없이 도전하는 자세를 가지고 있으며,
              <br />
              이를 통해 성장하고 혁신을 이루어냅니다.
              <br />
              우리는 자신을 &quot;챌린저&quot;라 하며, 어려움을
              <br />
              극복하고 목표를 달성하는 역량을 갖추고 있습니다.
            </p>
          </figure>
          <figure>
            <StaticImage
              src="./images/pioneer.png"
              alt="주먹을 쥐고 앉아서 정면을 바라보는 사람들"
              objectFit="fill"
              className={css.image}
            />
            <div className={css.overlay} />
            <figcaption>개척가</figcaption>
            <p>
              우리는 기존의 틀에 얽매이지 않고,
              <br />
              새로운 영역을 개척하는 사람들입니다.
              <br />
              우리는 혁신적인 아이디어와 독창적인
              <br />
              접근으로 새로운 틀을 만들어내며,
              <br />
              미래를 모색하고 이끌어갑니다.
            </p>
          </figure>
          <figure>
            <StaticImage
              src="./images/expert.png"
              alt="노트북을 하고있는 사람들"
              objectFit="fill"
              className={css.image}
            />
            <div className={css.overlay} />
            <figcaption>전문가</figcaption>
            <p>
              전문가들로 이루어진 CMC의 팀은 각자의
              <br />
              전문 분야에 집중하여 협업합니다.
              <br />
              우리 프로젝트에서 나의 역할이 없다면,
              <br />
              팀은 앞으로 나아갈 수 없습니다.
            </p>
          </figure>
        </div>
      </section>
    </main>
  )
}

export default HomePage

export const Head = () => <title>CMC</title>
