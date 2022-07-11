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
    <mp-checkbox-group name="option" spacing="6" is-inline>
      <mp-checkbox value="option-1">Option 1</mp-checkbox>
      <mp-checkbox value="option-2">Option 2</mp-checkbox>
      <mp-checkbox value="option-3">Option 3</mp-checkbox>
    </mp-checkbox-group>
  </mp-stack>
</template>

<script>
import { MpStack, MpText, MpCheckbox, MpCheckboxGroup } from "@mekari/pixel";

export default {
  name: "CheckboxGroupHorizontal",
  components: { MpStack, MpText, MpCheckbox, MpCheckboxGroup },
};
</script>