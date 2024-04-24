import clsx from 'clsx'
import type { HeadProps, PageProps } from 'gatsby'
import { useCallback, useMemo, useState } from 'react'

import { ScrollRevealContainer, Section, Seo } from '@/components'
import { Main } from '@/layouts'
import { getRefinedImage } from '@/utils'

import { Card } from './components'
import * as css from './project.module.scss'

const ProjectPage = ({
  data: {
    allAppJson: { nodes: apps },
  },
}: PageProps<Queries.ProjectQuery>) => {
  const allYear = useMemo(() => new Set(apps.map((node) => node.year)), [apps])
  const tags = ['All', ...allYear]
  const [currentTag, setCurrentTag] = useState('All')
  const refinedProjects = useMemo(
    () => (currentTag === 'All' ? apps : apps.filter((node) => node.year === currentTag)),
    [currentTag, apps],
  )
  const getProjectsLengthByYear = useCallback((year: string) => apps.filter((app) => app.year === year).length, [apps])

  return (
    <Main className={css.main}>
      <ScrollRevealContainer>
        <Section>
          <Section.Head title="Challenger’s Project" description="챌린저들의 다양한 프로젝트를 확인해보세요" />

          <nav className={css.nav}>
            <ul>
              {tags.map((menu) => (
                <li key={menu}>
                  <button
                    type="button"
                    onClick={() => setCurrentTag(menu)}
                    className={clsx({ [css.active]: currentTag === menu })}
                  >
                    {menu === 'All' ? `전체(${apps.length}개)` : `${menu}기(${getProjectsLengthByYear(menu)}개)`}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <ul className={css.grid_container}>
            {refinedProjects.map(({ id, name, description, year, logo, link, rank }) => (
              <Card
                key={id}
                name={name}
                year={year}
                image={getRefinedImage(logo?.childImageSharp?.gatsbyImageData)}
                description={description}
                link={link}
                rank={rank}
              />
            ))}
          </ul>
        </Section>
      </ScrollRevealContainer>
    </Main>
  )
}

export default ProjectPage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
