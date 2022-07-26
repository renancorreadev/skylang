import { Routes, Route } from 'react-router-dom'
import { Home, Listen, Modules, About } from '../pages'
import { DefaultLayout } from '@layouts'
import Game from '@pages/Game'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/modules/" element={<Modules />} />
        <Route path="/modules/:slug" element={<Modules />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
      </Route>
    </Routes>
  )
}
