import Noti from "../../components/noti/Noti";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import SidebarOption from "../../components/noti/SidebarOption";

export default function Notification(){
    return(
        <>
        <div className="notiConst">
            <Sidemenu/>
            <SidebarOption/>
            <Noti/>
        </div>
        </>
    );
}