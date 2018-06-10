import { ADMIN_ROLE, MANAGER_ROLE, GUEST_ROLE } from 'constants'

export default {
    "signIn": {
        slug: "signIn",
        route: "/",
        roles: [ GUEST_ROLE ]
    },
    "unauthorized":{
        slug: "unauthorized",
        route: "/403",
        roles: false
    },
    "welcome":{
        slug: "welcome",
        route: "/welcome",
        roles: [ ADMIN_ROLE, MANAGER_ROLE ]
    },
    "signOut":{
        slug: "signOut",
        route: "/sign-out",
        roles: [ ADMIN_ROLE, MANAGER_ROLE ]
    }
}
