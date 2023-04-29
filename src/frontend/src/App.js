import { Home } from "./pages/home/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Article } from "./pages/article/article";
import { Admin } from "./pages/admin/admin";
import { Route , Routes } from "react-router-dom";

import "./app.scss"
function App() {
  
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/article" element={<Article/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="*" element={<h1>page yo'q</h1>}/>
      </Routes>
      <Footer></Footer>

    </>
  );
}

export default App;
//* Test comment 2