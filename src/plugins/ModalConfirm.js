import ModalConfirm from "@/components/ModalConfirm";

export default {
    install(Vue, options) {
        Vue.prototype.$modalConfirm = modalOptions => {
            return new Promise((resolve, reject) => {
                new Vue({
                    render: h => h(ModalConfirm, {
                        props: {
                            modalConfirmInit: true,
                            options: modalOptions
                        },
                        on: {
                            onConfirm() {
                                resolve();
                            },
                            onCancel() {
                                reject();
                            }
                        }
                    })
                }).$mount(document.body.appendChild(document.createElement('div')));
            });
        }
    }
}