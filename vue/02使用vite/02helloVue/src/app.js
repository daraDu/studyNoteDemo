import MyButton from "./components/MyButton"
export default {
    template: '<h1>{{msg}}</h1><button @click="num++">点我加一</button>：{{num}} <my-button></my-button>',
    components: { MyButton },
    data() {
        return {
            msg: '我是app！！！',
            num: 0
        }
    },
}