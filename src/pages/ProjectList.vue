<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: []
        };
    },
    methods: {
        getProjects() {
            axios.get('http://192.168.1.155:8000/api/projects')
                .then(response => {
                    this.projects = response.data.results;
                });
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <section class="py-4">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <ProjectCard v-for="project in projects" :projectInfo="project" :key="project.id"></ProjectCard>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>