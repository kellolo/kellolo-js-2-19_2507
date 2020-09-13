<template>
  <div class="cart-form container">
    <section class="cart-form__column">
      <form>
        <h2>Shipping Adress</h2>
        <select required>
          <option>Bangladesh</option>
          <option>Bangladesh</option>
          <option>Bangladesh</option>
        </select>
        <input type="text" placeholder="State" />
        <input type="number" placeholder="Postcode / Zip" />
        <button>get a quote</button>
      </form>
    </section>
    <section class="cart-form__column">
      <form>
        <h2>coupon discount</h2>
        <p>Enter your coupon code if you have one</p>
        <input type="text" placeholder="State" />
        <button>Apply coupon</button>
      </form>
    </section>
    <div class="cart-form__total">
      <div class="cart-form__sub">
        <span>SUB TOTAL</span>
        <span>$900</span>
      </div>
      <div class="cart-form__grand">
        <span>GRAND TOTAL</span>
        <span>$900</span>
      </div>
      <button>proceed to checkout</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>