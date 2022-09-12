var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'samsung'
    },
    methods: {
        say: function(text) {
            return `Hello ` + text;
        }
    }
});
setTimeout(() => {
    vueInstance.title = 'oppo'
}, 3000)