import { StaticImage } from 'gatsby-plugin-image'
import { CSSProperties } from 'react'

interface LightProps {
  size: string
  top: string
  left: string
}

const Light = ({ size, top, left }: LightProps) => {
  const style: CSSProperties = {
    width: size,
    aspectRatio: '1',
    position: 'absolute',
    top,
    left,
  }

  return <StaticImage src="../../images/light.png" alt="" style={style} />
}

export const LightEffect = () => {
  return (
    <>
      <Light size="8%" top="-12%" left="-4%" />
      <Light size="6%" top="2%" left="-10%" />
      <Light size="6%" top="56%" left="-8%" />
      <Light size="6%" top="94%" left="-6%" />

      <Light size="8%" top="-12%" left="90%" />
      <Light size="8%" top="-2%" left="102%" />
      <Light size="6%" top="28%" left="101%" />
      <Light size="5%" top="92%" left="108%" />
      <Light size="8%" top="96%" left="101%" />
    </>
  )
}
