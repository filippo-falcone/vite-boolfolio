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
        </div>
    </section>
</template>

<style lang="scss"></style>