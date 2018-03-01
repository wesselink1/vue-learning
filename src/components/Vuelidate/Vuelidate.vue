<template>
	<section class="vuelidate">
		<h1 class="vuelidate__title">Form validation using Vuelidate</h1>

		<p class="vuelidate__body">Using 3rd party form validation plugin to validate form fields. When they are invalid they show a CSS animation (shake).</p>

		<form>
			<div class="vuelidate-grid">
				<label class="vuelidate__label">Name</label>

				<div
					class="vuelidate__values"
					:class="{ 'do-shake' : $v.username.$error }">
					<input
						type="text"
						name="username"
						class="vuelidate__input"
						:class="{ 'has-error' : $v.username.$error, 'is-valid': (!$v.username.$error && $v.username.$dirty) }"
						@blur="$v.username.$touch()"
						v-model="username">
					<small class="vuelidate__error" v-if="$v.username.$error">Please enter you name</small>
				</div>

				<label class="vuelidate__label">E-mail</label>

				<div
					class="vuelidate__values"
					:class="{ 'do-shake' : $v.email.$error }">
					<input
						type="email"
						name="email"
						class="vuelidate__input"
						:class="{ 'has-error' : $v.email.$error, 'is-valid': (!$v.email.$error && $v.email.$dirty) }"
						@blur="$v.email.$touch()"
						v-model="email">
					<small class="vuelidate__error" v-if="$v.email.$error">Please enter an email address</small>
					<small class="vuelidate__error" v-if="!$v.email.email">Please provide a valid email address</small>
				</div>

				<button
					class="vuelidate__button"
					:disabled="$v.$invalid"
					@click.prevent="submitForm">
					Send form
				</button>
			</div>
		</form>
	</section>
</template>

<script>
	import { required, email, minLength } from "vuelidate/lib/validators";

	export default {
		data() {
			return {
				username: null,
				email: null
			}
		},
		validations: {
			username: {
				required,
			},
			email: {
				required,
				email
			}
		},
		methods: {
			submitForm() {
				alert("Form send");
			}
		}
	}
</script>

<style>
	.vuelidate__title,
	.vuelidate__sub-title,
	.vuelidate__body,
	.vuelidate__label,
	.vuelidate__error,
	.vuelidate__newsletter-list {
		font-family: "Roboto", sans-serif;
	}

	.vuelidate__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

	.vuelidate-grid {
		display: grid;
		grid-template-columns: 100px 1fr;
		grid-gap: 10px;
		max-width: 500px;
	}

	.vuelidate__label {
		font-weight: 300;
		padding-top: 15px;
	}

	.vuelidate__input {
		width: 100%;
		box-sizing: border-box;
		padding: 15px;
		border-radius: 8px;
		border: 2px solid #ccc;
	}

	.vuelidate__input.is-valid {
		border-color: green;
	}

	.vuelidate__input.has-error {
		border-color: red;
	}

	.vuelidate__error {
		display: block;
		margin-top: 10px;
		color: red;
		align-self: center;
	}

	.vuelidate__values {
		grid-column: 2;
	}

	.vuelidate__values.do-shake {
		-webkit-animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
		animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
	}

	.vuelidate__newsletter-list {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.vuelidate__newsletter-list label {
		cursor: pointer;
	}

	.vuelidate__newsletter-list li {
		margin-bottom: 10px;
	}

	.vuelidate__button {
		margin-top: 20px;
		padding: 15px 30px;
		color: white;
		cursor: pointer;
		font-size: 26px;
		border: 0;
		border-radius: 8px;
		background-color: deeppink;
		transition: background-color .3s;
		grid-column: 2;
		align-self: center;
	}

	.vuelidate__button[disabled] {
		color: #444;
		cursor: not-allowed;
		background-color: #ccc;
	}

	@keyframes shake {
		10%, 90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%, 80% {
			transform: translate3d(4px, 0, 0);
		}

		30%, 50%, 70% {
			transform: translate3d(-8px, 0, 0);
		}

		40%, 60% {
			transform: translate3d(8px, 0, 0);
		}
	}
</style>
