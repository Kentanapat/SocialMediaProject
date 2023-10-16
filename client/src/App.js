import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./Layout";
import PageSearch from "./components/pagesearch/PageSearch";
import Noti from "./components/noti/Noti";
import ProfilePage from "./components/profilepage/ProfilePage";
import PageSetting from "./components/pagesetting/PageSetting";
import PageFav from "./components/pagefav/PageFav";


function App() {
  return (
   <div className="app">
           <BrowserRouter>
               <Routes>
                <Route path="/" element={<Layout/>}>
                </Route>
                <Route path="/search" element={<PageSearch/>}>
                <Route index element={<div><PageSearch/></div>}/>
                <Route path="posts" element={<PageSearch/>}/>
                </Route>
                <Route path="/noti" element={<Noti/>}>
                  <Route index element={<div><Noti/></div>}/>
                  <Route path="posts" element={<Noti/>}/>
                </Route>
                <Route path="/fav" element={<PageFav/>}>
                <Route index element={<div><PageFav/></div>}/>
                <Route path="posts" element={<PageFav/>}/>
                </Route>
                <Route path="/profile" element={<ProfilePage/>}>
                <Route index element={<div><ProfilePage/></div>}/>
                <Route path="posts" element={<ProfilePage/>}/>
                </Route>
                <Route path="/message" element={<pageMessage/>}>
                </Route>
                <Route path="/setting" element={<PageSetting/>}>
                <Route index element={<div><PageSetting/></div>}/>
                <Route path="posts" element={<PageSetting/>}/>
                </Route>
               </Routes>
     </BrowserRouter>
          </div> 

  );
}
export default App;

  // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout/>}>
    //       <Route index element={<div>Home </div>}/>
    //       <Route path="posts" element={<Post/>}/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    