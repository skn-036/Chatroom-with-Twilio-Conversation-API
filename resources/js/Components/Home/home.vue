<template>
    <div class="mx-5 p-rel">
        <div class="sticky-top pt-5 bg-white z-999">
            <div class="w-100 d-flex justify-content-between align-items-center">
                <div class="text-black font-bold">Welcome !! <span class="text-orange">{{ loginResponse.authUser.name }}</span></div>
                <span class="btn btn-link font-bold text-orange cursor-pointer" @click="logout">Logout</span>
            </div>

            <form class="mb-4 p-rel">
                <input
                    type="text"
                    class="form-control italic outline-none"
                    placeholder="Search or start new chat"
                />
                <button
                    type="button"
                    class="search bg-transparent border-none text-orange font-bold font-20 p-abs"
                >
                    <i class="fa fa-search"></i>
                </button>
            </form>

            <ul class="nav nav-tabs font-bold">
                <li class="w-50 text-center">
                    <router-link
                        :to="{ name: 'home.conversations' }"
                        :class="[routeName == 'home.conversations' ? 'active' : '','nav-link']"
                        @click.native="active()"
                        >Conversations</router-link
                    >
                </li>
                <li class="w-50 text-center">
                    <router-link
                        :to="{ name: 'home.contacts' }"
                        :class="[routeName == 'home.contacts' ? 'active' : '','nav-link']"
                        @click.native="active()"
                        >Contacts</router-link
                    >
                </li>
            </ul>
        </div>
        <transition :name="transitionName" mode="out-in">
            <router-view :loginResponse="loginResponse"></router-view>
        </transition>

    </div>
</template>

<script>
export default {
    data() {
        return {
            routeName: "",
            click : 0,
            loginResponse : {},
            transitionName : '',
        };
    },

    methods: {
        active() {
            this.click += 1;
            this.routeName = this.$route.name;
            if (this.click == 1) {
                if (this.routeName == "home.conversations") {
                    this.routeName = "home.contacts";
                } else if (this.routeName == "home.contacts") {
                    this.routeName = "home.conversations";
                }
            }
        },

        login() {
            if(this.$store.getters.loginResponse.success !== undefined) {
                return this.$store.getters.loginResponse
            }
            else {
                if(JSON.parse(sessionStorage.getItem('loginResponse')) !== undefined) {
                    return JSON.parse(sessionStorage.getItem('loginResponse'))
                }
                else {
                    return {
                        'success' : null,
                        'message' : null,
                    }                   
                }
            }            
        },

        logout() {
            this.$store.dispatch('logout')
        }

    },

    watch : {
        '$route' (to, from) {
            const start = from.name
            const end = to.name

            if(start == 'home.conversations' && end == 'home.contacts')
                this.transitionName = 'fade'
            if(start == 'home.contacts' && end == 'home.conversations')
                this.transitionName = 'fade'
        }
    },

    created() {
        this.routeName = this.$route.name;
        this.loginResponse = this.login()
        if(this.loginResponse.success == null) {
            this.$router.push({ name : 'login' })
        }

        //get the logged user information
    }
}
</script>
