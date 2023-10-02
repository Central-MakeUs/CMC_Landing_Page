import '@/styles/index.scss'

import type { WrapPageElementBrowserArgs } from 'gatsby'

import { Layout } from './src/layouts'

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => <Layout {...props}>{element}</Layout>
