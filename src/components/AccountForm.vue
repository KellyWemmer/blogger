<template>
    <form class="card account-form" @submit.prevent="handleSubmit">
        <div class="card-body">
            <div>
                <label for="name">Name:</label>
                <input type="text" class="form-control" v-model="editable.name" required name="name">
            </div>
            <div>
                <label for="picture">Picture:</label>
                <input type="url" class="form-control" v-model="editable.picture" required name="picture">
            </div>
            <div>
                <label for="coverImg">Cover Image:</label>
                <input type="url" class="form-control" v-model="editable.coverImg" required name="coverImg">
            </div>
            <div>
                <label for="bio">Bio:</label>
                <textarea type="text" class="form-control" v-model="editable.bio" required name="bio" style="resize:none"></textarea>
            </div>  
            <div>
                <button type="submit" class="btn btn-secondary">Save</button>
            </div>          
        </div>
    </form>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState';
import { router } from '../router';
import { accountService } from '../services/AccountService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    setup() {
        const editable = ref({})//set up variable to 

        watchEffect(() => {
            if (!AppState.account) {return} 
            editable.value = {...AppState.account} //if correct account-change editable value in the account object
        })

        return {
            editable,
            async handleSubmit() {
                try {
                   await accountService.editAccount(editable.value) 
                   router.push({name: 'Profile', params: {profileId: editable.value.div}})
                } catch (error) {
                    logger.error('[Editing Account]', error)
                    Pop.error(error)
                    
                }
            }
        };
        },
};
</script>
<style lang="scss" scoped>
</style>