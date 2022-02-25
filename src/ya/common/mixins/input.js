const Change = 'change';

export default {
    methods: {
        changeHander(e) {
            this.$emit(Change, e);
        },
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        }
    }
}