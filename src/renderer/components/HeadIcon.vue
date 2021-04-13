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
        onLanSelected(data) {
            if (data.index === 0) this.$i18n.locale = 'en'
            else if (data.index === 1) this.$i18n.locale = 'zh'
            else this.$i18n.locale = 'en'
        }
    }
}
</script>
