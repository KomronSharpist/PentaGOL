import { Home } from "./pages/home/home";
import AdminNews from "./pages/admin_news/admin_news"
import AdminTeams from "./pages/admin_teams/admin_teams"
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
        <Route path="/admin/news" element={<AdminNews/>}/>
        <Route path="/admin/teams" element={<AdminTeams/>}/>
        <Route path="/admin/matches" element={<Admin/>}/>
        <Route path="/admin/ligas" element={<Admin/>}/>
        <Route path="*" element={<h1>page yo'q</h1>}/>
      </Routes>
      <Footer></Footer>

    </>
  );
}

export default App;