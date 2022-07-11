import Vue from "vue";
import Router from "vue-router";

import HomeView from "./views/HomeView";
import PaginationView from "./views/PaginationView";
import StepsCircleView from "./views/StepsCircleView";
import StepsProgressView from "./views/StepsProgressView";
import StatsDefaultClickableView from "./views/StatsDefaultClickableView";
import StatsDefaultNonClickableView from "./views/StatsDefaultNonClickableView";
import StatsBadgeView from "./views/StatsBadgeView";
import DescriptionListView from "./views/DescriptionListView";
import CheckboxGroupHorizontalView from "./views/CheckboxGroupHorizontalView";
import CheckboxGroupVerticalView from "./views/CheckboxGroupVerticalView";
import RadioGroupHorizontalView from "./views/RadioGroupHorizontalView";
import RadioGroupVerticalView from "./views/RadioGroupVerticalView";
import FormWithVuelidateView from "./views/FormWithVuelidateView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView
    },
    {
      path: "/pagination",
      name: "PaginationView",
      component: PaginationView
    },
    {
      path: "/steps-circle",
      name: "StepsCircleView",
      component: StepsCircleView
    },
    {
      path: "/steps-progress",
      name: "StepsProgressView",
      component: StepsProgressView
    },
    {
      path: "/stats-default-clickable",
      name: "StatsDefaultClickableView",
      component: StatsDefaultClickableView
    },
    {
      path: "/stats-default-nonclickable",
      name: "StatsDefaultNonClickableView",
      component: StatsDefaultNonClickableView
    },
    {
      path: "/stats-badge",
      name: "StatsBadgeView",
      component: StatsBadgeView
    },
    {
      path: "/description-list",
      name: "DescriptionListView",
      component: DescriptionListView
    },
    {
      path: "/checkbox-group-horizontal",
      name: "CheckboxGroupHorizontalView",
      component: CheckboxGroupHorizontalView
    },
    {
      path: "/checkbox-group-vertical",
      name: "CheckboxGroupVerticalView",
      component: CheckboxGroupVerticalView
    },
    {
      path: "/radio-group-horizontal",
      name: "RadioGroupHorizontalView",
      component: RadioGroupHorizontalView
    },
    {
      path: "/radio-group-vertical",
      name: "RadioGroupVerticalView",
      component: RadioGroupVerticalView
    },
    {
      path: "/form-with-vuelidate",
      name: "FormWithVuelidateView",
      component: FormWithVuelidateView
    }
  ]
});
