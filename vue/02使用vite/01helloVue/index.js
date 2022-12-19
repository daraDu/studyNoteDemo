/*  Component provided template option but runtime compilation is not supported in this build of Vue. 
Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js". 
 */
// 默认这种引入方法的vue不支持template，需要改成
import { createApp } from "vue/dist/vue.esm-bundler.js";

const App = {
    template: `
        <h1>手动脚手架冲冲冲，{{msg}}</h1>
    `,
    data() {
        return {
            msg: '冲呀！！！'
        }
    }
}
createApp(App).mount('#app')