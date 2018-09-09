<template>
    <div class="form-row">
        <label class="form-row__label">
            <slot></slot>
        </label>

        <div class="fields">
            <input
                type="text"
                class="form-row__input-text"
                :value="coupon"
                @input="updateCode($event.target.value)">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            coupon: String
        },
        methods: {
            updateCode(coupon) {
                this.$emit('input', coupon);
            }
        }
    };
</script>

<style lang="scss">
   .form-row {
        @include flexbox;
        @include align-items(center);
    }

    .form-row__label {
        font-family: $font-custom;
        margin-right: 20px;
        font-weight: 300;
    }

    .form-row__input-text {
        width: 100%;
		box-sizing: border-box;
		padding: 15px;
		border-radius: $border-radius;
		border: 2px solid #ccc;
    }
</style>