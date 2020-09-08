<template>
<section class="checkout checkout_first center">
    <div class="checkout__border">
        <h3 @click="checkoutShow = !checkoutShow">01. Shipping Adress</h3>
        <div class="checkout__titles" v-show="checkoutShow">
            <article class="checkout__left">
                <h4 class="checkout__title">Check as a guest or register</h4>
                <h5 class="checkout__subtitle">Register with us for future convenience</h5>
                <form class="checkout__form">
                    <input type="radio" name="checkout" class="radio" id="radio">
                    <label for="radio" class="checkout__label">checkout as guest</label>
                    <br>
                    <input type="radio" name="checkout" class="radio" id="radio1">
                    <label for="radio1" class="checkout__label">register</label>
                </form>
                <h4 class="checkout__title">register and save time!</h4>
                <h5 class="checkout__subtitle">Register with us for future convenience</h5>
                <h4 class="checkout__text"><i class="fas fa-angle-double-right"></i>Fast and easy checkout</h4>
                <h4 class="checkout__text"><i class="fas fa-angle-double-right"></i>Easy access to your order history and status</h4>
                <a href="#" class="checkout__button">Continue</a>
            </article>
            <article class="checkout__right">
                <h4 class="checkout__title">Already registed?</h4>
                <h5 class="checkout__subtitle">Please log in below</h5>
                <h4 class="checkout__label checkout__label_input">EMAIL ADDRESS <span>*</span></h4>
                <input class="checkout__input" type="email" placeholder="example@gmail.com" required>
                <h4 class="checkout__label checkout__label_input">PASSWORD <span>*</span></h4>
                <input class="checkout__input" type="password" placeholder="*******" required>
                <h4 class="checkout__subtitle_required">* Required Fileds</h4>
                <div class="checkout__links">
                    <a href="#" class="checkout__button">Log in</a>
                    <a href="#" class="checkout__link">Forgot Password ?</a>
                </div>
            </article>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            checkoutShow: false
        }
    },
}
</script>

<style>

</style>