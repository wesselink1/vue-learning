<template>
    <div class="modal-page">
        <h1 class="modal-page__title">Fancy popup</h1>

        <ul class="modal-page__cta">
            <li>
                <a 
                    href="javascript:;"
                    @click="toggleInfoModal"
                    class="modal-page__link">
                    Toggle info modal
                </a>
            </li>
            <li>
                <a 
                    href="javascript:;"
                    @click="toggleConfirmationModal"
                    class="modal-page__link">
                    Toggle confirmation modal
                </a>
            </li>
        </ul>

        <ModalWindow
            v-show="showInfoModal"
            @onClose="closeInfoModal"
            title="Fantastico!!">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure magni atque itaque ea reiciendis. Beatae atque animi consequuntur quas.</p>
        </ModalWindow>

        <ModalWindow
            v-show="showConfirmationModal"
            @onClose="closeConfirmationModal"
            title="Delete record?"
            :showModalFooter="true">
            <p>Are you sure you want to delete the record?</p>
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
                showInfoModal: false,
                showConfirmationModal: false,
            }
        },
        methods: {
            toggleInfoModal() {
                this.showInfoModal = !this.showInfoModal;
            },
            toggleConfirmationModal() {
                this.showConfirmationModal = !this.showConfirmationModal;
            },
            closeInfoModal() {
                this.showInfoModal = false;
            },
            closeConfirmationModal() {
                this.showConfirmationModal = false;
            }
        }
    };
</script>

<style>
    .modal-page {

    }
</style>