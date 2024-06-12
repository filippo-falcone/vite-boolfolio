<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import Loader from '../components/Loader.vue';
import { store } from '../store';

export default {
    components: {
        ProjectCard,
        Loader
    },
    data() {
        return {
            store,
            project: null
        };
    },
    methods: {
        getProject() {
            store.loading = true;
            axios.get(`${store.apiBaseUrl}/api/projects/${this.$route.params.slug}`)
                .then((response) => {
                    if (response.data.success) {
                        this.project = response.data.project;
                    } else {
                        this.$router.push({ name: 'not-found' });
                    }
                    store.loading = false;
                });
        }
    },
    mounted() {
        this.getProject();
    }
}
</script>

<template>
    <section class="py-4">
        <div class="container">
            <ProjectCard v-if="project && !store.loading" :projectInfo="project"></ProjectCard>
            <Loader v-else></Loader>
        </div>
    </section>
</template>

<style lang="scss"></style>