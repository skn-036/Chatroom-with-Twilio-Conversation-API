<template>
    <div class="d-flex align-items-center h-screen">
        <form
            class="rounded p-5 w-100 my-auto"
            id="login-form"
            @submit.prevent="submit(login)"
        >
            <div class="my-4 d-flex">
                <h2 class="italic text-orange font-bold mx-auto underline">
                    Login
                </h2>
            </div>

            <div v-if="loginResponse">
                <div
                    class="my-4 d-flex italic"
                    id="hide"
                    v-if="loginResponse !== undefined && loginResponse.success == false"
                    @show="timeout($event.path[0].id)"
                >
                    <p class="mx-auto text-red">{{ loginResponse.message }}</p>
                </div>
            </div>

            <div class="mb-4">
                <label class="font-bold mb-2 italic" for="username"
                    >Username</label
                >
                <input
                    type="email"
                    name="email"
                    class="form-control italic outline-none"
                    id="username"
                    v-model="login.email"
                    placeholder="Username"
                    autofocus
                    required
                />
            </div>

            <div class="mb-5">
                <label class="font-bold mb-2 italic" for="password"
                    >Password</label
                >
                <input
                    class="form-control italic outline-none"
                    id="password"
                    type="password"
                    placeholder="******************"
                    v-model="login.password"
                    required
                />
            </div>

            <div class="d-flex justify-content-center font-bold">
                <button class="btn bg-orange text-white btn-orange">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            login: {
                email: "",
                password: ""
            }
        };
    },

    methods: {
        submit(login) {
            this.$store.dispatch("login", login);
        },

        timeout(element) {
            setTimeout(function() {
                document.querySelector("#" + element).style.display = "none";
            }, 5000);
        }
    },

    computed: {
        loginResponse() {
            if (this.$store.getters.loginResponse.success !== undefined) {
                return this.$store.getters.loginResponse;
            }

            if (
                JSON.parse(sessionStorage.getItem("loginResponse")) !== undefined) {
                return JSON.parse(sessionStorage.getItem("loginResponse"));
            }

            return {
                success: null,
                message: null
            };
        }
    }
};
</script>
