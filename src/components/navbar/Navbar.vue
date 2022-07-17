<template>
  <div class="app-layout__navbar">
    <va-navbar>
      <template v-slot:left>
        <div class="left">
          <va-icon-menu-collapsed 
            @click="isSidebarMinimized = !isSidebarMinimized"
            :class="{ 'x-flip': isSidebarMinimized }"
            class="va-navbar__item"
            :color="colors.primary"
          />
          <router-link to="/">
            <svg t="1658030305096" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1872" width="30" height="30"><path d="M512.09998 0.09998l-445.512985 239.953135 445.512985 247.251708 445.512986-247.251708z" fill="#8FB3FF" p-id="1873"></path><path d="M546.693224 546.593244l409.919937-242.752588-0.09998 482.805702-409.919937 237.353642 0.09998-477.406756z" fill="#043EB8" p-id="1874"></path><path d="M66.886936 303.840656L476.906854 542.893966l-0.499902 480.906073L66.786956 790.245655l0.09998-486.404999z" fill="#2868F0" p-id="1875"></path></svg>
          </router-link>
        </div>
      </template>
      <template v-slot:center>
        <span class="app-navbar__text">
          {{$t('navbar.messageUs')}}&nbsp;
          <a
            href="mailto:hello@epicmax.co"
            target="_blank"
            :style="{color: colors.primary}"
          >
            rafacheninc@gmail.com
          </a>
          <va-button
            href="https://github.com/smart-test-ti/solox-vue-admin"
            color="#000000"
            class="app-navbar__github-button"
            icon="github"
            target="_blank"
          >
            {{$t('navbar.repository')}}
          </va-button>
        </span>
      </template>
      <template #right>
        <app-navbar-actions
          class="app-navbar__actions md5 lg4"
          :user-name="userName"
        />
      </template>
    </va-navbar>
  </div>
</template>

<script>
import { useColors } from 'vuestic-ui'
import { useStore } from 'vuex'
import { computed } from 'vue'
import VaIconMenuCollapsed from '@/components/icons/VaIconMenuCollapsed'
import AppNavbarActions from './components/AppNavbarActions'

export default {
  components: {AppNavbarActions, VaIconMenuCollapsed },
  setup() {
    const { getColors } = useColors()
    const colors = computed(() => getColors() )
    const store = useStore();
    const isSidebarMinimized = computed({
      get: () => store.state.isSidebarMinimized,
      set: (value) => store.commit('updateSidebarCollapsedState', value)
    })

    const userName = window.localStorage.getItem("username");

    return {
      colors,
      isSidebarMinimized,
      userName
    }
  },
}
</script>

<style lang="scss" scoped>
  .va-navbar {
    box-shadow: var(--va-box-shadow);
    z-index: 2;
    &__center {
      @media screen and (max-width: 1200px) {
        .app-navbar__github-button {
          display: none;
        }
      }
      @media screen and (max-width: 950px) {
        .app-navbar__text {
          display: none;
        }
      }
    }

    @media screen and (max-width: 950px) {
      .left {
        width: 100%;
      }
      .app-navbar__actions {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .left {
    display: flex;
    align-items: center;
    & > * {
      margin-right: 1.5rem;
    }
    & > *:last-child {
      margin-right: 0;
    }
  }

  .x-flip {
    transform: scaleX(-100%);
  }

  .app-navbar__text > * {
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
</style>
