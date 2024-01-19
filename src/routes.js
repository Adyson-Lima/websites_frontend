import { BrowserRouter, Routes, Route } from "react-router-dom";
import Websites from './pages/Websites';
import NewUpdate from './pages/NewUpdate';

export default function WebsitesRouter(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Websites/>} />
        <Route path="/newupdate/:website_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );

}