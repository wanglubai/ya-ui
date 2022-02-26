export default {
    model: {
        prop: 'visible',
        event: 'visibleChange'
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selfVisible: this.visible
        }
    },
    watch: {
        selfVisible(newVal) {
            this.$emit('visibleChange', newVal);
        }
    },
    mounted() {
        this.$watch('visible', (newVal) => {
            if (newVal) {
                this.show();
            } else {
                this.hide();
            }
        });
    },
    methods: {
        show() {
            this.selfVisible = true;
        },
        hide() {
            this.selfVisible = false;
        }
    }
}