<template>
    <main class="vuelidate-enhanced">
        <section class="vuelidate-enhanced__form-elements">
            <h1 class="heading">Vuelidate Enhanced</h1>

            <p class="paragraph">This example uses form components, Vuelidate, and simple way to display different error messages.</p>

            <form
                @submit.prevent="onSubmit">

                <form-input
                    class="vuelidate-enhanced__form-row"
                    placeholder="Pick a username"
                    :errortexts="{ required: 'A username is required', minLen: 'A username must have at least 4 characters' }"
                    v-model.trim="customer.username"
                    :v="$v.customer.username">
                    Username
                </form-input>

                <form-input
                    class="vuelidate-enhanced__form-row"
                    placeholder="Your firstname"
                    :errortexts="{ required: 'Your firstname please' }"
                    v-model.trim="customer.firstname"
                    :v="$v.customer.firstname">
                    Firstname
                </form-input>            

                <form-input
                    class="vuelidate-enhanced__form-row"
                    placeholder="Your lastname"
                    :errortexts="{ required: 'Your lastname please' }"
                    v-model.trim="customer.lastname"
                    :v="$v.customer.lastname">
                    Lastname
                </form-input>

                <form-input
                    class="vuelidate-enhanced__form-row"
                    placeholder="Your e-mail address please"
                    :errortexts="{ required: 'Your e-mail address is required', email: 'Please enter a valid e-mail address' }"
                    v-model.trim="customer.email"
                    type="email"
                    :v="$v.customer.email">
                    E-mail
                </form-input>

                <form-textarea
                    class="vuelidate-enhanced__form-row"
                    placeholder="Your remarks"
                    v-model.trim="customer.remarks"
                    :errortexts="{ required: 'Please enter some remarks' } "
                    :v="$v.customer.remarks">
                    Remarks
                </form-textarea>

                <form-radio-list
                    class="vuelidate-enhanced__form-row"
                    v-model.number="customer.delivery"
                    :options="deliveryMethods"
                    name="delivery"
                    :errortexts="{ required: 'Please choose a delivery method' } "
                    :v="$v.customer.remarks">
                    Delivery
                </form-radio-list>

                <form-checkbox-list
                    class="vuelidate-enhanced__form-row"
                    v-model="customer.newsletters"
                    :options="newsLetterOptions"
                    name="newsletters"
                    :errortexts="{ required: 'Whant to receive our newsletters?' } ">
                    Subscribe
                </form-checkbox-list>

                <input
                    :disabled="$v.$invalid"
                    class="button button--02"
                    type="submit"
                    name="submit"
                    id="submit"
                    value="Send">
            </form>
        </section>

        <section class="vuelidate-enhanced__output">
            <h2 class="sub-heading vuelidate-enhanced__sub-title">Vuelidate object</h2>

            <code
                class="vuelidate-enhanced__code">
                <pre>{{ $v.customer }}</pre>
            </code>            
        </section>
    </main>
</template>

<script>
    import { required, email, minLength } from "vuelidate/lib/validators";
    import FormInput from "@/components/FormInput";
    import FormTextarea from "@/components/FormTextarea";
    import FormRadioList from "@/components/FormRadioList";
    import FormCheckboxList from "@/components/FormCheckboxList";

    export default {
        name: "VueEnhanced",
        components: {
            FormInput,
            FormTextarea,
            FormRadioList,
            FormCheckboxList
        },
        data: () => ({
            customer: {
                username: "",
                firstname: "",
                lastname: "",
                email: "",
                remarks: "",
                delivery: null,
                newsletters: []
            },
            deliveryMethods: [
                {
                    name: "Airmail",
                    value: 0,
                },
                {
                    name: "Continental delivery",
                    value: 1
                },
                {
                    name: "PostNL",
                    value: 2
                }
            ],
            newsLetterOptions: [
                {
                    name: "Product updates",
                    value: "product"
                },
                {
                    name: "Monthly newsletter",
                    value: "montly"
                },
                {
                    name: "Anual shareholders newsletter",
                    value: "anual"
                },
            ]
        }),
        methods: {
            onSubmit() {
            
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
                },
                remarks: {
                    required
                },
                delivery: {
                    required
                },
                newsletters: {
                    required
                }
            }
        }
    };
</script>

<style>
    .vuelidate-enhanced__form-row {
        display: grid;
        grid-template-columns: 150px 1fr 1fr;
        align-items: center;
    }

    .vuelidate-enhanced {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 40px;
    }

    .vuelidate-enhanced__code {
        display: inline-block;
        max-height: 400px;
        overflow-y: auto;
        font-family: courier;
        font-size: 20px;
        border: 1px solid gray;
        padding: 20px;
        border-radius: 10px;
    }
</style>