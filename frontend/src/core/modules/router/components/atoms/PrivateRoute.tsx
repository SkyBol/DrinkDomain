import { Route } from 'react-router-dom';
import authorities from '../../../../config/Authorities';
import { roles as Roles } from '../../../../config/Roles';
import ActiveUserContext from '../../../user/contexts/ActiveUserContext';
import { useContext } from 'react';
import { Optional } from '../../../../types/Optional';

type keyofAuthority = keyof typeof authorities;
type keyofRole = keyof typeof Roles;

type AuthoritiesProp = Optional<keyofAuthority | keyofAuthority[]>;
type RolesProp = Optional<keyofRole | keyofRole[]>;

type toCheckType = (keyofAuthority | keyofRole)[];

export interface PrivateRouteProps {
    path: string;
    //
    roles?: RolesProp;
    authorities?: AuthoritiesProp;
    //
    element?: JSX.Element | JSX.Element[];
    children?: React.ReactNode | React.ReactNode[];
}

const getAccessRequirements = (authorities: AuthoritiesProp, roles: RolesProp): toCheckType => {
    let toCheck: toCheckType = [];

    if (authorities) {
        if (Array.isArray(authorities)) {
            toCheck = [...toCheck, ...authorities]
        } else {
            toCheck = [...toCheck, authorities]
        }
    }
    if (roles) {
        if (Array.isArray(roles)) {
            toCheck = [...toCheck, ...roles]
        } else {
            toCheck = [...toCheck, roles]
        }
    }
    return toCheck;
}

export const PrivateRoute = ({path, element, children, authorities, roles} : PrivateRouteProps) => {
    const { user } = useContext(ActiveUserContext);

    const getUserAccess = (): toCheckType => {
        if (user) {
            const userAccess: toCheckType = [...user.roles.map((role) => role.name)];
            return [...userAccess, ...user.roles.map((auth) => auth.authorities).flat().map((auth) => auth.name)];
        }
        return [];
    }

    const isUserAllowed = (): boolean => {
        const toCheck = getAccessRequirements(authorities, roles);

        if (!user) {
            return false;
        }
        const userAccess = getUserAccess();
        
        // User needs any role / authority from the Array toCheck
        return userAccess.some((access) => {
            return toCheck.some((check) => access === check)
        }) || false;
    }

    if (!isUserAllowed()) {
        return <h2>Unauthorized</h2>
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

export default PrivateRoute;