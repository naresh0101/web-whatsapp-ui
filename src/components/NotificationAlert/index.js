

const NotificationAlert = () => {
    return (
        <div className="pl-4 py-6 dark:bg-[#182229] bg-[#53bdeb] flex">
            <button className="w-12 h-12 rounded-full flex justify-center items-center">
                <svg viewBox="0 0 48 48" width="48" height="48" className="text-[#54656f] dark:text-[#aebac1]"><path fill="#fff" d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.744 15.428v-.618c0-.706.618-1.324 1.324-1.324s1.323.618 1.323 1.324v.618c2.559.618 4.412 2.823 4.412 5.559v3.176l-8.294-8.294a5.056 5.056 0 0 1 1.235-.441zm1.323 15.706a1.77 1.77 0 0 1-1.765-1.765h3.529a1.768 1.768 0 0 1-1.764 1.765zm7.236-.883-1.765-1.765H17.233v-.882l1.765-1.765v-4.853a5.56 5.56 0 0 1 .794-2.912l-2.559-2.559 1.147-1.147 14.735 14.736-1.146 1.147z"></path></svg>
            </button>
            <div className="ml-4">
                <p className="text-base dark:text-[#e9edef]">Get notified of new messages</p>
                <p className="text-sm dark:text-[#aebac1]">Turn on desktop notifications</p>
            </div>
        </div>
    )
}

export default NotificationAlert