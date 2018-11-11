<template>
    <div class="modal-page">
        <h1 class="heading">Modal window</h1>

        <p class="modal-page__cta">
            <button
                class="button button--01"
                @click="showDemoModal = true">
                Open demo confirm modal
            </button>
        </p>
        
        <p>
            <button
                class="button button--01"
                @click="showBasicDemoModal = true">
                Open basic demo confirm modal
            </button>
        </p>       

        <ModalWindow
            v-show="showDemoModal"
            @onConfirm="confirmDemoModal"
            @onCancel="cancelDemoModal"
            title="Console message">
            <p>Are you sure you want to display a console message?</p>
        </ModalWindow>

        <ModalWindow
            v-show="showBasicDemoModal"
            @onConfirm="showBasicDemoModal = false"
            @onCancel="showBasicDemoModal = false" />

        <p>
			<button
				class="button button--02"
				@click="showConfirmModal">
				Open modalConfirm
			</button>
		</p>
    </div>
</template>

<script>
    import ModalWindow from "@/components/ModalWindow";

    export default {
        name: "ModalPage",
        components: {
            ModalWindow
        },
        data: () => ({
            showDemoModal: false,
            showBasicDemoModal: false
        }),        
        methods: {
            confirmDemoModal() {
                this.showDemoModal = false;
            },
            cancelDemoModal() {
                this.showDemoModal = false;
            },
            showConfirmModal() {
				this.$modalConfirm({ title: "Are you sure you want this to happen?", description: "Whahaha" })
					.then((response) => {
						console.log(`[modalConfirm] OK!`);
					})
					.catch((response) => {
						console.log(`[modalConfirm] Canceled!`);
					});
			}
        }
    };
</script>

<style lang="scss">
    .modal-page__cta {
        .button + .button {
            margin-left: 20px;
        }
    }
</style>