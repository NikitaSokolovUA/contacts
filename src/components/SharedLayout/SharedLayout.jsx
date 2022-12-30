
import { Outlet } from 'react-router-dom';
import { Header, Link } from "./SharedLayout.styled";

const SharedLayout = ()=>{
    return <>
    <Header>
        <nav>
            <Link to='/form'>New user</Link>
            <Link to='/contacts'>Users</Link>
        </nav>
    </Header>
    <Outlet/>
    </>
}

export default SharedLayout