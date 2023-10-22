import Post from "../../components/post/Post";
import PostBox from "../../components/postbox/Postbox";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import SidebarOption from "../../components/sidemenu/SidebarOption";

export default function Home(){
    return(
        <>
       <div className="homeConst">
        <Sidemenu/>
        <SidebarOption/>
        <Post/>
        <PostBox/>
       </div>
        </>
    );
}