<template>
    <div
        :class="{ 'is-error' : v && v.$error, 'is-valid' : (v && !v.$error && !v.$invalid) }"
        class="form-input">
        <label 
            class="form-input__label">
            <slot />
        </label>

        <ul class="form-input__list">
            <li
                v-for="(option, index) in options"
                :key="index">               
                <label>
                    <input
                        type="checkbox"
                        :name="name"
                        :value="option.value"
                        @change="onChange">
                    {{ option.name }}
                </label>
            </li>
        </ul>

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
        name: "FormCheckboxList",
        mixins: [computedErrortext],
        props: {
            options: Array,
            name: String,
            errortexts: Object,
            v: Object
        },
        methods: {
            onChange(event) {
                this.$emit('input', event.target.value);
            }
        }
    };
</script>

<style lang="scss">
    .form-input {
        margin-bottom: 20px;
    }

    .form-input__list {
        margin: 0;
        padding: 0;

        li {
            list-style: none;
            margin: 0;
            padding: 0;
            font-size: 22px;
		    font-family: $font-custom;
        }
    }

    .form-input__label {   
        margin-right: 10px;
		font-size: 22px;     
		color: map-get($colors, 01);
		font-family: $font-custom;
		line-height: 1.6;
    }

    .form_input__error {
        display: inline-block;
        margin-left: 10px;
        color: red;
		font-family: $font-custom;
    }
</style>