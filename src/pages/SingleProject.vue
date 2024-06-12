<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import Loader from '../components/Loader.vue';

export default {
    components: {
        ProjectCard,
        Loader
    },
    data() {
        return {
            loading: false,
            project: null
        };
    },
    methods: {
        getProject() {
            this.loading = true;
            axios.get(`http://192.168.1.155:8000/api/projects/${this.$route.params.slug}`)
                .then((response) => {
                    if (response.data.success) {
                        this.project = response.data.project;
                    } else {
                        this.$router.push({ name: 'not-found' });
                    }
                    this.loading = false;
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
            <ProjectCard v-if="project && !loading" :projectInfo="project"></ProjectCard>
            <Loader v-else></Loader>
        </div>
    </section>
</template>

<style lang="scss"></style>