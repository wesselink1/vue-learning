export default {
    install(Vue, options) {
        Vue.prototype.$modalConfirm = modalOptions => {
            return new Promise((resolve, reject) => {
                if(confirm(modalOptions)) {
                    resolve("User clicked Yes!!");
                } else {
                    reject("Ohh no!!");
                }
            });
        }
    }
}