<template>
  <div>
    <header id="header" :class="expanded ? 'expanded' : 'scrollable'">
      <nav :class="['tabs', expanded ? 'expanded' : '']">
        <div
          v-for="tab in tabs"
          :key="tab.label"
          :class="[
            tab.active ? 'tab-active' : '',
            'tab',
            expanded ? 'expanded' : '',
          ]"
          @click="$emit('setActive', tab)"
        >
          {{ tab.label }}
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "TabsHeader",
  props: {
    tabs: Array,
    expanded: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["setActive"],
};
</script>

<style scoped>
.scrollable {
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  scrollbar-width: auto; /* "auto" or "thin" */
  /* scrollbar-bord */
}

#line {
  background: var(--main);
  height: 1px;
  z-index: -3;
}

.tabs {
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
  width: auto;
}

.tabs.expanded {
  flex-wrap: nowrap;
  justify-content: space-around;
  border-bottom: 1px solid #3a3c64;
}

.tab {
  scroll-snap-align: center;
  padding: 15px 40px;
  /* flex: 1; */
  /* width: 300px; */
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rubik", sans-serif;
  font-size: 16px;

  cursor: pointer;
  position: relative;
  color: #949494;
}
.tab.expanded {
  padding: 15px 0px;
  flex: 1;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.1);
}
.tab-active {
  font-weight: 500;
  color: black;
}
.tab-active::after {
  content: "";

  position: absolute;
  border-radius: 3px;
  height: 6px;
  left: 38%;
  right: 38%;
  background: #3a3c64;
  bottom: -3px;
  background: #3a3c64;
}
</style>
