

const ReceivedChat = ({ continousSent, chat }) => {
    return (
        <li className="flex justify-start m-2">
            <div className="relative max-w-xl px-2 bg-[#ffffff] dark:text-white dark:bg-[#1f2c33] text-gray-700 rounded-[8px]">
                {continousSent && <div className="absolute w-0 h-0 border-t-[2px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-[#ffffff] dark:border-r-[#1f2c33] right-[100%] top-[0] translate-y-[10%]"></div>}
                <div>
                    <div className="pt-1 mr-14">
                        <span className="block">{chat?.message}</span>
                    </div>
                    <div className="float-right h-full bottom-0">
                        <span className="float-right text-[#75838d] text-[12px] dark:text-[#a2beb7]">{chat?.time}</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ReceivedChat;