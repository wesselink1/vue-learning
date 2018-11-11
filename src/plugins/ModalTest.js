import ModalTest from "@/components/ModalTest";

export default {
    install(Vue, options) {
        Vue.prototype.$modalTest = modalOptions => {
            return new Promise((resolve, reject) => {
                new Vue({
                    render: h => h(ModalTest, {
                        props: {
                            modalTestInit: true,
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