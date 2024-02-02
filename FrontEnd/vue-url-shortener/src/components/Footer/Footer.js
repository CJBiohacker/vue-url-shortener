export default {
    props: {
        author: {
            type: String,
            default: ""
        },
        profiles: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            currentYear: new Date().getFullYear(),
        }
    },
    methods: {
        openProfileInNewTab(url) {
            window.open(url, '_blank', 'noreferrer');
        }
    },
    mounted() {
        console.log(this.profiles);
    }
}