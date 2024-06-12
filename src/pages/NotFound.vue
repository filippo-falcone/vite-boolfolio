<script>
export default {
    mounted() {
        console.log(this.$route.path);
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <h1>404 error</h1>
                <p>Page not found</p>
                <div class="d flex">
                    <router-link :to="{ name: 'home' }" role="button">
                        Home
                    </router-link>
                    or
                    <router-link :to="{ name: 'projects' }" role="button">
                        Projects
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss"></style>