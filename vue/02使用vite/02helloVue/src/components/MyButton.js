export default {
    template: '<h1>我是自组件</h1><button @click="num++">点我加一</button>：{{num}}',
    data() {
        return {
            num: 0
        }
    },
}