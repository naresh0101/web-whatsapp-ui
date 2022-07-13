import { useCallback, useContext } from 'react'
import { AppContext } from '../../context'

const getlastMsg = (person) => {
    let { chats } = person;
    if (chats?.length > 0) {
        return chats[chats?.length - 1]?.message
    } else {
        return chats[0]?.message
    }
}

const Person = ({ person }) => {
    const { setActiveRoom } = useContext(AppContext)

    const selectuser = useCallback(() => {
        setActiveRoom(person)
    }, [setActiveRoom,person])
    
    return (
        <li className="hover:bg-[#f0f2f5] dark:hover:bg-[#2a3942] w-full cursor-pointer flex justify-start items-center h-16">
            <img className="inline-block h-12 w-12 rounded-full mr-2" alt={person?.first_name} src={person?.avatar} />
            <div onClick={selectuser} className="border-b border-[#f0f2f5] dark:border-[#222d34] w-full h-16 flex justify-start items-center">
                <div className="w-full">
                    <div className="flex justify-between">
                        <p className="text-slate-900 font-medium dark:text-slate-200">{person?.first_name} {person?.last_name}</p>
                        <p className={`${person?.isNewMsg ? 'font-bold text-[#20d365] dark:text-[#05a884]' : 'text-[#75838d] dark:text-slate-200'} text-[12px] dark:text-slate-200`}>{person?.time}</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-1/2 flex justify-start">
                        {(person?.isNewMsg && getlastMsg(person) !== undefined ) && <span className="text-[#53bdeb] mr-1"><svg viewBox="0 0 18 18" width="18" height="18" className=""><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>}
                            <span title={getlastMsg(person)} className={`${person?.isNewMsg ? 'text-[#3b4a54] font-bold' : 'text-[#667781]'} block text-sm dark:text-slate-400 truncate w-32`}>
                              {getlastMsg(person)}
                            </span>
                        </div>
                        <div className="flex justify-end">
                            {person?.isNewMsg && <div className="rounded-full bg-[#20d365] dark:bg-[#05a884] text-[10px] w-5 h-5 flex justify-center items-center">
                                <span className="font-bold text-white">2</span>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </li>
      
    )
}
export default Person;