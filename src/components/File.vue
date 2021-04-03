<template>
  <div class="container">
    <h3>File</h3>
    <code @click="copy()">
      {{ file }}
      <br />
      <br />
      <h1>CLICK TO COPY</h1>
    </code>
  </div>
</template>

<script lang="ts">
import { Store } from "vuex"; // path to store file
import { defineComponent } from "vue";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    count: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

export default defineComponent({
  name: "CodeContent",
  data() {
    return {
      file: "",
    };
  },
  mounted() {
    this.file = this.$store.getters.getFile;
  },
  methods: {
    copy() {
      var input = document.createElement("input");
      input.setAttribute("value", this.file);
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);

      alert("Copied to the clipboard!");
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  max-width: 800px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
}

h1 {
  color: #3a3c64;
}
code {
  cursor: pointer;
  color: grey;
  line-break: anywhere;
  padding: 30px;
  border: 1px solid #3a3c64;
  border-radius: 10px;
  line-height: 20px;
  letter-spacing: 2px;
  font-size: 1rem;

  &:hover {
    background: #0000000a;
  }
}
</style>
