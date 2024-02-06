import { Route } from 'react-router-dom';
import authorities from '../../../../config/Authorities';
import { roles as Roles } from '../../../../config/Roles';
import ActiveUserContext from '../../../user/contexts/ActiveUserContext';
import { useContext } from 'react';
import { Optional } from '../../../../types/Optional';

type keyofAuthority = keyof typeof authorities;
type keyofRole = keyof typeof Roles;

type AuthoritiesProp = keyofAuthority | keyofAuthority[];
type RoleProp = keyofRole | keyofRole[];

type toCheckType = (keyofAuthority | keyofRole)[];

export interface PrivateRouteProps {
    path: string;
    roles: Optional<RoleProp>;
    authorities: Optional<AuthoritiesProp>;
    element: JSX.Element | JSX.Element[];
    children: React.ReactNode | React.ReactNode[];
}

const PrivateRoute = ({path, element, children, authorities, roles} : PrivateRouteProps) => {
    const { user } = useContext(ActiveUserContext);

    const isUserAllowed = (toCheck: toCheckType) => {
        
    }

    if (authorities || roles) {
        let toCheck: toCheckType = [];
        
        if (authorities) {
            toCheck = [...toCheck]
        }
        if (roles) {
            
        }
    }

    return (
        <Route
            path={path}
            element={
                <>
                    { element }
                    { children }
                </>
            }
        />
    );
}