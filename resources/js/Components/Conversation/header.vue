<template>
<div class="bg-light">
    <div class="px-4 w-100 container-fluid">
        <div class="row">
            <div class="col-6 d-flex flex-row py-2">
                <img
                    src="https://picsum.photos/50"
                    alt="https://picsum.photos/50"
                    class="img-fluid round-full mr-3"
                />
                <div class="my-auto">                   
                    <div v-for="(item, index) in participants" v-if="item.sid !== me.sid">
                        <h5 class="text-black font-bold">{{ item.name }}</h5>
                    </div>                  
                    <div>
                        <p class="text-size-small">Last seen today 11.00 pm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            convoSid: "",
            me: {}
        };
    },

    methods: {
        login() {
            if (this.$store.getters.loginResponse.success !== undefined) {
                return this.$store.getters.loginResponse;
            } else {
                if (
                    JSON.parse(sessionStorage.getItem("loginResponse")) !==
                    undefined
                ) {
                    return JSON.parse(sessionStorage.getItem("loginResponse"));
                } else {
                    return {
                        success: null,
                        message: null
                    };
                }
            }
        }
    },

    computed: {
        participants() {
            return this.$store.getters.allConvoUsers;
        }
    },

    created() {
        this.me = this.login().authUser;
        this.convoSid = this.$route.params.sid;
        this.$store.dispatch('ConvoUsers', this.convoSid);
    }
};
</script>
