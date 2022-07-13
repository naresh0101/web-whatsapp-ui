import { Fragment, useContext } from "react";
import WhenNoActiveRoom from "../components/WhenNoActiveroom";
import { AppContext } from "../context";
import Sidebar from "./sidebar";
import UserChatroom from './userChatroom'
import ChatInputs from "../components/chatInputs";

const MainLayout = () => {
    const { activeroom } = useContext(AppContext)

    return (
        <Fragment>
            {/* form desktop view */}
            <div className="medium-and-large-screen w-full flex justify-start p-0 m-0 overflow-hidden h-[100vh]">
                <div className="w-[30%]">
                    <Sidebar />
                </div>
                <div className="w-[70%]">
                    {activeroom === null ? <WhenNoActiveRoom /> : <div>
                        <UserChatroom />
                        <ChatInputs />
                    </div>}
                </div>
            </div>
            {/* for mobile view */}
            {/* small-screen */}
            <div className="small-screen w-full p-0 m-0 overflow-hidden h-[100vh]">
                {activeroom !== null ? <div>
                    <UserChatroom />
                    <ChatInputs />
                </div> : <Sidebar />}
            </div>
        </Fragment>
    )
}
export default MainLayout;
