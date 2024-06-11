<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            currentPage: 1,
            prevPageUrl: null,
            nextPageUrl: null,
            pages: null,
            isActive: 0,
            projects: []
        };
    },
    methods: {
        getProjects(pageNumber) {
            axios.get('http://192.168.1.155:8000/api/projects', {
                params: {
                    page: pageNumber
                }
            })
                .then(response => {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.prevPageUrl = response.data.results.prev_page_url;
                    this.nextPageUrl = response.data.results.next_page_url;
                    this.pages = response.data.results.last_page;
                });
        },
        activePage(index) {
            this.isActive = index;
        }
    },
    mounted() {
        this.getProjects(this.currentPage);
    }
}
</script>

<template>
    <section class="py-4">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 justify-content-center g-4">
                <ProjectCard v-for="project in projects" :projectInfo="project" :key="project.id"></ProjectCard>
            </div>
            <div class="my-3">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li v-if="prevPageUrl" class="page-item">
                            <a class="page-link"
                                @click="getProjects(currentPage - 1); activePage(isActive - 1);">Previous</a>
                        </li>
                        <li v-for="page, index in pages" class="page-item">
                            <a class="page-link" :class="{ 'active': index == isActive }"
                                @click="getProjects(page); activePage(index);">{{ page
                                }}</a>
                        </li>
                        <li v-if="nextPageUrl" class="page-item">
                            <a class="page-link"
                                @click="getProjects(currentPage + 1); activePage(isActive + 1);">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>