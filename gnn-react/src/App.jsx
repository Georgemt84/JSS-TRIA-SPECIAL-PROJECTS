import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Business from './pages/Business'
import Health from './pages/Health'
import Sports from './pages/Sports'
import Opinion from './pages/Opinion'
import Lifestyle from './pages/Lifestyle'
import Continents from './pages/Continents'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="business" element={<Business />} />
        <Route path="health" element={<Health />} />
        <Route path="sports" element={<Sports />} />
        <Route path="opinion" element={<Opinion />} />
        <Route path="lifestyle" element={<Lifestyle />} />
        <Route path="continents" element={<Continents />} />
      </Route>
    </Routes>
  )
}
