<template>
    <div class="modal-page">
        <h1 class="heading">Fancy popup</h1>

        <p class="modal-page__cta">
            <button
                class="button button--01"
                @click="showDemoModal = true">
                Open modal window
            </button>
        </p>

        <ModalWindow
            v-show="showDemoModal"
            @onConfirm="confirmDemoModal"
            @onCancel="cancelDemoModal"
            title="Demo modal">
            <p>Are you sure you want to display a console message?</p>
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
                showDemoModal: false
            }
        },
        methods: {
            confirmDemoModal() {
                this.showDemoModal = false;
                console.log("[modal window] confirmed");
            },
            cancelDemoModal() {
                this.showDemoModal = false
                console.log("[modal window] canceled");
            }
        }
    };
</script>

<style>
    .modal-page {

    }
</style>