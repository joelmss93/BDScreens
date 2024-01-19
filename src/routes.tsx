import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { MovieInfo } from './pages/Movie'
import { Layout } from './Layout'
import { Lists } from './pages/Lists'

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieInfo />} />
        <Route path="/movies/list/:prefix/:sortBy" element={<Lists />} />
        <Route path="/series/list/:prefix/:sortBy" element={<Lists />} />
      </Routes>
    </Layout>
  )
}
