var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'samsung',
        url:'https://v2.vuejs.org/v2/guide/instance.html',
        number: 20,
        clientX: 0,
        clientY: 0
    },
    methods: {
        say: function(text) {
            return `Hello ` + text;
        },
        //JS expression
        chooseYesNo(){
            var number = this.number;
            console.log(number);
            return number > 10 ?`YES`: `NO`;
        },
        //event
        handleClick(event) {
            console.log(`click`, event);
            this.number += 1;
        },
        handleClickWithNumber(event, count){
            console.log(`click`, event);
            this.number += count;
        },
        handleMouseMove(event){
            console.log(event);
            this.clientX = event.clientX;
            this.clientY =event.clientY;
        }
    }
});
setTimeout(() => {
    vueInstance.title = 'oppo'
}, 3000)