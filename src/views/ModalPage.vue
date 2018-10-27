<template>
    <div class="modal-page">
        <h1 class="heading">Fancy popup</h1>

        <p class="modal-page__cta">
            <button
                class="button button--01"
                @click="showModal = true">
                Open modal window
            </button>
        </p>

        <ModalWindow
            v-show="showModal"
            @onConfirm="confirmDelete"
            @onCancel="showModal = false"
            title="Delete record">
            <p>Are you sure you want to delete the record?</p>
        </ModalWindow>
    </div>
</template>

<script>
    import ModalWindow from "@/components/ModalWindow";

    export default {
        name: "ModalPage",
        components: {
            ModalWindow
        },
        data() {
            return {
                showModal: false
            }
        },
        methods: {
            confirmDelete() {
                this.showModal = false;
                console.log("Modal window action: confirmed");
            }
        }
    };
</script>

<style>
    .modal-page {

    }
</style>