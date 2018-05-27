const { resolve } = require('path')

module.exports = {
    "admin-default-template": resolve(__dirname, 'src/app/template/components/default'),
    "html-component": resolve(__dirname, 'src/common/html/components/index'),
    "html-grid": resolve(__dirname, 'src/common/html/grid'),
    "html-device-frame": resolve(__dirname, 'src/common/html/device-frame/index'),
    "html-table": resolve(__dirname, 'src/common/html/table'),
    "html-icon": resolve(__dirname, 'src/common/icon/index'),
    "html-loading-bar": resolve(__dirname, 'src/common/loading-bar/index'),
    "html-loading-page": resolve(__dirname, 'src/common/loading-page/index'),
    "html-indicator-card": resolve(__dirname, 'src/common/indicator-card'),
    "html-toastr-messages": resolve(__dirname, 'src/common/toastr-messages/index'),
    "html-product-thumbnail": resolve(__dirname, 'src/common/product-thumbnail/index'),
    "html-progress-bar-pie": resolve(__dirname, 'src/common/progress-bar-pie/index'),
    "html-indicator-steps": resolve(__dirname, 'src/common/indicator-steps/index'),

    "form-utils": resolve(__dirname, 'src/utils/forms'),


    "datatable": resolve(__dirname, 'src/utils/datatable/index'),
    "datatable-utils": resolve(__dirname, 'src/utils/datatable/utils'),

    "transformers": resolve(__dirname, 'src/utils/transformers'),

    "assets": resolve(__dirname, 'assets'),
    "assets-images": resolve(__dirname, 'assets/images'),


    "constants": resolve(__dirname, 'src/consts'),

    "sitemap": resolve(__dirname, 'src/app/sitemap'),
    "module-auth": resolve(__dirname, 'src/app/auth'),
    "module-dashboard": resolve(__dirname, 'src/app/dashboard'),
    "module-home": resolve(__dirname, 'src/app/home'),
    "module-orders": resolve(__dirname, 'src/app/orders'),
    "module-sellers": resolve(__dirname, 'src/app/sellers'),
    "module-faq": resolve(__dirname, 'src/app/faq'),
    "module-support": resolve(__dirname, 'src/app/support'),
    "module-devices": resolve(__dirname, 'src/app/devices'),
    "module-products": resolve(__dirname, 'src/app/products'),
    "module-users": resolve(__dirname, 'src/app/users'),
    "module-finances": resolve(__dirname, 'src/app/finances'),
    "module-settings": resolve(__dirname, 'src/app/settings'),
    "module-campaigns": resolve(__dirname, 'src/app/campaigns'),
    "module-logistics": resolve(__dirname, 'src/app/logistics'),
    "module-template": resolve(__dirname, 'src/app/template'),
    "module-navigation": resolve(__dirname, 'src/app/navigation'),
    "module-mail": resolve(__dirname, 'src/app/mail'),
}
