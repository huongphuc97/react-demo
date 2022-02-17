import Container from '@mui/material/Container';
import { Outlet, Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

const Layout = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Link to="/user">User</Link>
                <Link to="/register">Register</Link>
            </Stack>
            <Outlet />
        </Container>
    );
}

export default Layout