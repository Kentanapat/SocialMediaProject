import PageSearch from "../../components/pagesearch/PageSearch";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import SidebarOption from "../../components/pagesearch/SidebarOption";

export default function Search(){
    return(
        <>
        <div className="searchConst">
            <Sidemenu/>
            <SidebarOption/>
            <PageSearch/>
        </div>
        </>
    );
}