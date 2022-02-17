import {
    atom,
    selector,
    useRecoilValue,
} from "recoil";


export const gender = {
    male: "male",
    female: "female"
};

export const ALL = "all";

export const peopleState = atom({
    key: "peopleState",
    default: [
        {
            id: 1,
            name: "Huong",
            age: 23,
            gender: gender.female
        },
        {
            id: 2,
            name: "Phuc",
            age: 25,
            gender: gender.male
        },
        {
            id: 3,
            name: "Tom",
            age: 56,
            gender: gender.male
        }
    ]
});


export const peopleFilterState = atom({
    key: "peopleFilterState",
    default: ALL
});

export const filteredPeopleState = selector({
    key: "peopleListState",
    get: ({ get }) => {
        const filter = get(peopleFilterState);
        const people = get(peopleState);
        if (filter === ALL) return people;
        return people.filter(peole => peole.gender === filter);
    }
});

const User = () => {
    const people = useRecoilValue(filteredPeopleState);
    return (
        <div>
            <h1>Users List</h1>
            {people.map(people => (
                <div key={people.id}>
                    {people.name}, {people.age}, {people.gender}
                </div>
            ))}
        </div>
    );
};

export default User;

