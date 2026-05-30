import { createApp } from 'vue'
import App from './App.vue'
import translatePlugin from './translatePlugin'

// import alertMixin from './alertMixin'

// const alertMixin = {
//     data() {
//         return {
//             alert: false
//         }
//     },
//     methods: {
//         toggleAlert() {
//             this.alert = !this.alert
//         }
//     }
// }

const app = createApp(App)

const ru = {
    app: {
        title: 'Как работают плагины во Vue',
        changeBtn: 'Переключить язык'
    }
}

const en = {
    app: {
        title: 'How plagins in Vue',
        changeBtn: 'Toggle Language'
    }
}
// .mixin(alertMixin)
// .directive('focus', {
//     mounted(el){
//         el.focus()
//     }
// })

app.use(translatePlugin, {ru, en})
app.mount('#app')
