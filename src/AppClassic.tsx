import 'bootstrap/dist/css/bootstrap.min.css';
import "./3s-style.css";
import { LayoutClassic } from './components/LayoutClassic';
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './components/ProtectedRoute';
import { OrderList } from './features/orders/OrderList';
import { OrderSelect } from './features/orders/OrderSelect';
import { OrderCreate } from './features/orders/OrderCreate';
import { ServiceList } from './features/services/ServiceList';
import { ServiceEdit } from './features/services/ServiceEdit';
import { ServiceCreate } from './features/services/ServiceCreate';
import { DivisionList } from './features/divisions/DivisionList';
import { DivisionEdit } from './features/divisions/DivisionEdit';
import { DivisionCreate } from './features/divisions/DivisionCreate';
import { UserList } from './features/users/UserList';
import { UserEdit } from './features/users/UserEdit';
import { AuthProfile } from './features/auth/AuthProfile';
import { NotificationList } from './features/notifications/NotificationList';

import { NotFoundCard } from './components/NotFoundCard';
import { ForbiddenPage } from './components/ForbiddenPage';
import { Login } from './features/auth/Login';

const AppClassic = () => {
    return (
        <>
            <LayoutClassic>
                <Routes>
                    <Route path="/" element={<ProtectedRoute><UserList /></ProtectedRoute>} />

                    <Route path="/orders" element={<ProtectedRoute><OrderList /></ProtectedRoute>} />
                    <Route path="/orders/:id" element={<ProtectedRoute><OrderSelect /></ProtectedRoute>} />
                    <Route path="/orders/create" element={<ProtectedRoute><OrderCreate /></ProtectedRoute>} />


                    <Route path="/services" element={<ProtectedRoute><ServiceList /></ProtectedRoute>} />
                    <Route path="/services/edit/:id" element={<ProtectedRoute><ServiceEdit /></ProtectedRoute>} />
                    <Route path="/services/create" element={<ProtectedRoute><ServiceCreate/></ProtectedRoute>} />

                    <Route path="/divisions" element={<ProtectedRoute><DivisionList /></ProtectedRoute>} />
                    <Route path="/divisions/edit/:id" element={<ProtectedRoute><DivisionEdit /></ProtectedRoute>} />
                    <Route path="/divisions/create" element={<ProtectedRoute><DivisionCreate /></ProtectedRoute>} />


                    <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
                    <Route path="/users/edit/:id" element={<ProtectedRoute><UserEdit /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><AuthProfile /></ProtectedRoute>} />

                    <Route path="/notifications" element={<ProtectedRoute><NotificationList /></ProtectedRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forbidden" element={<ForbiddenPage />} />
                    <Route path="*" element={<NotFoundCard />} />
                </Routes>
            </LayoutClassic>
        </>

    )
}

export { AppClassic };
