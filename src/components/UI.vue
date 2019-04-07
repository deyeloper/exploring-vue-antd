<template>
  <a-layout>
    <a-layout-header>
      <a-row type="flex" justify="space-between" align="middle">
        <a-col>
          <a-dropdown :trigger="['click']">
            <a-menu slot="overlay">
              <a-menu-item key="1">
                <a-icon type="smile"/>about
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="question-circle"/>faq
              </a-menu-item>
              <a-menu-item key="3">
                <a-icon type="mail"/>feedback
              </a-menu-item>
            </a-menu>
            <a-button @click="handleClick" class="menu">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 14H20V12H0V14ZM0 8H20V6H0V8ZM0 2H20V0H0V2Z"
                  fill="#1D202A"
                ></path>
              </svg>
            </a-button>
          </a-dropdown>
        </a-col>
        <a-col>
          <a href="#" class="d-flex">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="23" x2="23" y2="40" stroke="#FF7A00" stroke-width="6"></line>
              <line y1="17" x2="40" y2="17" stroke="#FF7A00" stroke-width="6"></line>
            </svg>
          </a>
        </a-col>
      </a-row>
    </a-layout-header>
  </a-layout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class UI extends Vue {
  handleClick(event: Event) {
    console.log(event);
  }
}
</script>

<style lang="scss">
.d {
  &-flex {
    display: flex;
  }
}

.ant-layout {
  min-height: 100vh;
  font-size: 16px;

  &-header {
    position: relative;
    padding-left: 1em;
    padding-right: 1em;
    background: transparent;
  }
}

.menu {
  width: 40px;
  height: 40px;
  padding: 0;
  line-height: 0;
}

.name {
  margin: 0;
}
</style>