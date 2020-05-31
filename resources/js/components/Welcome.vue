<template>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="title m-b-md">
                {{title}}
            </div>
            <div class="links">
                <a href="https://laravel.com/docs">View Laravel Docs</a>
                <a href="https://vuejs.org/v2/guide/">View Vue Docs</a>
                <a href="https://laracasts.com">Watch Videos</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['title']
    }
</script>