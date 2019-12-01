<template>
    <div>
        <header class="card-header">
            <ul class="tab-heads">
                <li
                    class="tab-head"
                    v-for="tab in tabs"
                    :key="tab"
                    v-bind:class="{
                        'tab-head--active': activeTab === tab}"
                    v-on:click="switchTab(tab);"
                >
                    <slot :name="tabHeadSlotName(tab)">
                        {{tab}}
                    </slot>
                </li>
            </ul>
        </header>
        <Palette></Palette>
        <main class="card-body">
            <div class="tab-panel">
                <slot :name="tabPanelSlotName"></slot>
            </div>
        </main>
    </div>
</template>

<script>
import Palette from './Palette.vue'

export default {
    props: {
        initialTab: String,
        tabs: Array
    },
    data() {
        return {
            activeTab: this.initialTab
        };
    },
    computed: {
        tabPanelSlotName() {
            return `tab-panel-${this.activeTab}`;
        }
    },
    methods: {
        tabHeadSlotName(tabName) {
            return `tab-head-${tabName}`;
        },
        switchTab(tabName) {
            this.activeTab = tabName;
        }
    },
    components: {
        Palette
    }
};
</script>

<style lang="scss" scoped>
.card-body {
    background-color: $dark;
    color: $main-text-color;
}
.card-header {
    background: $palette2q4;
    color: $main-highlight-color;
    border: none;
}
.card-header ul {
    padding: 0;
}
.tab-heads {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin-bottom: 0;
}
.tab-heads li {
    margin: 5px auto;
}
</style>