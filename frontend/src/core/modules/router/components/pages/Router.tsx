import {Route, Routes} from 'react-router-dom';
import Login from '../../../user/components/pages/LoginPage/LoginPage';
import UserPage from '../../../user/components/pages/UserPage/UserPage';
import UserTable from '../../../user/components/pages/UserTable/UserTable';
import Homepage from '../../../homepage/components/pages/Homepage/Homepage';
import BottlePage from "../../../../../domain/modules/bootle/components/pages/BottlePage/BottlePage.tsx";
import AbstractFormGenerated from '../../../abstract/components/form/components/molecules/AbstractFormGenerated';
import { defaultBottle } from '../../../../../domain/modules/bootle/models/Bottle.model.ts';
import BottleTable from "../../../../../domain/modules/bootle/components/pages/BottleTable/BottleTable.tsx";
import BottleDetailPage from "../../../../../domain/modules/bootle/components/pages/BottlePage/BottleDetailPage.tsx";

const Router = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Homepage/>} />

            <Route path={'/login'} element={<Login/>} />

            <Route path={'/users/:userId'} element={<UserPage />} />
            <Route path={'/users/add'} element={<UserPage />} />
            <Route path={'/users/'} element={<UserTable />} />

            <Route path={'/bottles/add'} element={<BottlePage/>} />
            <Route path={'/bottles/:bottleId'} element={<BottlePage/>}/>
            <Route path={'/bottles/detail/:bottleId'} element={<BottleDetailPage/>}/>
            <Route path={'/bottles'}>
                <Route path='' element={<BottleTable />} />
                <Route path='test' element={<AbstractFormGenerated object={defaultBottle} submitActionHandler={() => {}}/>} />
            </Route>

            <Route path='*' element={<div>Not Found</div>} />
        </Routes>
    );
};

export default Router;
