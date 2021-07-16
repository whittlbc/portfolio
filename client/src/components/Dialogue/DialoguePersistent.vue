<template>
    <div class="dialogue flow-text">
        <div v-for="obj in script" 
            :class="[getSpeakerClass(obj.speaker),{'scrollfire-to-top': setScrollfire}]" 
            class="dialogue-section">
            <component :is="obj.speaker" />
            <div class="lines">
                <template v-for="line in obj.lines">
                    <p :class="speechBubbleClass" v-html="line"></p>
                    <br>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
/*
any time man talks, robot talks or both.
triggered by scrollfire
text stays on page

data structure is array of obj.
obj = {
    speaker: String. 'man' | 'robot'
    lines: Array of strings
}

*/
import DialogueMixin from './DialogueMixin'

export default {
    name:'persistent-dialogue',
    mixins:[DialogueMixin],
    props:{
        script: Array,
        setScrollfire:{
            type: Boolean,
            default: true
        }
    },
    methods:{
        getSpeakerClass(speaker){
            if(speaker === 'robot')
                return 'robot-text';
            else
                return 'man-text'
        }
    }
}
</script>

<style lang="scss" scoped>

.dialogue-section {
    display: flex;
    align-items: flex-start;
    margin: 0.8em 0;
    p{
        display: inline-block;
        margin: 0.5em 0;
        &:first-child{
            margin-top: 1em;
        }
    }   
    .speech-portrait{
        //for w/e reason i need all 3 widths
        width:50px;
        max-width: 50px;
        min-width: 50px;
        height: auto;
        margin-top: 0.65em;
        margin-right: 1em;
    }
}

</style>