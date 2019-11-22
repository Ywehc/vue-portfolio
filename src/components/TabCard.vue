<template>
    <div class="card">
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
        <main class="card-body">
            <div class="tab-panel">
                <slot :name="tabPanelSlotName"></slot>
            </div>
        </main>
    </div>
</template>

<script>
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
    }
};
</script>

<style lang="scss" scoped>
.card-body {
    background-color: $dark;
    color: $main-text-color;
}
.card-header {
    padding: 0;
    color: $main-highlight-color;
}
.card-header ul {
    padding: 0;
}
.tab-heads {
    display: flex;
    flex-direction: row;
    list-style-type: none;
}
.tab-heads li {
    margin: 15px auto;
}
</style>