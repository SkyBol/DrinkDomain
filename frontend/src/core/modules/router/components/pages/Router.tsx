import { Route, Routes } from 'react-router-dom';
import Login from '../../../user/components/pages/LoginPage/LoginPage';
import UserPage from '../../../user/components/pages/UserPage/UserPage';
import UserTable from '../../../user/components/pages/UserTable/UserTable';
import Homepage from '../../../homepage/components/pages/Homepage/Homepage';
import Reminder from '../../../../../domain/modules/reminder/components/pages/Reminder/Reminder';
import AbstractFormGenerated from '../../../abstract/components/form/components/molecules/AbstractFormGenerated';
import { emptyReminder } from '../../../../../domain/modules/reminder/models/Reminder.model';
import PrivateRoute from '../atoms/PrivateRoute';


const Router = () => {
  //const { checkRole } = useContext(ActiveUserContext);

  /** navigate to different "home"-locations depending on Role the user have */

  return (
    <Routes>
      <Route path={'/'} element={<Homepage/>} />

      <Route path={'/login'} element={<Login/>} />

      <Route path={'/users/:userId'} element={<UserPage />} />
      <Route path={'/users/add'} element={<UserPage />} />
      <PrivateRoute path={'/users/'} element={<UserTable />} roles={'ADMIN'}/>

      <Route path={'/reminder'}>
        <Route path='' element={<Reminder />} />
        <Route path='test' element={<AbstractFormGenerated object={emptyReminder} submitActionHandler={() => {}}/>} />
      </Route>

      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Router;
