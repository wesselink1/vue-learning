export default {
    computed: {
        errortext() {
            if (this.v && this.v.$error) {
                for (let key in this.errortexts) {
                    if (this.errortexts.hasOwnProperty(key)) {
                        if (this.v[key] === false) {
                            return this.errortexts[key];
                        }
                    }
                }
            }
        }
    }
}