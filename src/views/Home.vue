<template>
  <TabsHeader @setActive="changeTab" :tabs="tabs" />
  <HomeItem :isEn="true" v-if="selectedTab === 'en'" />
  <HomeItem :isEn="false" v-else-if="selectedTab === 'pt-br'" />
  <CodeContent v-else />
</template>

<script lang="ts">
import TabsHeader from "../components/Tabs.vue";
import HomeItem from "../components/Item.vue";
import CodeContent from "../components/File.vue";
import { defineComponent } from "vue";
import { ItemProp } from "@/Models/Item";

type TabLab = "en" | "pt" | "code";

interface TabModel {
  label: TabLab;
  active: boolean;
}

export default defineComponent({
  data() {
    return {
      selectedTab: "en" as TabLab,
      tabs: [
        {
          label: "en",
          active: true,
        },
        {
          label: "pt-br",
          active: false,
        },
        {
          label: "File",
          active: false,
        },
      ] as TabModel[],
    };
  },
  mounted() {
    var dataC = window.prompt("Paste the data file here", "");

    if (dataC) {
      let content = JSON.parse(dataC);

      console.log(`content`, content);
      const newContentEn = {
        en: this.validateData(content.en),
        pt: this.validateData(content.pt),
      };
      this.$store.commit("setFile", newContentEn);
    }
  },
  components: {
    TabsHeader,
    HomeItem,
    CodeContent,
  },
  methods: {
    changeTab(tab: TabModel) {
      this.selectedTab = tab.label;

      this.tabs = this.tabs
        .map((tabItem) =>
          tabItem.active ? { ...tabItem, active: false } : tabItem
        )
        .map((tabItem) =>
          tabItem.label === tab.label ? { ...tabItem, active: true } : tabItem
        );
    },
    validateData(content: ItemProp) {
      if (content && content.com && !content.com.header.exampleTemp) {
        content.com.header.exampleTemp = {
          type: "",
          url: "",
        };
      }

      if (content && content.com && !content.com.listTemp) {
        content.com.listTemp = {
          items: "",
          porc: "",
        };
      }

      return content;
    },
  },
});
</script>
