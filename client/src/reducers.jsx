import { combineReducers } from 'redux'

/**
 * The3rd Components reducers
 */
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'

/**
 * App Components reducers
 */
import authReducer from 'module-auth/reducer'
import dashboardReducer from 'module-dashboard/reducer'
import ordersReducer from 'module-orders/reducer'
import sellersReducer from 'module-sellers/reducer'
import supportReducer from 'module-support/reducer'
import faqReducer from 'module-faq/reducer'
import devicesReducer from 'module-devices/reducer'
import settingsReducer from 'module-settings/reducer'
import productsReducer from 'module-products/reducer'
import usersReducer from 'module-users/reducer'
import financesReducer from 'module-finances/reducer'
import campaignsReducer from 'module-campaigns/reducer'
import templateReducer from 'module-template/reducer'
import logisticReducer from 'module-logistics/reducer'
import navigationReducer from 'module-navigation/reducer'
import mailReducer from 'module-mail/reducer'

/**
 * Combine all reducers
 */
const rootReducer = combineReducers({
    toastr: toastrReducer,
    form: formReducer,
    loadingBar: loadingBarReducer,
    template: templateReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    orders: ordersReducer,
    sellers: sellersReducer,
    support: supportReducer,
    faq: faqReducer,
    devices: devicesReducer,
    settings: settingsReducer,
    products: productsReducer,
    users: usersReducer,
    finances: financesReducer,
    campaigns: campaignsReducer,
    logistics: logisticReducer,
    navigation: navigationReducer,
    mail: mailReducer
})

export default rootReducer
