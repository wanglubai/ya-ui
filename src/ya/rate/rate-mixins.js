export default {
    props: {
        index: {
            type: Number,
            default: 0
        }
    },
    computed: {
        isActivate() {
            if (this.index <= this.$parent.index) {
                return true;
            }
            return false;
        }
    }
}