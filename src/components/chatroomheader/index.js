import { useContext } from "react";
import { AppContext } from '../../context'

const ChatRoomHeader = ({ activeroom }) => {
    const { setActiveRoom,typing } = useContext(AppContext)

    return (
        <header className="h-14 pl-2 bg-[#f0f2f5] dark:bg-[#2a3942] flex justify-between">
            <div className="cursor-pointer text-[#54656f] flex justify-start items-center h-full">
                <button onClick={() => { setActiveRoom(null) }} className="back-arrow cursor-pointer rounded-full h-10 w-10">
                    <span data-testid="back" data-icon="back" className="text-[#54656f] dark:text-[#aebac1]"><svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path></svg></span>
                </button>
                <img className="w-10 h-10 rounded-full contain" alt={`${activeroom?.first_name} ${activeroom?.last_name}`} src={activeroom?.avatar} />
                <div className=" w-full ml-4 h-16 flex justify-start items-center">
                    <div className="w-full flex flex-col justify-end">
                        <div>
                            <p className="text-left text-slate-900 truncate font-medium dark:text-slate-200">{activeroom?.first_name} {activeroom?.last_name}</p>
                        </div>
                        <div className="flex">
                            <p className="text-sm dark:text-slate-200">{typing ?'Typing ... ' :'online'}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-start items-center">
                <button className="cursor-pointer rounded-full h-10 w-10">
                    <svg viewBox="0 0 24 24" width="28" height="28" className="text-[#54656f] dark:text-[#aebac1]"><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                </button>
                <button className="cursor-pointer rounded-full h-10 w-10">
                    <svg viewBox="0 0 24 24" width="28" height="28" className="text-[#54656f] dark:text-[#aebac1]"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                </button>
            </div>

        </header>
    )
}

export default ChatRoomHeader;