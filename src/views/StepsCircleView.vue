<template>
  <StepsCircle>
    <StepsCircleItem
      id="1"
      :label="getStepLabel('1')"
      :is-completed="completedId > '1'"
      :is-current="lastId === '1'"
      @click="onClick"
    />
    <StepsCircleItem
      id="2"
      :label="getStepLabel('2')"
      :is-completed="completedId > '2'"
      :is-current="lastId === '2'"
      @click="onClick"
    />
    <StepsCircleItem
      id="3"
      :label="getStepLabel('3')"
      :is-completed="completedId > '3'"
      :is-current="lastId === '3'"
      is-last
      @click="onClick"
    />
  </StepsCircle>
</template>

<script>
import StepsCircle from "../components/steps/StepsCircle";
import StepsCircleItem from "../components/steps/StepsCircleItem";

export default {
  name: "StepsCircleView",
  components: { StepsCircle, StepsCircleItem },
  data: function () {
    return {
      currentId: "2",
      lastId: "2",
      completedId: "2",
    };
  },
  methods: {
    getStepLabel(id) {
      if (this.completedId > id) return "Done";
      else if (this.lastId === id) return "Active";
      else return "Default";
    },
    onClick: function (id) {
      this.currentId = id;
      this.lastId = id;
      this.completedId = id;
    },
  },
};
</script>
