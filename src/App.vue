<template>
  <Wrapper>
    <BoxPreview>
      <router-view />
    </BoxPreview>
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper";
import BoxPreview from "./components/BoxPreview";

export default {
  name: "App",
  components: {
    Wrapper,
    BoxPreview,
  },
};
</script>
