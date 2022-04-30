import { createApp } from 'vue'
import App from './App.vue'
import screenScale from 'screen-scale'

const app = createApp(App)

app.use(screenScale, {
	width: 3840,
	height: 1080,
})

app.mount('#app')
