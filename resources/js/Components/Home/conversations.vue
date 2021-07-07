<template>
    <div class="container mt-4">
        <div class="row mt-2 mb-4" v-for="(conversation, index) in conversations" :key="index">
            <div class="col-md-2">
                <img
                    src="http://lorempixel.com/200/200/sports/"
                    alt="http://lorempixel.com/200/200/sports/"
                    class="img-fluid round-full"
                />
            </div>
            <div class="col-10 my-auto border-bottom-light pb-3 cursor-pointer" @click="convo(authUser, conversation)">
                <div class="d-flex justify-content-between">
                    <h5 class="text-black">{{ conversation.participants[0].name }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            authUser : this.loginResponse.authUser,
            conversations : {},
        }
    },

    props : [
        'loginResponse'
    ],

    methods : {
        convo(authUser, conver) {
            const user = conver.participants[0];
            const participants = {authUser, user};
            axios.post('/api/conversations/create', participants)
            .then(response => {
                if(response.status == 200) {
                    this.$router.push({ name : 'conversation.message.index', params : { sid : response.data.conversation[0].sid }})
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    },


    created() {
        axios.post('/api/conversations', this.authUser)
        .then(response => {
            this.conversations = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>