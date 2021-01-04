const navbar = new Vue({
    el: '#navbar',
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

const imageThumbnail = Vue.component('image-thumbnail', {
    props: {
        path: {
            type: String,
            default: ''
        }
    },
    /* このpath(メンバ変数)を動的に変えようとしてるんだと思う */
    template: `<div class="img-box" :style="{ backgroundImage: 'url(' + path + ')' }" @click="$emit('clickimage')"></div>`
});

const modal = Vue.component('modal', {
    props: {
        isShown: {
            type: Boolean,
            default: false
        },
        imagePath : {
            type: String,
            default: ''
        }
    },
    template: `<div v-if="isShown" class="my-modal" @click="$emit('close')"><img class="my-modal-img" :src="imagePath" alt="selectedImage"/></div>`
});

const app = new Vue({
    el: '#app',
    components: {
        'image-thumbnail': imageThumbnail, modal
    },
    data() {
        return {
            isShown: false,
            selectedImage: '',
            images: [{
                path: './img/001.png'
            }, {
                path: './img/002.jpeg'
            }, {
                path: './img/003.png'
            }]
        };
    },
    methods: {
        onSelectImage(path) {
            this.setImage(path),
            this.openModal();
        },
        openModal() {
            this.isShown = true;
        },
        closeModal() {
            this.isShown = false;
        },
        setImage(path) {
            this.selectedImage = path;
        }
    }
});
