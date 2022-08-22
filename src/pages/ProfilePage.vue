<template>
    <H1>Hello</H1>
</template>
<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { router } from '../router';
import { profilesService} from '../services/ProfilesService.js'
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    setup() {
        const route = useRoute()

        async function getProfileById() {
            try {
                await profilesService.getProfileById(route.params.profileById)
            } catch (error) {
                logger.error(error)
                Pop.error(error)
                router.push({name: 'Home'})
            }
        }

        onMounted(() => {
            getProfileById()
        })

        return {
            account: computer(() => AppState.account),
            
        };
    },
};
</script>
<style>
</style>