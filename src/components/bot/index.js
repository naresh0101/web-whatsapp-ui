import { useCallback, useContext } from "react"
import { AppContext } from "../../context"


const getlastMsg = (chatBot) => {
    let { chats } = chatBot;
    if (chats?.length > 0) {
        return chats[chats?.length - 1]
    } else {
        return chats[0]
    }
}

const Chatbot = () => {
    const { setActiveRoom, chatBot } = useContext(AppContext)

    const selectuser = useCallback(() => {
        setActiveRoom(chatBot)
    }, [setActiveRoom, chatBot])

    return (
        <li className="hover:bg-[#f0f2f5] dark:hover:bg-[#2a3942] w-full cursor-pointer flex justify-start items-center h-16">
            <img className="inline-block h-12 w-12 rounded-full mr-2" alt={chatBot?.first_name} src={chatBot?.avatar} />
            <div onClick={selectuser} className="border-b border-[#f0f2f5] dark:border-[#222d34] w-full h-16 flex justify-start items-center">
                <div className="w-full">
                    <div className="flex justify-between">
                        <p className="text-slate-900 font-medium dark:text-slate-200">{chatBot?.first_name} {chatBot?.last_name}</p>
                        <p className={`text-[#75838d] text-[12px] dark:text-slate-200`}> {getlastMsg(chatBot)?.time}</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-1/2 flex justify-start">
                            <span title={getlastMsg(chatBot)} className={`${chatBot?.isNewMsg ? 'text-[#3b4a54] font-bold' : 'text-[#667781]'} block text-sm dark:text-slate-400 truncate w-32`}>
                                {getlastMsg(chatBot)?.message}
                            </span>
                        </div>
                        <div className="flex justify-end">

                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Chatbot;