<template>
  <mp-stack>
    <mp-text
      color="gray.600"
      font-size="sm"
      font-weight="regular"
      margin-bottom="1"
    >
      Title
    </mp-text>
    <mp-radio-group name="option-inline" spacing="2">
      <mp-radio value="option-1">Option 1</mp-radio>
      <mp-radio value="option-2">Option 2</mp-radio>
      <mp-radio value="option-3">Option 3</mp-radio>
    </mp-radio-group>
  </mp-stack>
</template>

<script>
import { MpStack, MpText, MpRadio, MpRadioGroup } from "@mekari/pixel";

export default {
  name: "RadioGroupVertical",
  components: { MpStack, MpText, MpRadio, MpRadioGroup },
};
</script>