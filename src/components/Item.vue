<template>
  <div class="home">
    <form @submit.prevent="salvar">
      <div className="input">
        <label>Discord</label>
        <input placeholder="#teste@1234" v-model="content.discord" />
      </div>
      <div className="input">
        <label>Discord link</label>
        <input v-model="content.discordUrl" />
      </div>

      <div className="input">
        <label>Twitter</label>
        <input placeholder="@teste" v-model="content.twitter" />
      </div>
      <div className="input">
        <label>Twitter link</label>
        <input v-model="content.twitterUrl" />
      </div>

      <!-- Home -->
      <br />
      <h1>Home</h1>
      <h2>Header</h2>
      <div className="input">
        <label>Title</label>
        <input v-model="content.home.header.title" />
      </div>
      <div className="input">
        <label>Image Url</label>
        <input v-model="content.home.header.url" />
      </div>
      <div className="input">
        <label>Description</label>
        <textarea rows="6" v-model="content.home.header.desc" />
      </div>

      <h2>Info</h2>
      <div className="input">
        <label>Title</label>
        <input v-model="content.home.info.title" />
      </div>
      <div className="input">
        <label>Image Url</label>
        <input v-model="content.home.info.img" />
      </div>

      <div className="input">
        <label>Description</label>
        <textarea rows="6" v-model="content.home.info.desc" />
      </div>

      <h2>Banner</h2>
      <div className="input">
        <label>Image 1</label>
        <input v-model="content.home.banner.img1" />
      </div>
      <div className="input">
        <label>Image 2</label>
        <input v-model="content.home.banner.img2" />
      </div>
      <div className="input">
        <label>Image 3</label>
        <input v-model="content.home.banner.img3" />
      </div>
      <div className="input">
        <label>Image 4</label>
        <input v-model="content.home.banner.img4" />
      </div>
      <div className="input">
        <label>Image 5</label>
        <input v-model="content.home.banner.img5" />
      </div>
      <div className="input">
        <label>Image 6</label>
        <input v-model="content.home.banner.img6" />
      </div>
      <div className="input">
        <label>Image 7</label>
        <input v-model="content.home.banner.img7" />
      </div>
      <div className="input">
        <label>Image 8</label>
        <input v-model="content.home.banner.img8" />
      </div>
      <!-- //////// -->

      <!-- Contact -->
      <br />
      <h1>Contact</h1>
      <div className="input">
        <label>Email</label>
        <input
          type="email"
          placeholder="@email"
          v-model="content.cotact.email"
        />
        <small>Client emails will be send here</small>
      </div>
      <div className="input">
        <label>Title</label>
        <input placeholder="@email" v-model="content.cotact.title" />
      </div>
      <div className="input">
        <label>Description</label>
        <textarea rows="6" v-model="content.cotact.dec" />
      </div>
      <!-- //////// -->

      <!-- Contract -->
      <br />
      <h1>Contact</h1>
      <div className="input">
        <label>Url</label>
        <input v-model="content.contract" />
      </div>
      <!-- //////// -->

      <!-- Commission -->
      <br />
      <h1>Commissions</h1>
      <h2>Header</h2>
      <div className="input">
        <label>Title</label>
        <input v-model="content.com.header.title" />
      </div>
      <div className="input">
        <label>Description</label>
        <textarea rows="6" v-model="content.com.header.desc" />
      </div>
      <h3>Example</h3>

      <div className="input">
        <label>Type</label>
        <select v-model="content.com.header.exampleTemp.type">
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div className="input">
        <label>Url</label>
        <input v-model="content.com.header.exampleTemp.url" />
      </div>
      <button @click="addExemple()" class="outlined" type="button">
        Add exemple
      </button>
      <div class="examples">
        <div
          class="example"
          v-for="exemple in content.com.header.example"
          :key="exemple.url"
        >
          <div><b>Type:</b> {{ exemple.type }}</div>
          <a :href="exemple.url" target="_blank" rel="noopener noreferrer"
            >Url</a
          >
          <div @click="removerExemple(exemple.url)" class="remover">
            Remover
          </div>
        </div>
      </div>
      <h2>Tiers</h2>
      <div className="input">
        <label>Title (will appear on the rigth)</label>
        <input v-model="content.com.listTemp.porc" />
      </div>
      <div className="input">
        <label>Items (separated by <b>|</b>)</label>
        <textarea
          placeholder="ex: your first item|the second one|another one|etc"
          rows="6"
          v-model="content.com.listTemp.items"
        />
      </div>
      <div class="examples">
        <div
          class="example"
          v-for="listItem in content.com.list"
          :key="listItem.porc"
        >
          <div><b>Title:</b> {{ listItem.porc }}</div>
          <div>
            <b>Items:</b>
            <br />
            <br />
            <div>
              <li v-for="listItemItem in listItem.items" :key="listItemItem">
                {{ listItemItem }}
              </li>
            </div>
          </div>

          <div @click="removerTier(listItem.porc)" class="remover">Remover</div>
        </div>
      </div>
      <button @click="addTier()" class="outlined" type="button">
        Add tier
      </button>
      <div style="display: none">{{ generateFile }}</div>
      <!-- //////// -->

      <!-- Por -->
      <br />
      <h1>Portfolio</h1>
      <div className="input">
        <label>Type</label>
        <select v-model="portTemp.type">
          <option value="vTuber">vTuber</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div className="input">
        <label>Miniature</label>
        <input v-model="portTemp.miniature" />
      </div>
      <div className="input">
        <label>Credit</label>
        <input v-model="portTemp.credit" />
      </div>
      <div
        v-if="portTemp.type === 'image' || portTemp.type === 'video'"
        className="input"
      >
        <label>Url</label>
        <input v-model="portTemp.url" />
      </div>
      <h3 v-if="portTemp.type === 'vTuber'">Main</h3>
      <div v-if="portTemp.type === 'vTuber'" className="input">
        <label>Type</label>
        <select v-model="portTemp.main.type">
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div v-if="portTemp.type === 'vTuber'" className="input">
        <label>Url</label>
        <input v-model="portTemp.main.url" />
      </div>
      <h3 v-if="portTemp.type === 'vTuber'">Full</h3>
      <div v-if="portTemp.type === 'vTuber'" className="input">
        <label>Type</label>
        <select v-model="portTemp.full.type">
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div v-if="portTemp.type === 'vTuber'" className="input">
        <label>Url</label>
        <input v-model="portTemp.full.url" />
      </div>
      <button
        @click="addVtuber()"
        v-if="portTemp.type === 'vTuber'"
        type="button"
        class="outlined"
      >
        Add vTuber item
      </button>
      <div class="examples">
        <div
          class="example"
          v-for="port in portItemTemp"
          :key="port.main.url || port.full.url"
        >
          <b>Main: {{ port.main.type }}</b>
          <a :href="port.main.url" target="_blank" rel="noopener noreferrer"
            >Url</a
          >
          <br />
          <b>Full: {{ port.full.type }}</b>
          <a :href="port.full.url" target="_blank" rel="noopener noreferrer"
            >Url</a
          >
          <div class="remover" @click="removerPortVtuber(port.full.url)">
            Remover
          </div>
        </div>
      </div>
      <button @click="addPort()" type="button" class="outlined">
        Add portfolio item
      </button>
      <div class="examples">
        <div class="example" v-for="port in content.port" :key="port.miniature">
          <div><b>Type:</b> {{ port.type }}</div>

          <div>
            <div>
              <a
                :href="port.miniature"
                target="_blank"
                rel="noopener noreferrer"
                >miniature</a
              >
            </div>
            <!-- <div><b>url:</b> {{ port.url }}</div> -->
          </div>

          <div v-if="port.type === 'vTuber'">
            <div>Slide number: {{ port.items.length }}</div>
            <b>Main:</b>
            <div><b>type:</b> {{ port.items[0].main.type }}</div>
            <div><b>url:</b> {{ port.items[0].main.url }}</div>
            <br />
            <b>Full:</b>
            <div><b>type:</b> {{ port.items[0].full.type }}</div>
            <div><b>url:</b> {{ port.items[0].full.url }}</div>
          </div>

          <div class="remover" @click="removerPort(port.miniature)">
            Remover
          </div>
        </div>
      </div>

      <button class="send" type="submit">Save</button>
      <!-- //////// -->
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ItemProp, Example } from "../Models/Item";

export default defineComponent({
  name: "HomeItem",

  props: {
    isEn: Boolean,
  },
  data() {
    return {
      portItemTemp: [],
      portTemp: {
        type: "",
        miniature: "",
        url: "",
        credit: "",
        main: {
          type: "",
          url: "",
        },
        full: {
          type: "",
          url: "",
        },
      },
      contentProp: {
        discord: "",
        discordUrl: "",
        twitter: "",
        twitterUrl: "",
        home: {
          header: {
            title: "",
            desc: "",
          },
          info: {
            title: "",
            desc: "",
            img: "",
          },
          banner: {
            img1: "",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
            img7: "",
            img8: "",
          },
        },
        cotact: {
          email: "",
          title: "",
          dec: "",
        },
        com: {
          header: {
            title: "",
            desc: "",
            example: [],
            exampleTemp: {
              type: "",
              url: "",
            },
          },
          list: [],
          listTemp: {
            items: "",
            porc: "",
          },
        },
        port: [],
      },
    } as any;
  },
  computed: {
    content(): ItemProp {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const def: any = this.contentProp;

      if (this.$props.isEn) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const file = this.$store.getters.getFileEn;
        if (file) {
          return file;
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const file = this.$store.getters.getFilePt;
        if (file) {
          return file;
        }
      }

      return def;
    },
  },
  emits: ["onChange"],
  methods: {
    salvar() {
      if (this.$props.isEn) {
        this.$store.commit("setFileEn", this.content);
      } else {
        this.$store.commit("setFilePt", this.content);
      }
    },
    addTier() {
      if (this.content.com) {
        this.content.com.list = [
          ...this.content.com.list,
          {
            items: this.content.com.listTemp.items.split("|"),
            porc: this.content.com.listTemp.porc,
          },
        ];

        this.content.com.listTemp = {
          items: "",
          porc: "",
        };
      }
    },
    removerTier(porc: any) {
      if (this.content.com) {
        this.content.com.list = this.content.com.list.filter(
          (item: any) => item.porc != porc
        );
      }
    },
    removerPortVtuber(url: string) {
      this.portItemTemp = this.portItemTemp.filter(
        (item: any) => item.full.url != url
      );
    },
    removerPort(url: string) {
      this.content.port = this.content.port.filter(
        (item: any) => item.miniature != url
      );
    },
    addExemple() {
      if (this.content.com) {
        this.content.com.header.example = [
          ...this.content.com.header.example,
          {
            type: this.content.com.header.exampleTemp.type,
            url: this.content.com.header.exampleTemp.url,
          },
        ];

        this.content.com.header.exampleTemp = {
          type: "",
          url: "",
        };
      }
    },
    addVtuber() {
      this.portItemTemp = [
        ...this.portItemTemp,
        {
          main: this.portTemp.main,
          full: this.portTemp.full,
        },
      ];

      this.portTemp = {
        ...this.portTemp,
        main: {
          type: "",
          url: "",
        },
        full: {
          type: "",
          url: "",
        },
      };
    },
    addPort() {
      this.content.port = [
        ...this.content.port,
        {
          type: this.portTemp.type,
          miniature: this.portTemp.miniature,
          credit: this.portTemp.credit,
          url: this.portTemp.url,
          items: this.portTemp.type === "vTuber" ? this.portItemTemp : [],
        },
      ];

      this.portItemTemp = [];
      this.portTemp = {
        type: "",
        miniature: "",
        credit: "",
        url: "",
        main: {
          type: "",
          url: "",
        },
        full: {
          type: "",
          url: "",
        },
      };
    },
    removerExemple(url: string) {
      if (this.content.com) {
        this.content.com.header.example = this.content.com.header.example.filter(
          (item: Example) => item.url != url
        );
      }
    },
  },
});
</script>

<style scoped lang="scss">
.send {
  position: sticky;
  bottom: 10px;
}

button.outlined {
  background: transparent;
  border: 1px solid #3a3c64;
  color: #3a3c64;
}
button {
  font-family: "Rubik", sans-serif;
  border-radius: 20px;
  border: none;
  outline: none;

  cursor: pointer;

  background: #3a3c64;
  padding: 15px 30px;
  width: 484px;

  color: white;
  font-size: 20px;
  letter-spacing: 4px;

  @media only screen and (max-width: 1366px) {
    width: 100%;
  }

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
}
form {
  max-width: 800px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 36px;

  :is(h1, h2, h3) {
    color: #3a3c64;
    margin: 0px;
  }

  h1 {
    position: sticky;
    top: 0px;
    z-index: 2;
    background: white;
  }

  .examples {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;

    .example {
      padding: 25px;
      border: 1px solid #3a3c64;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 20px;

      .remover {
        cursor: pointer;
        color: red;
        font-size: 0.8rem;
      }
    }
  }

  .soc {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;

    gap: 36px;

    input {
      flex: 1;
      width: 100%;
    }
  }

  .input {
    position: relative;

    input {
      max-width: 100%;
    }

    label {
      position: absolute;
      top: -20px;
      left: 10px;
      padding: 10px;
      background: white;
      font-size: 14px;
      font-family: "Rubik", sans-serif;
      letter-spacing: 2px;
      pointer-events: none;
    }
  }

  :is(textarea, input, select) {
    outline: none;

    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    width: 100%;

    padding: 20px;
    font-size: 18px;
    border: 1px solid #3a3c64;
    border-radius: 10px;

    resize: vertical;
  }
}
</style>
