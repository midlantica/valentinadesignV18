import Home from './Pages/Index'
import ArtistStatement from './Pages/ArtistStatement'
import Portfolio from './Pages/Portfolio'
import Shop from './Pages/Shop'
import Licensing from './Pages/Licensing'
import Wholesale from './Pages/Wholesale'
import Contact from './Pages/Contact'
import EmailConfirm from './Pages/EmailConfirm'
import NotFound from './Pages/NotFound'

// import Statement from './components/Statement'
// import HomeContent from './components/HomeContent'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
    // children: [
    //   {
    //     path: '',
    //     component: Statement
    //   },
    //   {
    //     path: '',
    //     component: HomeContent
    //   }
    // ]
  },
  {
    path: '/NotFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/NotFound'
  },
  {
    path: '/ArtistStatement',
    name: 'ArtistStatement',
    component: ArtistStatement
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Licensing',
    name: 'Licensing',
    component: Licensing
  },
  {
    path: '/Wholesale',
    name: 'Wholesale',
    component: Wholesale
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/EmailConfirm',
    name: 'EmailConfirm',
    component: EmailConfirm
  },
  {
    path: '/404',
    redirect: '/NotFound'
  }

]
