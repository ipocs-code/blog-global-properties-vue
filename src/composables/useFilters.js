import { getCurrentInstance } from 'vue'

export function useFilters () {
    const vm = getCurrentInstance()
    return vm.appContext.config.globalProperties.$filters
}