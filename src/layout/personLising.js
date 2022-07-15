
import UserListfakeData from '../@fakedata/userchatlist.json'
import Chatbot from '../components/bot'
import Person from '../components/person'

const PersonLising = () => {

    return (
        <ul className="px-2 w-full full-height">
            <Chatbot />
        {
                UserListfakeData?.map((person) => {
                    return (
                        <Person person={person} key={person?.id} />
                    )
                })
            }

        </ul>
    )
}

export default PersonLising;