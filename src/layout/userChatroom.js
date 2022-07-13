// import ChatInputs from "../components/chatInputs";
import ChatRoomHeader from "../components/chatroomheader";
import ReceivedChat from "../components/chats/received";
import SentChat from "../components/chats/sent"
import { AppContext } from "../context";
import { Fragment, useContext } from 'react'

const UserChatRoom = () => {
    const { activeroom } = useContext(AppContext)

    return (
        <div data-asset-chat-background-dark="true" className="w-full h-full bg-[#efeae2] dark:bg-[#0b141a] bg-[length:280px] dark:bg-[length:0px] bg-center" style={{ backgroundImage: 'url(./bg-chatroom.png)' }}>
            <ChatRoomHeader activeroom={activeroom} />
            <div
                className={`relative w-full md:p-8 lg:p-20 sm:p-8 p-4 overflow-y-auto full-height`}>
                <ul className="mb-12">
                    <li className="md:p-y-8 lg:p-y-20 sm:p-y-8 p-y-4">
                        <div className="w-full p-3 mb-8 shadow rounded-[10px] bg-[#ffeecd] dark:bg-[#feeecd] dark:text-[#ffd279] flex justify-center items-center text-[#54656f]">
                            <span className="text-[10px] sm:text-[12px] mr-1"><svg width="16" height="16" viewBox="0 0 10 12"><path d="M5.008 1.6c1.375 0 2.501 1.074 2.586 2.427l.005.164v1.271h.158c.585 0 1.059.48 1.059 1.07v3.351c0 .59-.474 1.07-1.059 1.07h-5.5c-.582 0-1.057-.48-1.057-1.07V6.531c0-.59.474-1.069 1.058-1.069h.158V4.191c0-1.375 1.075-2.501 2.429-2.586l.163-.005Zm0 1.248c-.696 0-1.272.534-1.337 1.214l-.006.129-.002 1.271H6.35l.001-1.271c0-.653-.47-1.2-1.088-1.319l-.126-.018-.129-.006Z" fill="currentColor"></path></svg></span>
                            <span className="text-[10px] sm:text-[12px] text-center">
                                Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more.
                            </span>
                        </div>
                    </li>

                    {
                        activeroom?.chats.map((chat, i) => {
                            return (
                                <Fragment key={chat?.id + i}>
                                    {chat?.isSent ? <SentChat
                                        chat={chat} /> :
                                        <ReceivedChat
                                            chat={chat} />}
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default UserChatRoom;
