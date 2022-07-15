import React, { createContext, useState } from "react";
export const AppContext = createContext();

const room = {
    avatar: 'https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/4ec98ee1-9366-4e9d-87c8-e892c61baf41.png',
    first_name: 'Weather',
    last_name: 'Report',
    chats: [
        {
            "id": 1,
            "message": "Enter the name of a city - Delhi or Lucknow or New York",
            "isSent": false,
            "template": false,
            "time": "6:32 AM",
        }
    ]
}

export const AppProvider = ({ children }) => {
    const [activeroom, setActiveRoom] = useState(null)
    const [chatBot, setChatbot] = useState(room)
    const [typing,setTyping] = useState(false)

    return (
        <AppContext.Provider
            value={{
                activeroom, setActiveRoom,
                chatBot, setChatbot,
                typing,setTyping
            }}
        >
            {children}
        </AppContext.Provider>
    )
}