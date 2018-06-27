import Home from './Pages/Index'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import ArtistStatement from './Pages/ArtistStatement'

import GalleryDigitalArtwork from './Pages/GalleryDigitalArtwork'
import GalleryOriginalArtwork from './Pages/GalleryOriginalArtwork'
import GalleryPatterns from './Pages/GalleryPatterns'

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
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/GalleryDigitalArtwork',
    name: 'GalleryDigitalArtwork',
    component: GalleryDigitalArtwork
  },
  {
    path: '/GalleryOriginalArtwork',
    name: 'GalleryOriginalArtwork',
    component: GalleryOriginalArtwork
  },
  {
    path: '/GalleryPatterns',
    name: 'GalleryPatterns',
    component: GalleryPatterns
  },
  {
    path: '/EmailConfirm',
    name: 'EmailConfirm',
    component: EmailConfirm
  }
]
