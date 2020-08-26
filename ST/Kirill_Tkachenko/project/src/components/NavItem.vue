<template>
    <div class="navAll">
        <a class="nav-link" :href="item.link">{{ item.name }}</a>
        <div class="dropNav" v-if="item.hasDropNav">
            <div class="dropNavIn">
                <div class="dropNavItem">{{ item.name }}</div>
                <a href="#" class="dropNavItem" type="button">Dresses</a>
                <a href="#" class="dropNavItem" type="button">Tops</a>
                <a href="#" class="dropNavItem" type="button">Sweaters/Knits</a>
                <a href="#" class="dropNavItem" type="button">Jackets/Coats</a>
                <a href="#" class="dropNavItem" type="button">Blazers</a>
                <a href="#" class="dropNavItem" type="button">Denim</a>
                <a href="#" class="dropNavItem" type="button">Leggings/Pants</a>
                <a href="#" class="dropNavItem" type="button">Skirts/Shorts</a>
                <a href="#" class="dropNavItem" type="button">Accessories</a>
            </div>
            <div class="dropNavIn">
                <div class="dropNavItem">{{ item.name }}</div>
                <a href="#" class="dropNavItem" type="button">Dresses</a>
                <a href="#" class="dropNavItem" type="button">Tops</a>
                <a href="#" class="dropNavItem" type="button">Sweaters/Knits</a>
                <a href="#" class="dropNavItem" type="button">Jackets/Coats</a>
                <a href="#" class="dropNavItem" type="button">Blazers</a>
                <div class="dropNavItem">{{ item.name }}</div>
                <a href="#" class="dropNavItem" type="button">Denim</a>
                <a href="#" class="dropNavItem" type="button">Leggings/Pants</a>
                <a href="#" class="dropNavItem" type="button">Skirts/Shorts</a>
            </div>
            <div class="dropNavIn">
                <div class="dropNavItem">{{ item.name }}</div>
                <a href="#" class="dropNavItem" type="button">Dresses</a>
                <a href="#" class="dropNavItem" type="button">Tops</a>
                <a href="#" class="dropNavItem" type="button">Sweaters/Knits</a>
                <a href="#" class="dropNavItem" type="button">Jackets/Coats</a>
                <a href="">
                    <div>Super sale!</div>
                    <img src="https://raw.githubusercontent.com/Cerzon/assets/master/imgs/navDrop.jpg" alt="nav img">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavItem",
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style>

</style>