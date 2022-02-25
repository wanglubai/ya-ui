const Event_Toggle = 'toggle'
export default {
    model: {
        prop: 'visible',
        event: Event_Toggle
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isVisible: this.visible
        }
    },
    watch: {
        isVisible(newVal) {
            this.$emit(Event_Toggle, newVal);
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
            this.isVisible = true;
        },
        hide() {
            this.isVisible = false;
        }
    }
}