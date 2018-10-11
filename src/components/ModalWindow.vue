<template>
    <transition
        name="modal-window--fade">
        <div 
            class="modal-window">
            <div
                role="dialog"
                aria-labelledby="modalWindowTitle"
                aria-describedby="modalWindowDescription"
                class="modal-window__container">
                <a
                    @click.prevent="close"
                    v-on:keydown.esc="console.log('escape key pressed')"
                    href="javascript:;"
                    class="modal-window__close-button"
                    aria-label="Close modal">
                    &times;
                </a>

                <div class="modal-window__header">
                    <h2
                        id="modalWindowTitle"
                        class="modal-window__title">
                        {{ title }}
                    </h2>
                </div>

                <div
                    id="modalWindowDescription"
                    class="modal-window__body">
                    <slot>Modal content</slot>
                </div>

                <div
                    v-if="showModalFooter"
                    class="modal-window__footer">
                    <button
                        class="button"
                        @click.prevent="close"
                        aria-label="Close modal">
                        Cancel
                    </button>

                    <button
                        class="button button--02"
                        @click.prevent="close"
                        aria-label="Close modal">
                        OK
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ModalWindow",
        props: {
            title: {
                type: String,
                default: "Modal title"
            },
            showModalFooter: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            close() {
                this.$emit("onClose");
            }
        }
    };
</script>

<style>   
    .modal-window {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, .50);
    }

    .modal-window__container {
        position: relative;
        min-width: 40vw;
        max-width: 80vw;
        padding: 20px;
        border-radius: 10px;
        background-color: white;
    }

    .modal-window__close-button {
        position: absolute;
        top: 0px;
        right: 10px;
        font-size: 30px;
        font-weight: 700;
        color: black;
        text-decoration: none
    }

    .modal-window--fade-enter,
    .modal-window--fade-leave-active {
        opacity: 0;
    }

    .modal-window--fade-enter-active,
    .modal-window--fade-leave-active {
        transition: opacity .3s ease;
    }
</style>