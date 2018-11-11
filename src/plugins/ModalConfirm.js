import ModalConfirm from "@/components/ModalConfirm";

export default {
    install(Vue, config) {
        const optionsDefaults = {
            bodyClass: "has-modal-open"
        }

        const options = { ...optionsDefaults, ...config }

        Vue.prototype.$modalConfirm = modalOptions => {
            const bodyTag = document.getElementsByTagName("BODY")[0];
            bodyTag.classList.add(options.bodyClass);

            return new Promise((resolve, reject) => {
                new Vue({
                    render: h => h(ModalConfirm, {
                        props: {
                            modalConfirmInit: true,
                            options: modalOptions
                        },
                        on: {
                            onConfirm() {
                                bodyTag.classList.remove(options.bodyClass);
                                resolve();
                            },
                            onCancel() {
                                bodyTag.classList.remove(options.bodyClass);
                                reject();
                            }
                        }
                    })
                }).$mount(document.body.appendChild(document.createElement('div')));
            });
        }
    }
}