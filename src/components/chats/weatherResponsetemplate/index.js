import moment from "moment"



const WeatherMsgByDay = ({day})=>{
    return (
        <div>
           <div className="py-1 border-dashed border-b border-t border-[#374151]">
                <p className="font-[500]">{moment(day?.datetime).format('LLLL')} </p>
           </div>
            <p><span className="font-[500]">Conditions: </span> <span>{day?.conditions}</span></p>
            <p><span className="font-[500]">Tem: </span> <span>{day?.temp}</span></p>
            <p><span className="font-[500]">Temp-max: </span> <span>{day?.tempmax}</span></p>
            <p><span className="font-[500]">Temp-min: </span> <span>{day?.tempmin}</span></p>
            <p><span className="font-[500]">🌅 Sunrise: </span> <span>{day?.sunrise}</span></p>
            <p><span className="font-[500]">🌄 Sunset: </span> <span>{day?.sunset}</span></p>
            <p><span className="font-[500]">🗒️ Description: </span> <span>{day?.description}</span></p>
            <br/>
        </div>
    )
}

const WeatherResponseTemplate = ({ chat }) => {
    return (
        <li className="flex justify-start m-2">
            <div className="shadow relative max-w-xl px-2 bg-[#ffffff] dark:text-white dark:bg-[#1f2c33] text-gray-700 rounded-[8px]">
                <div>
                    <div className="pt-1 mr-14">
                        <p className="block font-bold">{chat?.message}</p>
                        <p className="block">🗺️ {chat?.resolvedAddress}</p>
                        <br/>
                        <div className="w-full">
                            {
                                chat?.days?.map((day,i)=>{
                                    return(
                                        <WeatherMsgByDay day={day} key={day?.datetime} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="float-right h-full bottom-0">
                        <span className="float-right text-[#75838d] text-[12px] dark:text-[#a2beb7]">{chat?.time}</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default WeatherResponseTemplate;

