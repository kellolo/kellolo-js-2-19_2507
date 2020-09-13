<template>
    <section class="clothes center">
        <section class="single__page__product__img center">
            <img src="../assets/imgs/single.png">
        </section>
            <div class="clothes__content">
                <div class="clothes__title">
                    <h4 class="clothes__h4">WOMEN COLLECTION</h4>
                    <div class="clothes__line"></div>
                    <h2 class="clothes__h2">Moschino Cheap And Chic</h2>
                </div>
                <p class="clothes__full__description">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.</p>
                <div class="clothes__stats">
                    <h3 class="clothes__material">MATERIAL:<span class="clothes__stats__text">COTTON</span></h3>
                    <h3 class="clothes__material">DESIGNER:<span class="clothes__stats__text">BINBURHAN</span></h3>
                </div>
                <h3 class="clothes__price">&#x24;561</h3>
                <div class="clothes__parameters">
                    <div class="choose">
                        <h3 class="choose__title">CHOOSE COLOR</h3>
                        <input name="color" list="colors" placeholder = Red>
                        <datalist id="colors">
                            <option value="Red"/>
                            <option value="Blue"/>
                            <option value="Yellow"/>
                        </datalist>
                    </div>
                    <div class="choose">
                        <h3 class="choose__title">CHOOSE SIZE</h3>
                        <input name="size" list="sizes" placeholder = M>
                        <datalist id="sizes">
                            <option value="XS"/>
                            <option value="S"/>
                            <option value="M"/>
                            <option value="L"/>
                            <option value="XL"/>
                            <option value="XXL"/>
                        </datalist>
                    </div>
                    <div class="choose">
                        <h3 class="choose__title">QUANTITY</h3>
                        <input name="quantity" list="numbers" placeholder = 1>
                        <datalist id="numbers">
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                        </datalist>
                    </div>			
                </div>
                <div class="clothes__buy__button center">
                    <img src="../assets/imgs/cart2.png">	
                        <a href="Shoping-cart.html"><h3 class="clothes__buy__text">Add to cart</h3></a>
                </div>
            </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>