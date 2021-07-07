<template>
    <div class="h-screen">
        <top-header />
        <msg-body />
    </div>
</template>

<script>
import topHeader from './header'
import msgBody from './msgBody'

export default {
    components : {
        topHeader, msgBody,
    }
}
</script>