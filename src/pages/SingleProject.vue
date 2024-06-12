<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            project: null
        };
    },
    methods: {
        getProject() {
            axios.get(`http://192.168.1.155:8000/api/projects/${this.$route.params.slug}`)
                .then((response) => {
                    this.project = response.data.project;
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
            <ProjectCard v-if="project" :projectInfo="project"></ProjectCard>
            <div v-else class="d-flex flex-column align-items-center justify-content-center">
                <h1>Project not found</h1>
                <div class="mb-2">Return to</div>
                <router-link class="btn btn-primary" :to="{ name: 'projects' }" role="button">Projects</router-link>
            </div>
        </div>
    </section>
</template>

<style lang="scss"></style>