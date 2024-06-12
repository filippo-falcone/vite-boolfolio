<script>
import { routeLocationKey } from 'vue-router';
import { store } from '../store';

export default {
    props: {
        projectInfo: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        truncateText(text) {
            if (text.length > 100) {
                return text.substring(0, 99) + '...';
            }
            return text;
        },
        printImage(imageUrl) {
            return `${store.apiBaseUrl}/storage/${imageUrl}`;
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <img v-if="projectInfo.image" :src="printImage(projectInfo.image)" class="card-img-top"
                :alt="projectInfo.name">
            <div class="card-body">
                <h5 class="card-title">{{ projectInfo.name }}</h5>
                <p v-if="projectInfo.client_name" class="card-text">{{ projectInfo.client_name }}</p>
                <p v-else class="card-text">Client undefined</p>
                <p v-if="projectInfo.type" class="card-text">{{ projectInfo.type.name }}</p>
                <p v-else class="card-text">Type undefined</p>
                <div v-if="projectInfo.technologies.length > 0" class="mb-3">
                    <span v-for="technology in projectInfo.technologies" class="badge rounded-pill text-bg-primary">
                        {{ technology.name }}
                    </span>
                </div>
                <p v-else class="card-text">No technologies</p>
                <p v-if="projectInfo.summary" class="card-text">{{ truncateText(projectInfo.summary) }}</p>
                <router-link v-if="$route.name === 'projects'" class="btn btn-primary"
                    :to="{ name: 'single-project', params: { slug: projectInfo.slug } }" role="button">
                    Read more
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>