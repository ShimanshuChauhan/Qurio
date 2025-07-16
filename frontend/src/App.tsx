import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import PageNotFound from "./components/PageNotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<div className="text-white">Home</div>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
