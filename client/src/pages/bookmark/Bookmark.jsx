import PageFav from "../../components/pagefav/PageFav";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import SidebarOption from "../../components/pagefav/SidebarOption";

export default function Bookmark(){
    return(
        <>
        <div className="bookmarkConst">
            <Sidemenu/>
            <SidebarOption/>
            <PageFav/>
        </div>
        </>
    )
}