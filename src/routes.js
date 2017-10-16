import Home from './Pages/Index'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import ArtistStatement from './Pages/ArtistStatement'
import GalleryDigitalArtwork from './Pages/GalleryDigitalArtwork'
import GalleryOriginalArtwork from './Pages/GalleryOriginalArtwork'
import GalleryPatterns from './Pages/GalleryPatterns'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]
