var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'samsung',
        url:'https://v2.vuejs.org/v2/guide/instance.html',
        number: 20
    },
    methods: {
        say: function(text) {
            return `Hello ` + text;
        },
        chooseYesNo(){
            var number = this.number;
            console.log(number);
            return number > 10 ?`YES`: `NO`;
        }
    }
});
setTimeout(() => {
    vueInstance.title = 'oppo'
}, 3000)