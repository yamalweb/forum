import { createApp } from 'vue'
import App from './App.vue'
import router from '@/index.js'
import store from '@/store'
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import firebaseConfig from '@/config/firebase.js'

firebase.initializeApp(firebaseConfig);

const app = createApp(App)
app.use(router)
app.use(store)
const requireComponent = require.context(
    './components',
    true,
    /App[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(function (fileName) {
    let baseComponentConfig = requireComponent(fileName)
    baseComponentConfig =
        baseComponentConfig.default || baseComponentConfig
    const baseComponentName =
        baseComponentConfig.name ||
        fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
    app.component(baseComponentName, baseComponentConfig)
})
app.mount('#app')
