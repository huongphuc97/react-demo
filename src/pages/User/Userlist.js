import Box from '@mui/material/Box'
import PickUser from './PickUser'
import User from './User';
const userList = () => {
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <PickUser />
            <User />
        </Box>
    );
}
export default userList;