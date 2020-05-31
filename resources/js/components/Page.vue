<template>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="title m-b-md">
                {{title}}
            </div>
            <div class="links">
                <span class="subtitle">Name : {{author.name}}</span><br/>
                <span class="subtitle">Role : {{author.role}}</span><br/>
                <span class="subtitle">Code : {{author.code}}</span><br/>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['title', 'author']
    }
</script>
