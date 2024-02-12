import { Route } from 'react-router-dom';
import authorities from '../../../../config/Authorities';
import { roles as Roles } from '../../../../config/Roles';
import ActiveUserContext from '../../../user/contexts/ActiveUserContext';
import { useCallback, useContext, useMemo } from 'react';
import { Optional } from '../../../../types/Optional';

export interface PrivateRouteProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const PrivateRoute = ({children} : PrivateRouteProps) => {
  const { user } = useContext(ActiveUserContext);

  return (
      <Route
          path={''}
          element={
              <>
                  { children }
              </>
          }
      />
  );
}

export default PrivateRoute;