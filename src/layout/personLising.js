
import UserListfakeData from '../@fakedata/userchatlist.json'
import Person from '../components/person'

const PersonLising = () => {

    return (
        <ul className="px-2 w-full full-height">
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