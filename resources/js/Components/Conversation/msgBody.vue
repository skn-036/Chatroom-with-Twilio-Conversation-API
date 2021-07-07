<template>
    <div class="">
        <div class="chat">
            <div class="chat__wrapper">
                <div
                    :class="[msg.author == me.user_name ? 'chat__message-own' : '', 'chat__message']"
                    v-for="(msg, index) in messages"
                >
                    <div>{{ msg.body }}</div>
                    <div class="date text-size-small text-right">hello</div>
                </div>
            </div>
        </div>
        <div class="chat__form">
            <form
                id="chat__form"
                @submit.prevent="sendMsg({ convoSid, msg, me })"
                class="p-rel"
            >
                <input
                    id="text-message"
                    class="mx-3"
                    type="text"
                    v-model="msg"
                    placeholder="Type your message here ..."
                />
                <button class="p-abs send border-none bg-transparent" v-if="msg">
                    <i class="text-blue fa fa-paper-plane text-size-large"></i>
                </button>
                <div class="p-abs send border-none bg-transparent" v-else>
                    <i class="fa fa-paper-plane text-size-large text-grey"></i>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            convoSid: "",
            msg: "",
            me: {}
        };
    },

    methods: {
        sendMsg(request) {
            this.$store.dispatch("sendMsg", request);
            this.msg = "";
        },

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
        webhook() {
            axios.post('/api/webhook')
            .then(response => {
                console.log(response)
                if(response.status == 200) {
                    this.$store.dispatch("allMsg", this.$route.params.sid);
                }
            })
        },
        messages() {
            return this.$store.getters.convoMsg;
        },
        otherParticipant() {
            const target = this.$store.getters.allConvoUsers
            target.array.forEach(item => {
                if(item.sid !== this.me.sid) {
                    return item;
                }
            });
        }
    },

    created() {
        this.me = this.login().authUser;
        this.convoSid = this.$route.params.sid;
        this.$store.dispatch('ConvoUsers', this.convoSid);
        this.$store.dispatch("allMsg", this.$route.params.sid);
    }
};
</script>
