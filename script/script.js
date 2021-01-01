new Vue({
    el: '#app',
    data() {
        return {
            text: 'hello, Vue.js'
        };
    },
    methods: {
        handleClick: function() {
            this.text = 'button pushed';
        }
    }
});
