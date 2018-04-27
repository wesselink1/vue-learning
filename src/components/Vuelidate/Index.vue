<template>
	<section class="vuelidate">
		<h1 class="heading">Form validation using Vuelidate</h1>

		<p class="paragraph">Using 3rd party form validation plugin to validate form fields. When they are invalid they show a CSS animation (shake).</p>

		<form>
			<div class="vuelidate-grid">
				<label 
					class="vuelidate__label vuelidate__label--input-field"
					:class="{ 'has-error' : $v.username.$error, 'is-valid' : (!$v.username.$error && $v.username.$dirty) }">
					Name
				</label>

				<div
					class="vuelidate__values"
					:class="{ 'do-shake' : $v.username.$error }">
					<input
						type="text"
						name="username"
						class="vuelidate__input"
						:class="{ 'has-error' : $v.username.$error, 'is-valid' : (!$v.username.$error && $v.username.$dirty) }"
						@blur="$v.username.$touch()"
						v-model="username">
						
					<small
						class="vuelidate__error"
						v-if="$v.username.$error">
						Please enter you name
					</small>
				</div>

				<label 
					class="vuelidate__label vuelidate__label--input-field"
					:class="{ 'has-error' : $v.email.$error, 'is-valid' : (!$v.email.$error && $v.email.$dirty) }">
					E-mail
				</label>

				<div
					class="vuelidate__values"
					:class="{ 'do-shake' : $v.email.$error }">
					<input
						type="email"
						name="email"
						class="vuelidate__input"
						:class="{ 'has-error' : $v.email.$error, 'is-valid' : (!$v.email.$error && $v.email.$dirty) }"
						@blur="$v.email.$touch()"
						v-model="email">

					<small
						class="vuelidate__error"
						v-if="$v.email.$error">
						Please enter an email address
					</small>

					<small 
						class="vuelidate__error"
						v-if="!$v.email.email">
						Please provide a valid email address
					</small>
				</div>

				<label
					class="vuelidate__label vuelidate__label--input-field"
					:class="{ 'has-error' : $v.age.$error, 'is-valid' : (!$v.age.$error && $v.age.$dirty) }">
					Age
				</label>

				<div
					class="vuelidate__values"
					:class="{ 'do-shake' : $v.age.$error }">
					<input 
						type="number" 
						class="vuelidate__input"
						:class="{ 'has-error' : $v.age.$error, 'is-valid' : (!$v.age.$error && $v.age.$dirty) }"
						v-model.number="age"
						:placeholder="'Minimum age is ' +  $v.age.$params.minVal.min"
						@blur="$v.age.$touch()">

					<small
						class="vuelidate__error"
						v-if="$v.age.$error">
						Minimum age is {{ $v.age.$params.minVal.min }}
					</small>
				</div>

				<label
					class="vuelidate__label"
					:class="{ 'is-valid' : terms }">
				 	Terms
				</label>

				<div
					class="vuelidate__values"
					:class="{ 'do-shake' : $v.terms.$error }">
					<label 
						:class="{ 'is-valid' : terms }">
						<input 
							type="checkbox"
							v-model="terms"
							@change="$v.terms.$touch()">
							I accept the terms of usage
					</label>

					<small
						class="vuelidate__error"
						v-if="$v.terms.$error">
						You must accept our terms and conditions to proceed
					</small>
				</div>

				<button
					class="vuelidate__button button button--02"
					:disabled="$v.$invalid"
					@click.prevent="submitForm">
					Send form
				</button>

				<div class="vuelidate__label">Vuelidate validation object</div>

				<div class="vuelidate__values">
					<pre>{{ $v }}</pre>
				</div>
			</div>
		</form>
	</section>
</template>

<script>
	import { required, email, minValue, minLength } from "vuelidate/lib/validators";

	export default {
		data() {
			return {
				age: null,
				email: null,
				terms: false,
				username: null
			}
		},
		validations: {
			age: {
				required,
				minVal: minValue(18)
			},
			email: {
				required,
				email
			},
			terms: {
				required
			},
			username: {
				required,
			}
		},
		methods: {
			submitForm() {
				alert("Form send");
			}
		}
	};
</script>

<style lang="scss">
	@import "../../scss/style";

	.vuelidate__label,
	.vuelidate__error,
	.vuelidate__newsletter-list,
	.vuelidate__values {
		font-family: $font-custom;
	}

	.vuelidate-grid {
		@include display-grid;
		@include grid-template-columns(200px 1fr);
		grid-gap: 20px;
		max-width: 600px;
	}

	.vuelidate__label {
		font-weight: 300;

		&.is-valid {
			color: green;
		}

		&.has-error {
			color: red;
		}
	}

	.vuelidate__label--input-field {
		padding-top: 15px;
	}

	.vuelidate__input {
		width: 100%;
		box-sizing: border-box;
		padding: 15px;
		border-radius: $border-radius;
		border: 2px solid #ccc;

		&.is-valid {
			border-color: green;
		}	

		&.has-error {
			border-color: red;
		}
	}		

	.vuelidate__error {
		display: block;
		margin-top: 10px;
		color: red;
		@include align-self(center);
	}

	.vuelidate__values {
		@include grid-column(2);

		.is-valid {
			color: green;
		}
	}

	.vuelidate__values.do-shake {
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
		grid-column: 2;
		@include align-self(center);
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
