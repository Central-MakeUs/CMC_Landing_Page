import clsx from 'clsx'
import type { HeadProps, PageProps } from 'gatsby'
import { useMemo, useState } from 'react'

import { FloatingButton, Seo } from '@/components'
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

  return (
    <main className={css.main}>
      <div className={css.background_header}>
        <h2>CMC PROJECT</h2>
        <div className={css.background_container}>
          <div className={css.background} />
        </div>
      </div>
      <nav className={css.nav}>
        <ul>
          {tags.map((menu) => (
            <li key={menu}>
              <button
                type="button"
                onClick={() => setCurrentTag(menu)}
                className={clsx({ [css.active]: currentTag === menu })}
              >
                {menu === 'All' ? '전체' : menu}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <ul className={css.grid_container}>
        {refinedProjects.map(({ id, name, description, year, logo, link }) => (
          <Card
            key={id}
            name={name}
            year={year}
            image={getRefinedImage(logo?.childImageSharp?.gatsbyImageData)}
            description={description}
            link={link}
          />
        ))}
      </ul>
      <FloatingButton />
    </main>
  )
}

export default ProjectPage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
