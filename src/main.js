import { createApp } from 'vue'
import App from './App.vue'

const myApp = createApp(App)

/**
 * REGISTER GLOBAL FILTERS
 */
myApp.config.globalProperties.$filters = {
    striphtml (value) {
        const div = document.createElement('div')
        div.innerHTML = value
        return div.textContent || div.innerText || ""
    },

    limitTo (value, size) {
        if (!value || !size) return ''
        return value.substring(0, size) + "..."
    },

    snakeToHuman (value) {
        if (!value) return ''
        return value.replace(/_/g, ' ')
    }
}

myApp.mount('#app')
