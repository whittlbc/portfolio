<template>
    <div id="guestbook" class="app-section" :data-gradient-index="gradientIndex">
        <div class="container">
            <div class="app-section-title scrollfire-to-right">Guestbook</div>

            <persistent-dialogue :script="script"></persistent-dialogue>

            <GuestbookForm/>
        </div>
    </div>
</template>

<script>
import {GET_COMMENTS} from '@/store'
import persistentDialogue from '@/components/Dialogue/DialoguePersistent'
import GuestbookForm from './GuestbookForm'
export default {
    name:'guestbook',
    data(){
        return {
            gradientIndex: 3,
            script:[
                {speaker:'man', lines:["I hope you enjoyed the tour",
                                        "Feel free to sign the guestbook to contact me or leave a comment",
                                        "Egg and I like to read it together sometimes"]},
                {speaker:'robot', lines:["Farewell!"]},
            ],
        }
    },
    computed:{
        guestbook(){
            return this.$store.state.guestbook;
        }
    },
    components:{
        persistentDialogue,
        GuestbookForm
    }
}
</script>

<style lang="scss">



#guestbook{
    color: #333;
}

.container{
    overflow: hidden;
}


</style>
