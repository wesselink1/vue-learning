<template>
    <main class="modules">
        <h1 class="heading">Form modules</h1>

        <p class="paragraph">Using components with form elements. And emitting their value to the parent.</p>

        <FormRow
            :coupon="coupon"
            @input="coupon = $event">
            Coupon code
        </FormRow>
    </main>
</template>

<script>
    import FormRow from "../components/FormRow";

    export default {
        name: "FormModulesPage",
        components: {
            FormRow
        },
        data() {
            return {
                coupon: "FREEBIE"
            }
        }
    }
</script>

