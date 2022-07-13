
const SearchforUser = () => {
    return (
        <div className="border-b border-[#f0f2f5] dark:border-[#222d34]">
            <form className="p-1 m-2 flex">
                <div className='w-full flex justify-start items-center dark:bg-[#1f2c33] bg-[#f0f2f5] rounded-[8px]'>
                    <div className="pl-4">
                        <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#54656f] dark:text-[#aebac1]"><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                    </div>
                    <input
                        type="text"
                        required
                        className="w-3/4 ml-4 bg-[#f0f2f5] dark:bg-[#1f2c33] px-4 py-2 placeholder-[#8697a0] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Search or start new chat"
                    />

                </div>
                <div className="flex h-full p-2 items-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" preserveAspectRatio="xMidYMid meet" className="text-[#54656f] dark:text-[#aebac1]"><path fill="currentColor" d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"></path></svg>
                </div>
            </form>
        </div>
    )
}

export default SearchforUser;