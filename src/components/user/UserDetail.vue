<template>
    <div>
        <h1>User Detail</h1>
        <p>User Id: {{$route.params.id}}</p>
        <hr>
        <router-link tag="button" class="btn btn-primary" :to="{ name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'en', q: 100}, hash: '#data'}">Edit this user</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
