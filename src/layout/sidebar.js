import NotificationAlert from "../components/NotificationAlert";
import SearchforUser from "../components/searchforUser";
import UserProfileHeader from "../components/UserProfileHeader";
import PersonLising from "./personLising";

const ChatsideBar = () => {
    return (
        <div className="bg-white dark:bg-[#111b21] w-full dark:border-[#1f2c33] sm:border-r-1 border-[#f0f2f5]">
            <UserProfileHeader />
            <NotificationAlert />
            <SearchforUser />
            <PersonLising />
        </div>
    )
}

export default ChatsideBar;
