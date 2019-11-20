<template>
  <div>
      <TabCard :tabs="tabs" :initialTab="initialTab">
          <template slot = "tab-head-james">
              james
          </template>

          <template slot ="tab-panel-james">
              <h2 class="title">James Potter</h2>
              <p class="description">James Potter was a young Wizard... </p>
          </template>

          <template slot="tab-head-lily">
              Lilly
          </template>

          <template slot="tab-panel-lily">
              <h2 class="title">Lily Potter</h2>
              <p class="description">
                  Lily J. Potter was a Mugg
              </p>
          </template>

          <template slot="tab-head-snape">
              Snape
          </template>

          <template slot="tab-panel-snape">
              <h2 class="title">No desc needed!</h2>
              <p class="description">
                  Lily J. Potter was a Bug
              </p>
          </template>

      </TabCard>
  <!-- <b-tabs content-class="mt-3">
    <b-tab title="About" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Skills"><p>I'm the second tab</p></b-tab>
    <b-tab title="Projects"><p>I'm a disabled tab!</p></b-tab>
    <b-tab title="Contact"><p>I'm a disabled tab!</p></b-tab>
  </b-tabs> -->
    </div>
</template>

<script>
import TabCard from './TabCard'

export default {
    components: {
        TabCard
    },
    data() {
        return {
            initialTab: 'james',
            tabs: ['james', 'lily', 'snape']
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>