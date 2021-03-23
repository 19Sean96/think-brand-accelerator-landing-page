import '../styles/styles.scss'
import Router from 'next/router'
import React, { useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChartBar, faCaretDown, faArrowRight, faArrowLeft, faTh, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faChartBar, faCaretDown, faArrowRight, faArrowLeft, faTh, faTimes)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
