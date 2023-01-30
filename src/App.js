import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className='fixed h-screen w-screen bg-gradient-to-b from-[#BAABF4] to-[#417ED7]/[50]'>
      <div className='mx-5 xl:mx-28'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/movies'
            element={<CategoryPage categoryType='movie' />}
          />
          <Route path='/shows' element={<CategoryPage categoryType='tv' />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
