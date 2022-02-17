import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useSetRecoilState } from 'recoil';
import { gender, ALL, peopleFilterState } from './User'
const PickUser = () => {
    const setPeopleFilter = useSetRecoilState(peopleFilterState);
    return (
        <Stack direction="row" spacing={2}>
            <Button color="secondary" variant="contained" onClick={() => setPeopleFilter(ALL)}>All</Button>
            <Button color="secondary" variant="contained" onClick={() => setPeopleFilter(gender.male)}>Male</Button>
            <Button color="secondary" variant="contained" onClick={() => setPeopleFilter(gender.female)}>Female</Button>
        </Stack>
    );
}

export default PickUser;