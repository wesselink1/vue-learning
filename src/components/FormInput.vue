<template>
    <div
        :class="{ 'is-error' : v && v.$error, 'is-valid' : (v && !v.$error && !v.$invalid) }"
        class="form-input">
        <label 
            class="form-input__label">
            <slot />
        </label>

        <input
            class="form-input__input"
            :class="{ 'is-error' : v && v.$error, 'is-valid' : (v && !v.$error && !v.$invalid) }"
            :type="type"
            :placeholder="placeholder"
            :value="value"
            @input="onInput"
            @blur="onBlur">

        <span
            v-show="v && v.$error"
            class="form_input__error">
            {{ errortext }}
        </span>
    </div>
</template>

<script>
    import computedErrortext from "@/mixins/computedErrortext";

    export default {
        name: "FormInput",
        mixins: [computedErrortext],
        props: {
            value: String,
            errortexts: Object,
            v: Object,
            placeholder: String,
            type: {
                type: String,
                default: "text"
            }
        },
        methods: {
            onInput(event) {
                this.$emit('input', event.target.value);
            },
            onBlur() {
                if(this.v && this.v.$touch) {
                    this.v.$touch();
                } else {
                    this.$emit("blur");
                }
            }
        }
    };
</script>

<style lang="scss">
    .form-input {
        margin-bottom: 20px;
    }

    .form-input__label {   
        margin-right: 10px;
		font-size: 22px;     
		color: map-get($colors, 01);
		font-family: $font-custom;
		line-height: 1.6;
    }

    .form-input__input {
        font-size: 18px;
        padding: 10px;
        border: 2px solid grey;
        border-radius: 10px;

        &.is-valid {
            border-color: green;
        }

        &.is-error {
            border-color: red;
        }
    }

    .form_input__error {
        display: inline-block;
        margin-left: 10px;
        color: red;
		font-family: $font-custom;
    }
</style>