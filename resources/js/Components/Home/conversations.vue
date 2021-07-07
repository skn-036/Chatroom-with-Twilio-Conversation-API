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
            <div class="col-10 my-auto border-bottom-light pb-3 cursor-pointer">
                <div class="d-flex justify-content-between">
                    <h5 class="text-black">{{ conversation.participants[0].name }}</h5>
                    <p class="text-size-small text-grey">12:45 AM</p>
                </div>
                <div class="">
                    <p>Hi, How are you?</p>
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