
const UserProfileHeader = () => {
    return (
        <header className="pl-4 flex justify-between items-center py-1 bg-[#f0f2f5] dark:bg-[#2a3942]">
            <img className="inline-block h-10 w-10 rounded-full" src="https://pps.whatsapp.net/v/t61.24694-24/290401771_1993689537505632_3828503424532309206_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVzE1Tc1s0IRTCaj2iZeZiyStDL4tI-qjitIeVSknuQ6PQ&oe=62D825FE" alt="{user.handle}" />
            <div>
                <button className="w-12 h-12 rounded-full">
                    <svg version="1.1" id="ee51d023-7db6-4950-baf7-c34874b80976" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" className="text-[#54656f] dark:text-[#aebac1]"><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                </button>
           
                <button className="w-12 h-12 rounded-full">
                    <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#54656f] dark:text-[#aebac1]"><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                </button>

                <button className="w-12 h-12 rounded-full">
                    <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#54656f] dark:text-[#aebac1]"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                </button>
            </div>
        </header>
    )
}

export default UserProfileHeader;