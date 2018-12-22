<template>
    <transition
        name="modal-confirm--fade">
        <div
            v-if="showModalConfirm"
            class="modal-confirm">
            <div
                role="dialog"
                aria-labelledby="modalConfirmTitle"
                :aria-describedby="options.description ? 'modalConfirmDescription': false"
                class="modal-confirm__block">

                <div class="modal-confirm__header">
                    <h2
                        id="modalConfirmTitle"
                        class="modal-confirm__title">
                        {{ options.title }}
                    </h2>
                </div>         

                <div
                    v-if="options.description"
                    id="modalConfirmDescription"
                    class="modal-confirm__body">
                    {{ options.description }}
                </div>       

                <div class="modal-confirm__footer">
                    <button
                        @click="cancel"
                        aria-label="Cancel modal"
                        class="modal-confirm__button button button--03">
                        {{ options.cancelButtonLabel || "Cancel" }}
                    </button>

                    <button
                        @click="confirm"
                        aria-label="Confirm modal"
                        class="modal-confirm__button button button--02">
                        {{ options.okButtonLabel || "Ok" }}
                    </button>
                </div>
            </div>
        </div>    
    </transition>
</template>

<script>
    export default {
        name: "ModalConfirm",
        props: {
            options: {
                type: Object,
                required: true
            },
            modalConfirmInit: {
                type: Boolean,
                default: false
            }
        },
        created() {
            document.addEventListener('keydown', (e) => {
                if(e.key === 'Escape') {
                    this.cancel();
                }
            });
        },
        data() {
            return {
                showModalConfirm: this.modalConfirmInit
            }
        },
        methods: {
            confirm() {
                this.showModalConfirm = false;
                this.$emit("onConfirm");
            },
            cancel() {
                this.showModalConfirm = false;
                this.$emit("onCancel");
            }
        }
    };
</script>

<style lang="scss">
    body.has-modal-open {
        .app__container {
            filter: blur(4px);
        }
    }

    .modal-confirm {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        @include flexbox;
        @include align-items(center);
        @include justify-content(center);
        justify-content: center;
        background-color: rgba(0, 0, 0, .50);
    }

    .modal-confirm--fade-enter,
    .modal-confirm--fade-leave-active {
        opacity: 0;
    }

    .modal-confirm--fade-enter-active,
    .modal-confirm--fade-leave-active {
        transition: opacity .3s ease;
    }

    .modal-confirm__block {
        position: relative;
        min-width: 20vw;
        max-width: 75vw;
        padding: 20px;
        border-radius: 10px;
        font-family: $font-custom;
        background-color: white;
        box-shadow: 0 5px 5px 0px rgba(0,0,0, .2);

        @include respond-to-min('tablet') {
            max-width: 50vw;
        }
    }

    .modal-confirm__title {
        font-size: 20px;
        columns: black;
        border-bottom: 1px solid #444;
        padding-bottom: 10px;
    }

    .modal-confirm__button {
        cursor: pointer;
    }

    .modal-confirm__footer {
        @include flexbox;
        @include justify-content(flex-end);
        margin-top: 50px;

        .button + .button {
            margin-left: 20px;
        }
    }   
</style>