<template lang="html">
  <div
    class="nav"
    v-bind:style="{'background-color': bgColor}">

    <nuxt-link to="/" class="logo">
      <Logo
        v-bind:fillColor="'#f1ffe7'" />
    </nuxt-link>

    <div class="right-menu">
      <Primary
        v-on:click.native="openForm"
        class="reach-out"
        v-bind:type="'primary'"
        v-bind:text="'Reach Out'" />


      <div class="menu">
        <div v-on:click="toggleMenu"
             class="flex-row selected-item pointer">
          <div class="selected-content">
            {{ activePage }}
          </div>
          <img class="caret" v-bind:class="{rotate: navOpen}" :src="Caret" />
        </div>

        <div v-if="navOpen" class="menu-items">
          <nuxt-link to="/" class="item">
            Home
          </nuxt-link>

          <nuxt-link to="/about" class="item">
            About
          </nuxt-link>

          <nuxt-link to="/work" class="item">
            Work
          </nuxt-link>
         
          <div class="item">
            <a href="https://www.youtube.com/channel/UC1DIqOKaLSRAMngq9yoayzQ" target="_blank">
            YouTube
            </a>
          </div>

          <div class="item">
            <a href="http://amanscripts.medium.com" target="_blank">
            Blog
            </a>
          </div>

          <div class="item">
            <a v-bind:href="resumeLink" target="_blank">
            Resume
            </a>
          </div>
        </div>
      </div>
    </div>

    <Contact v-bind:close="closeForm" v-if="formOpen" />


  </div>
</template>

<script>
import Primary from './Primary.vue'
import Contact from './Contact.vue'
import Logo from './Logo.vue'
import SiteData from './../requests/content.js'
import Caret from '~/static/images/caret-down.svg'

export default {
  props: [ 'bgColor', 'resumeLink'],
  components: { Primary, Logo, Caret, Contact },
  data: () => ({
    Caret,
    activePage: 'Home',
    navOpen: false,
    formOpen: false
  }),
  methods: {
    // Sets the active name of the page. If index, we need to display "Home"
    setActivePage(routeName) {
      this.activePage = routeName === 'index' ? 'Home' 
                                              : routeName;
    },

    openForm() {
      this.formOpen = true;
    },

    closeForm() {
      this.formOpen = false;
    },
    
    // toggles menu on and off
    toggleMenu() {
      this.setMenu(!this.navOpen);
    },

    // Open and close
    openMenu() {
      this.setMenu(true);
    },
    closeMenu() {
      this.setMenu(false);
    },

    // Opens menu
    setMenu(val) {
      this.navOpen = val;
    }
  },
  mounted() {
    this.setActivePage(this.$route.name);
  },
  updated() {
    this.setActivePage(this.$route.name);
  }
}
</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.nav {
  width: 100%;
  height: 10vh;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: $content-z;
  padding: 0 2vw;
  align-items: center;

  .selected-item {
    width: 100px;
    z-index: $content-z;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: $green-light;

    .selected-content {
      @extend %header-font;
      font-size: 16px;
      font-weight: 600;
    }

    .caret {
      width: 16px;
      margin: 0 0 0 4px;
      -webkit-transition: transform 200ms ease-in;
      transition: transform 200ms ease-in;
    }
  }

  .hello {
    align-self: flex-end;
  }

  .logo {
    width: 42px;
    background-color: transparent;
  }

  .right-menu {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    align-items: center;

    .item { 
      cursor: pointer;
      z-index: $content-z;
      @extend %header-font;
      font-weight: 600;
      padding: 2px 23px 2px 0;
      text-align: right;

      &:hover {
        background: rgba(255,255,255,0.30);
      }

      &:last-child {
        border-radius: 0 0 10px 10px;
      }

      &:first-child {
        border-radius: 10px 10px 0 0;
      }

      a {
        padding: 0;
      }
    }
  }

  .menu {
    z-index: $content-z;
  }

  .menu-items {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 0 0 0 -42px;
    border-radius: 10px;
    background: rgba(255,255,255,0.20);
    width: 120px;
  }

}

a, a:hover {
  background-color: transparent;
}

.reach-out {
  z-index: $content-z;
}

.rotate {
  transform: rotate(180deg);
}

img {
  width: 100%;
}

</style>
