<template>
    <div>
      评论
    </div>
</template>
<script>

    export default {
        props: {
            "...": {
                type: Object,
                default: function () {
                    return {}
                }
            }
        },
        data () {
            return {}
        },
        computed: {},
        created(){
            this.initData();
        },
        methods: {
            async initData(){
            }
        },
        components: {}

    }
</script>
<style scoped>

</style>
