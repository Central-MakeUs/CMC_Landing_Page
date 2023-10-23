import type { IGatsbyImageData } from 'gatsby-plugin-image'

export const getRefinedImage = (image: IGatsbyImageData | undefined) => {
  if (image === undefined) throw new Error('이미지가 존재하지 않습니다.')

  return image
}
