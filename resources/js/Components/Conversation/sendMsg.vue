<template>
    <div class="px-4 p-fix bottom-0 bg-light z-999 pb-4 w-40 p-rel">
        <form @submit.prevent="sendMsg({convoSid, msg})">
            <input type="text" class="form-control italic outline-none border-middle" v-model="msg"/>
            <button class="p-abs send border-none bg-transparent" v-if="msg">
                <i class="text-orange fa fa-paper-plane text-size-large"></i>
            </button>
            <div class="p-abs send border-none bg-transparent" v-else>
                <i class="text-grey fa fa-paper-plane text-size-large"></i>
            </div>            
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            convoSid : '',
            msg : '',
        }
    },

    methods : {
        sendMsg(request) {
            this.$store.dispatch('sendMsg', request)
        }
    },

    created() {
        this.convoSid = this.$route.params.sid
    }
}
</script>