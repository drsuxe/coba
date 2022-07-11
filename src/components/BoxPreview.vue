<template>
  <mp-box id="box-preview" padding="6">
    <slot />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";

export default {
  name: "BoxPreview",
  components: {
    MpBox,
  },
};
</script>
