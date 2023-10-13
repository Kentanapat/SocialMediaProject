import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./Layout";
import PageSearch from "./PageSearch";
import Noti from "./Noti";
import ProfilePage from "./ProfilePage";


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
                <Route path="/profile" element={<ProfilePage/>}>
                <Route index element={<div><ProfilePage/></div>}/>
                <Route path="posts" element={<ProfilePage/>}/>
                </Route>
                <Route path="/message" element={<pageMessage/>}>
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

    