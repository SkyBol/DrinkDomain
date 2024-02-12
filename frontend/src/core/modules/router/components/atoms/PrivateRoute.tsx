import { Route, RouteProps } from 'react-router-dom';
import authorities from '../../../../config/Authorities';
import { roles as Roles } from '../../../../config/Roles';
import ActiveUserContext from '../../../user/contexts/ActiveUserContext';
import { useCallback, useContext, useMemo } from 'react';
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

export const PrivateRoute = ({path, element, children, authorities, roles} : PrivateRouteProps & RouteProps) => {
    const { user } = useContext(ActiveUserContext);

    const getAccessRequirements = useCallback((): toCheckType => {
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
    }, []);

    const userAccess: toCheckType = useMemo((): toCheckType => {
        if (user) {
            const userAccess: toCheckType = [...user.roles.map((role) => role.name)];
            return [...userAccess, ...user.roles.map((auth) => auth.authorities).flat().map((auth) => auth.name)];
        }
        return [];
    }, [user]);

    const isUserAllowed: boolean = useMemo((): boolean => {
        const toCheck = getAccessRequirements();

        if (!user) {
            return false;
        }

        // User needs any role / authority from the Array toCheck
        return userAccess.some((access) => {
            return toCheck.some((check) => access === check)
        }) || false;
    }, [user]);

    if (!isUserAllowed) {
        return (
            <Route
                path={path}
                element={<h2>unauthorized</h2>}
            />
        );
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