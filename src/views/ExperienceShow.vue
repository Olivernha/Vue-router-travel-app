<template>
    <section>
        <h1>{{ experience.name }}</h1>

        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{ experience.description }}</p>
    </section>
</template>
<script>
import sourceData from '@/data.json';
export default {
    name: "ExperienceShow",
    props: {
        id: {
            type: Number,
            required: true
        },
        experienceSlug: {
            type: String,
            required: true
        }
    },
    computed: {
        experience() {
            return sourceData.destinations.find(destination => destination.id === this.id).experiences.find(experience => experience.slug === this.experienceSlug);
        }
    }
}
</script>