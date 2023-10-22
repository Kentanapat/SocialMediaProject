import PageSetting from "../../components/pagesetting/PageSetting";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import SidebarOption from "../../components/pagesetting/SidebarOption";

export default function Setting(){
    return(
        <>
        <div className="settingConst">
            <Sidemenu/>
            <SidebarOption/>
            <PageSetting/>
        </div>
        </>
    )
}