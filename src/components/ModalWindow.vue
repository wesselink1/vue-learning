<template>
    <div
        v-if="showModal"
        class="modal-window">
        <a
            @click="showModal = false"
            href="javascript:;">&times;</a>

        <div class="modal-window__header">
            <h2 class="modal-window__title">{{ title }}</h2>
        </div>

        <div class="modal-window__body">
            <slot>Modal content</slot>
        </div>

        <div
            v-if="showModalFooter"
            class="modal-window__footer">
            <button
                @click="showModal = false">
                Cancel
            </button>

            <button
                @click="showModal = false">
                OK
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            showModal: {
                type: Boolean,
                default: false
            },
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

        }
    };
</script>

<style>
    .modal-window {

    }
</style>