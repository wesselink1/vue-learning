<template>
    <transition
        name="modal-test--fade">
        <div
            v-if="showModalTest"
            class="modal-test">
            <div
                role="dialog"
                aria-labelledby="modalWindowTitle"                
                aria-describedby="modalWindowDescription"  
                class="modal-test__block">

                <div class="modal-test__header">
                    <h2
                        id="modalWindowTitle"
                        class="modal-test__title">
                        {{ options.title }}
                    </h2>
                </div>         

                <div
                    v-if="options.description"
                    id="modalWindowDescription"
                    class="modal-test__body">
                    {{ options.description }}
                </div>       

                <div class="modal-test__footer">
                    <button
                        @click="cancel"
                        aria-label="Cancel modal"
                        class="modal-test__button button button--03">
                        Cancel
                    </button>

                    <button
                        @click="confirm"
                        aria-label="Confirm modal"
                        class="modal-test__button button button--02">
                        Ok
                    </button>
                </div>
            </div>
        </div>    
    </transition>
</template>

<script>
    export default {
        name: "ModalTest",
        props: {
            options: {
                type: Object,
                required: true
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
    .modal-test {
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

    .modal-test__block {
        position: relative;
        min-width: 20vw;
        max-width: 50vw;
        padding: 20px;
        border-radius: 10px;
        font-family: $font-custom;
        background-color: white;
        box-shadow: 0 5px 5px 0px rgba(0,0,0, .2);
    }

    .modal-test__title {
        font-size: 20px;
        columns: black;
        border-bottom: 1px solid #444;
        padding-bottom: 10px;
    }

    .modal-test__button {
        cursor: pointer;
    }

    .modal-test__footer {
        @include flexbox;
        @include justify-content(flex-end);
        margin-top: 50px;

        .button + .button {
            margin-left: 20px;
        }
    }   
</style>