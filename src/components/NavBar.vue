<template>
<nav class="footer-nav">
  <ul>
    <li
    :class="['material-icons-round',((page=='home')?'active':'')]"
    @click="changeNav('home')"
    >home</li>
    <li :class="['material-icons-round',((page=='favorite')?'active':'')]"
    @click="changeNav('favorite')">favorite</li>
    <li :class="['material-icons-round middle reflet',((page=='cart')?'active':'')]"
    @click="changeNav('cart')">shopping_cart</li>
    <div class="cursor">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.625 18.625" height="19.867" width="19.867"><path d="M0 0v18.625C.459 6.493 7.17.804 18.625 0z" fill-rule="evenodd"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.625 18.625" height="19.867" width="19.867"><path d="M0 0v18.625C.459 6.493 7.17.804 18.625 0z" fill-rule="evenodd"></path></svg>
    </div>
    <li :class="['material-icons-round',((page=='order')?'active':'')]"
    @click="changeNav('order')">sticky_note_2</li>
    <li :class="['material-icons-round',((page=='user')?'active':'')]"
    @click="changeNav('user')">person</li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    page: String
  },
  methods:{
    changeNav(value){
        this.$emit('nav-change',value)
    }
  }
}
</script>

<style scoped>
nav.footer-nav ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex: 1;
    margin: 0;
    max-width: 400px;
}
nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    background: var(--secondaryBg);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: env(safe-area-inset-bottom);
}

nav.footer-nav ul {
    padding: 5px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex: 1;
    margin: 0;
    max-width: 450px;
}

nav.footer-nav li {
    padding: 0.4em;
    font-size: 1.8rem;
    cursor: pointer;
    width: 1em;
    height: 1em;
    display: flex;
    align-items: center;
    color: #d0d0d0;
    border-radius: 0.8em;
    transition: color .2s;
}
.cursor {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1em;
    width: 2em;
    font-size: 2.3rem;
    color: var(--primaryBg);
    background: currentColor;
    border-radius: 0 0 100px 100px;
    z-index: 1;
    transition: transform 300ms ease;
}
.cursor svg:first-child {
    right: calc(100% - 1px);
    transform: scaleX(-1);
}
.cursor svg:last-child {
    left: calc(100% - 1px);
}
.cursor svg {
    position: absolute;
    top: 0;
    fill: currentColor;
    width: 0.4em;
    height: 0.4em;
}
nav li.material-icons-round.middle {
    margin-top: -1em;
    position: relative;
    z-index: 2;
    color:#fff!important;
    background: var(--color1);
    width: 2rem;
    height: 2rem;
    display: flex;
    border-radius: 2rem;
    align-items: center;
    justify-content: center;
}
nav li.material-icons-round.active{
  color: var(--color1);
}
nav li.material-icons-round.middle.reflet {
  animation: none;
    box-shadow: 0 3px 12px -1px var(--color1);
}
nav li.active{
  animation: nav-zoom 300ms;
}
@keyframes nav-zoom {
  from{
    transform: scale(0.8);
  }
  to{
  transform: scale(1);
  }
}
</style>
