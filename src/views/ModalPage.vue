<template>
    <div class="modal-page">
        <h1 class="modal-page__title">Fancy popup</h1>

        <p class="modal-page__cta">
            <a 
                href="javascript:;"
                @click="toggleModal"
                class="modal-page__link">
                Show popup
            </a>
        </p>

        <ModalWindow
            :showModal="showModalPopup"
            :showModalFooter="true"
            title="Fantastico!!">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure magni atque itaque ea reiciendis. Beatae atque animi consequuntur quas.</p>
        </ModalWindow>
    </div>
</template>

<script>
    import ModalWindow from "../components/ModalWindow";

    export default {
        components: {
            ModalWindow
        },
        data() {
            return {
                showModalPopup: false
            }
        },
        methods: {
            toggleModal() {
                this.showModalPopup = !this.showModalPopup;
            }
        }
    };
</script>

<style>
    .modal-page {

    }
</style>