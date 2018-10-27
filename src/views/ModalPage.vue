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

        <ModalConfirm
            v-show="showDemoModal"
            @onConfirm="confirmDemoModal"
            @onCancel="cancelDemoModal"
            title="Console message">
            <p>Are you sure you want to display a console message?</p>
        </ModalConfirm>
    </div>
</template>

<script>
    import ModalConfirm from "@/components/ModalConfirm";

    export default {
        name: "ModalPage",
        components: {
            ModalConfirm
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