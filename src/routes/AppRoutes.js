import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import UserList from '../components/Users/UserList/UserList';
import UserForm from '../components/Users/UserForm/UserForm';
import UserDetail from '../components/Users/UserDetail/UserDetail';
import {useAuth} from '../context/AuthContext';  

const AppRoutes = () => {
    const { authToken } = useAuth(); 

    return (
        <Routes>
            <Route
                path="/"
                element={!authToken ? <Login /> : <Navigate to="/users" />}
            />
            <Route
                path="/users"
                element={authToken ? <UserList /> : <Navigate to="/" />}
            />
            <Route
                path="/users/create"
                element={authToken ? <UserForm isEdit={false} /> : <Navigate to="/" />}
            />
            <Route
                path="/users/edit/:id"
                element={authToken ? <UserForm isEdit={true} /> : <Navigate to="/" />}
            />
            <Route
                path="/users/:id"
                element={authToken ? <UserDetail /> : <Navigate to="/" />}
            />
        </Routes>
    );
};

export default AppRoutes;
