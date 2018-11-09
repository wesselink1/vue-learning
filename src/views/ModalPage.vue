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

        <ModalConfirm
            v-show="showDemoModal"
            @onConfirm="confirmDemoModal"
            @onCancel="cancelDemoModal"
            title="Console message">
            <p>Are you sure you want to display a console message?</p>
        </ModalConfirm>

        <ModalConfirm
            v-show="showBasicDemoModal"
            @onConfirm="showBasicDemoModal = false"
            @onCancel="showBasicDemoModal = false" />

        <p>
			<button
				class="button button--02"
				@click="confirmThis">
				Open modalTest
			</button>
		</p>
    </div>
</template>

<script>
    import ModalConfirm from "@/components/ModalConfirm";

    export default {
        name: "ModalPage",
        components: {
            ModalConfirm
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
            confirmThis() {
				this.$modalTest("Are you sure you want this to happen?")
					.then((response) => {
						console.log(`[modalTest] OK!`);
					})
					.catch((response) => {
						console.log(`[modalTest] Canceled!`);
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