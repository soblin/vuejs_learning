const app = new Vue({
    el: '#app',
    data() {
        return {
            name: 'name',
            email: 'email',
            tel: '00'
        };
    },
    computed: {
        isInvalidName() {
            return this.name.length < 4;
        },
        isInvalidEmail() {
            const regex = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/i);
            return !regex.test(this.email);
        },
        isInvalidTel() {
            const tel = this.tel;
            return tel.length < 8 || isNaN(Number(tel));
        }
    }
});
