<!--
* Autor: María Fernanda Castillo Barradas
* Fecha de creación: 22/01/2022
* Fecha de modificación: 
-->
<template>
  <div
    :class="[
      horizontal ? 'container--custom__horizontal' : 'container--textfielchip',
    ]"
  >
    <div>
      <span :class="getLabelClass">{{ labeltext }}</span>
    </div>
    <div>
      <span
        @click="$emit('click-vchip')"
        :class="text ? color + '--text' : color"
        :style="getStyle"
      >
        {{ chiptext }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "textfield-chip",
  data() {
    return {};
  },
  computed: {
    getLabelClass() {
      return {
        "label--chip": true,
        "label--chip--horizontal": this.horizontal,
      };
    },
    getStyle() {
      var chip = `
          font-size: 12px;
          text-align: center;
          color: white;
          padding: 0.2rem 0.8rem;
          border-radius: 3px;
          font-weight: normal;`;

      var chipText = `color: ${this.color};
                      padding: 0.2rem 0rem;
                      font-weight: bold;`;
      if (this.text) {
        return chipText;
      } else {
        return chip;
      }
    },
  },
  props: {
    labeltext: {
      type: String,
      default: "Example",
    },
    chiptext: {
      default: "Chip text",
    },
    color: {
      type: String,
      default: "primary",
    },
    textcolor: {
      type: String,
      default: "white",
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    width: {
      default: 100,
    },
  },
};
</script>

<style>
.container--textfielchip {
  display: block;
  min-height: 66px;
}
.container--custom__horizontal {
  display: flex;
  align-items: center;
}
.container--custom__horizontal .label--chip {
  margin-right: 10px;
}
.label--chip {
  position: relative;
  top: -4px;
  font-size: 0.84rem;
  font-weight: 400;
}
.label--chip--horizontal {
  font-size: 16px;
  position: inherit;
}
.text--chip {
  justify-content: center;
  position: relative;
  bottom: 10px;
}
</style>