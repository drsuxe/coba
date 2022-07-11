<template>
  <mp-flex>
    <StatsDefaultNonClickable
      value="236"
      icon="people"
      description="Shortlisted"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsDefaultNonClickable
      value="881"
      icon="chat"
      description="HRD Interview"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsDefaultNonClickable
      value="948"
      icon="chat"
      description="User Interview"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsDefaultNonClickable
      value="863"
      icon="draft"
      description="Technical Test"
    />
  </mp-flex>
</template>

<script>
import { MpFlex, MpDivider } from "@mekari/pixel";
import StatsDefaultNonClickable from "../components/stats/StatsDefaultNonClickable";

export default {
  name: "StatsDefaultClickableView",
  components: {
    MpFlex,
    MpDivider,
    StatsDefaultNonClickable,
  },
};
</script>
