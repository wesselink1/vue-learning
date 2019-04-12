<template>
    <main class="vuelidate-enhanced">
        <h1 class="heading">Vuelidate Enhanced</h1>

        <p class="paragraph">This examples uses form components, Vuelidate, and simple way to display different error messages.</p>

        <form
            @submit.prevent="onSubmit">

            <form-input
                placeholder="Pick a username"
                :errortexts="{ required: 'A username is required', minLen: 'A username must have at least 4 characters' }"
                v-model.trim="customer.username"
                :v="$v.customer.username">
                Username
            </form-input>

            <form-input
                placeholder="Your firstname"
                :errortexts="{ required: 'Your firstname please' }"
                v-model.trim="customer.firstname"
                :v="$v.customer.firstname">
                Firstname
            </form-input>            

            <form-input
                placeholder="Your lastname"
                :errortexts="{ required: 'Your lastname please' }"
                v-model.trim="customer.lastname"
                :v="$v.customer.lastname">
                Lastname
            </form-input>

            <form-input
                placeholder="Your e-mail address please"
                :errortexts="{ required: 'Your e-mail address is required', email: 'Please enter a valid e-mail address' }"
                v-model.trim="customer.email"
                type="email"
                :v="$v.customer.email">
                E-mail
            </form-input>

            <input
                :disabled="$v.$invalid"
                class="button button--02"
                type="submit"
                name="submit"
                id="submit"
                value="Send">
        </form>
    </main>
</template>

<script>
    import { required, email, minLength } from "vuelidate/lib/validators";
    import FormInput from "@/components/FormInput";

    export default {
        name: "VueEnhanced",
        components: {
            FormInput
        },
        data: () => ({
            customer: {
                username: "",
                firstname: "",
                lastname: "",
                email: ""
            }
        }),
        methods: {
            onSubmit() {
                console.log(this.customer);
            }
        },
        validations: {
            customer: {
                username: {
                    required,
				    minLen: minLength(4)
                },
                firstname: {
                    required
                },
                lastname: {
                    required
                },
                email: {
                    required,
                    email
                }
            }
        }
    };
</script>

<style>
    .vuelidate-enhanced {

    }
</style>