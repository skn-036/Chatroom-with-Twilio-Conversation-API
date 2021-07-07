<template>
    <div class="container mt-4">
        <div class="row mt-2 mb-4" v-for="(user, index) in users" :key="index">
            <div class="col-md-2">
                <img
                    src="https://picsum.photos/200"
                    alt="https://picsum.photos/200"
                    class="img-fluid round-full"
                />
            </div>
            <div class="col-10 my-auto border-bottom-light pb-3 cursor-pointer" @click="conversation({authUser, user});">
                <div class="">
                    <h5 class="text-black">{{ user.name }}</h5>
                </div>
                <div class="">
                    <p>{{ user.email }}</p>
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
            users : {},
        }
    },

    props : [
        'loginResponse'
    ],

    methods : {
        conversation(participants) {
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
        axios.get('/api/users')
        .then(response => {
            this.users = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>
