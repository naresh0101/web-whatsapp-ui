


const SentChat = ({continousSent,chat}) => {
    return (
        <li className="flex justify-end m-2">
            <div className="shadow relative max-w-xl px-2 text-gray-700 dark:bg-[#015c4b] bg-[#d9fdd2] rounded-[8px]">
               {continousSent && <div className="absolute w-0 h-0 border-t-[2px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-[#d9fdd2] dark:border-l-[#015c4b] left-[100%] top-[0] translate-y-[10%]"></div>}
                <div>
                    <div className="pt-1 mr-14">
                        <span className="block dark:text-white">{chat?.message}</span>
                    </div>
                    <div className="flex justify-start float-right h-full bottom-0">
                        <span className="float-right text-[#75838d] text-[12px] dark:text-[#a2beb7]">{chat?.time}</span>
                        <span className="text-[#53bdeb] ml-1"><svg viewBox="0 0 18 18" width="18" height="18" className=""><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default SentChat;