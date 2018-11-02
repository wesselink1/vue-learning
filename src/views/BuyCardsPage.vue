<template>
	<main class="cards">
		<h1 class="heading">Buy cards, calculation demo</h1>

		<p class="paragraph">
			Using parent and child components. Repeating child components based
			on data array in parent. And having the child <code>$emit()</code> an event to parent.			
		</p>

		<ul class="cards__list">
			<li>When going <strong>over {{ limit[0] }}, the cards will turn orange</strong>.</li>
			<li>Going <strong>over {{ limit[1] }} will turn them red</strong>.</li>
			<li>And going <strong>over {{ limit[2] }} will disable</strong> the 'Buy card' -button.</li>
		</ul>

		<h2 class="sub-heading">Vuex stored total: {{ cardsTotal | euroCurrency }}</h2>

		<p class="cards__reset">
			<button
				:disabled="cardsTotal == 0"
				class="button button--02"
				@click="showConfirmResetTotalModal = true">
				Reset total
			</button>
		</p>

		<div class="cards__grid">
			<CardItem
				v-for="(card, index) in cards"
				:key="index"
				:card="card"
				:cardsTotal="cardsTotal"
				:limit="limit"
				@incrementCardsTotal="incrementCardsTotal" />
		</div>

		<ModalConfirm
            v-show="showConfirmResetTotalModal"
            @onConfirm="confirmResetTotal"
            @onCancel="showConfirmResetTotalModal = false"
            title="Reset total">
            <p>Reset the total to play again?</p>
        </ModalConfirm>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";
	import { firebase } from "@/db";
	import CardItem from "@/components/CardItem";
	import ModalConfirm from "@/components/ModalConfirm";

	export default {
		name: "BuyCardsPage",
		components: {
			CardItem,
			ModalConfirm
		},
		data: () => ({
			showConfirmResetTotalModal: false
        }),
		methods: {
			...mapMutations([
				"incrementCardsTotal"
			]),
			confirmResetTotal() {
				this.$store.commit("resetCardsTotal");
				this.showConfirmResetTotalModal = false;
			}
		},
		computed: {
			...mapGetters([
				"cardsTotal",
				"limit"
			])
		},
		firebase
	};
</script>

<style lang="scss">
	.cards__list,
	.cards__total {
		font-family: $font-custom;
	}

	.cards__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-auto-rows: 200px;
		grid-gap: 10px;
	}

	.cards__total {
		font-size: 42px;
	}
</style>
