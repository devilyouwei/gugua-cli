<template>
    <div class="head-icon">
        <ui-icon-button
            icon="language"
            @click="lanMenu = true"
        ></ui-icon-button>
        <ui-menu
            v-model="lanMenu"
            :items="languages"
            @selected="onLanSelected"
            @cancel="onLanCancel"
        ></ui-menu>
    </div>
</template>
<script>
export default {
    name: 'HeadIcon',
    data() {
        return {
            lanMenu: false,
            languages: ['English', '中文']
        }
    },
    methods: {
        onLanSelected(data) {},
        onLanCancel() {}
    }
}
</script>
