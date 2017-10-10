import Home from './Pages/Index'
import Gallery from './Pages/GalleryOriginalArtwork'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import ArtistStatement from './Pages/ArtistStatement'

export default [
  { path: '/', component: Home },
  { path: '/ArtistStatement', component: ArtistStatement },
  { path: '/Gallery', component: Gallery },
  { path: '/Shop', component: Shop },
  { path: '/Contact', component: Contact }
]
