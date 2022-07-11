<template>
  <mp-flex height="100vh" align-items="center" justify-content="center">
    <mp-box text-align="center" max-width="sm">
      <mp-icon name="mekari-brand" size="xl" margin-bottom="5" />
      <mp-heading>Hello Pixel 2 - Patterns</mp-heading>
      <mp-text font-size="lg" margin-y="5">
        Patterns are reusable combinations of components that solve common user
        problems. These best practice solutions help users achieve their goals
        and help ensure consistency across experiences.
      </mp-text>
      <mp-button as="router-link" to="/pagination">Explore Now</mp-button>
    </mp-box>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpHeading,
  MpText,
  MpButton,
  MpFlex,
  MpIcon,
} from "@mekari/pixel";

export default {
  name: "Home",
  components: {
    MpBox,
    MpText,
    MpHeading,
    MpButton,
    MpFlex,
    MpIcon,
  },
};
</script>
