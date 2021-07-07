<template>
    
    <div class="px-4 pt-3 pb-5">
        <div class="d-flex w-100 my-3">
            <div class="round-10 bg-light">
                <p class="pr-12 pl-2 pt-2 mb-1 font-bold">This is the msg</p>
                <p class="text-size-small text-grey pl-2 pb-2">12:30 am</p>
            </div>
        </div>
        <div class="d-flex w-100 my-3 justify-content-end">
            <div class="round-10 bg-light-orange text-right">
                <p class="pr-2 pl-12 pt-2 mb-1 font-bold">Hello, How are you?</p>
                <p class="text-size-small text-grey pr-2 pb-2">Yesterday, 11:20 am</p>
            </div>
        </div>
        <div class="d-flex w-100 my-3 justify-content-end" v-for="(msg, index) in messages" :key="index">
            <div class="round-10 bg-light-orange text-right">
                <p class="pr-2 pl-12 pt-2 mb-1 font-bold">{{ msg.body }}</p>
                <p class="text-size-small text-grey pr-2 pb-2">Yesterday, 11:20 am</p>
            </div>
        </div>
    </div>
    
    
</template>

<script>
export default {

    computed : {
        messages() {
            return this.$store.getters.convoMsg
        }
    },

    created() {
        this.$store.dispatch('allMsg', this.$route.params.sid)
    }
}
</script>