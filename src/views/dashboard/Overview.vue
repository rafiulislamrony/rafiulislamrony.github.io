<template>
  <!-- <h2>{{ overview }}</h2> -->
  <div class="text-center" v-if="gettingOverview">Loading...</div>
  <div v-else>
    <div class="row mt-3">
      <div class="col-4">
        <router-link class="card-link" to="/dashboard/vendors">
          <OverViewCard
            :title="overview.totalVendors"
            description="Vendors"
          ></OverViewCard>
        </router-link>
      </div>
      <div class="col-4">
        <router-link class="card-link" to="/dashboard/drugs">
          <OverViewCard
            :title="overview.totalDrugs"
            description="Drugs"
          ></OverViewCard>
        </router-link>
      </div>
      <div class="col-4">
        <router-link class="card-link" to="/dashboard/selling-history">
          <OverViewCard
            :title="overview.totalSells"
            description="Sells"
          ></OverViewCard>
        </router-link>
      </div>
    </div>

    <h2 class="mt-4">This week Statistics</h2>

    <Chart
    :size="{ width: 1000, height: 500 }"
    :data="overview.thisWeekStat"
    :margin="margin"
    :direction="direction"
    class="mt-4" >
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line
        :dataKeys="['name', 'sells']"
        :lineStyle="{ strokeWidth: '10px' }"
      />
    </template>
  </Chart>

  </div>
  
</template>

<script>
import { infoStore } from "../../data/info";
import {mapState} from "pinia";
import {useAuthStore} from "../../store/authStore";
import privateServices from "../../service/privateServices";
import OverViewCard from '../../components/OverViewCard.vue';

import { Chart, Grid, Line } from "vue3-charts";

export default {
  components:{
    OverViewCard,
    Chart,
    Grid,
    Line 
  },
  data: () => ({
    projectname: infoStore.projectName,
    visitCount: infoStore.visitCount,
    overview: {},
    gettingOverview: true,
    direction: "horizontal",
    margin: {
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    }
  }),
  computed:{
    ...mapState(useAuthStore,{
      username:"username",
    })
  },
  methods: {
    increase() {
      infoStore.visitCount += 1;
    },
    getOverview() {
      this.gettingOverview = true;
      privateServices
        .getOverview()
        .then((res) => {
          this.overview = res.data;
        })
        .catch((e) => {})
        .finally(() => {
          this.gettingOverview = false;
        });
    }
  },
  mounted() {
    setTimeout(this.getOverview, 333);
  } 
};
</script>
