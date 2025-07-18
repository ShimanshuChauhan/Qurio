import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import PageNotFound from "./components/PageNotFound"
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<div>About</div>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
