<template>
    <transition
        name="modal-test--fade">
        <div
            v-if="showModalTest"
            class="modalTest">
            <div
                role="dialog"
                aria-labelledby="modalWindowTitle"   
                class="modalTest__block">
                <h2
                    id="modalWindowTitle"
                    class="modalTest__title">{{ title }}</h2>

                <nav class="modalTest__footer">
                    <button
                        @click="cancel"
                        aria-label="Cancel modal"
                        class="modalTest__button button button--03">
                        Cancel
                    </button>

                    <button
                        @click="confirm"
                        aria-label="Confirm modal"
                        class="modalTest__button button button--02">
                        Ok
                    </button>
                </nav>
            </div>
        </div>    
    </transition>
</template>

<script>
    export default {
        name: "ModalTest",
        props: {
            title: {
                type: String,
                default: "Are you sure?"
            },
            modalTestInit: {
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
                showModalTest: this.modalTestInit
            }
        },
        methods: {
            confirm() {
                this.showModalTest = false;
                this.$emit("onConfirm");
            },
            cancel() {
                this.showModalTest = false;
                this.$emit("onCancel");
            }
        }
    };
</script>

<style lang="scss">
    .modalTest {
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

    .modal-test--fade-enter,
    .modal-test--fade-leave-active {
        opacity: 0;
    }

    .modal-test--fade-enter-active,
    .modal-test--fade-leave-active {
        transition: opacity .3s ease;
    }

    .modalTest__block {
        position: relative;
        min-width: 20vw;
        max-width: 50vw;
        padding: 20px;
        border-radius: 10px;
        font-family: $font-custom;
        background-color: white;
        box-shadow: 0 5px 5px 0px rgba(0,0,0, .2);
    }

    .modalTest__title {
        font-size: 20px;
        columns: black;
        border-bottom: 1px solid #444;
        padding-bottom: 10px;
    }

    .modalTest__button {
        cursor: pointer;
    }

    .modalTest__footer {
        @include flexbox;
        @include justify-content(flex-end);
        margin-top: 50px;

        .button + .button {
            margin-left: 20px;
        }
    }   
</style>