import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import PageNotFound from "./components/PageNotFound"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import { Toaster } from "./components/ui/sonner"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<div>About</div>} />
          <Route path="quiz/:quizId" element={<Quiz />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes >
      <Toaster position="top-center" visibleToasts={3} />
    </>
  )
}

export default App
