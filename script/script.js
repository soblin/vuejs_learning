const nav = new Vue({
    el: '#nav',
    data () {
        return {
            menus: [{
                label: 'TOP',
                path: './index.html'
            }, {
                label: 'ABOUT',
                path: './about.html'
            }, {
                label: 'SCHEDULE',
                path: './schedule.html'
            }, {
                label: 'CONTACTS',
                path: './contact.html'
            }]            
        };
    }
});

const app = new Vue({
    el: '#app',
    data() {
        return {
            todos: [],
            text: ''
        };
    },
    methods: {
        inputText(e) {
            this.text = e.target.value;
        },
        addTodo() {
            // if text was empty, do nothing
            if (!this.text) return;
            const text = this.text;
            const id = Math.ceil(Math.random() * 1000);
            const todo = {
                id,
                text,
                isDone: false
            };
            this.todos.push(todo);
            this.resetText();
        },
        resetText() {
            this.text = '';
        },
        deleteTodo(id) {
            const index = this.getIndexBy(id);
            this.todos.splice(index, 1);
        },
        toggleIsDone(id) {
            const index = this.getIndexBy(id);
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        getIndexBy(id) {
            const filterTodo = this.todos.filter(todo => todo.id === id)[0];
            return this.todos.indexOf(filterTodo);
        }
    },
    computed: {
        doneTodo() {
            return this.todos.filter(todo => todo.isDone === true);
        },
        incompleteTodo() {
            return this.todos.filter(todo => todo.isDone === false);
        }
    }
});
