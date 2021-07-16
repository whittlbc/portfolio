<template>
    <div class="links">
        <persistent-dialogue :script="script"></persistent-dialogue> 
        <div :style="destinationStyle" class="destination flow-text">
            Destination: <b>{{ destination }}</b>
        </div>
        <div class="link-container scrollfire-appear">
            <div v-for="link in links" :key="link.url" class="link">
                <a :href="link.url" target="_blank" >
                    <i @mouseover="onMouseover(link.name)" @mouseout="onMouseout" class="icon" :class="link.iconClass"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import persistentDialogue from '@/components/Dialogue/DialoguePersistent'

export default {
    name:'links',
    data(){
        return {
            showDestination: false,
            destination:'',
            script:[
                {speaker:'robot', lines:["we provide a speed of light transportation service to sire's other estates"]},
            ],
            links: [
                {
                    name: 'Resume',
                    url:'https://docs.google.com/document/d/14A90xrr3Hk7tba72hpbMB-1UKpjvQ514DjXepeN_quo/edit?usp=sharing',
                    iconClass:'icon-doc-text'
                },
                {
                    name: 'Github',
                    url:'https://github.com/guanzo',
                    iconClass:'icon-github-circled'
                },
                {
                    name: 'LinkedIn',
                    url:'https://www.linkedin.com/in/eric-guan-6a050547',
                    iconClass:'icon-linkedin',
                },
                {
                    name: 'Stack Overflow',
                    url:'http://stackoverflow.com/users/2498782/eric-guan',
                    iconClass:'icon-stackoverflow'
                }
            ],
        }
    },
    computed:{
        destinationStyle(){
            return {
                opacity: this.showDestination ? 1 : 0
            }
        }
    },
    methods:{
        onMouseover(name){
            this.showDestination = true;
            this.destination = name;
        },
        onMouseout(){
            this.showDestination = false;
        }
    },
    components:{
        persistentDialogue,
    }
}

</script>

<style lang="scss" scoped>

.links{
    padding: 20px 0;
}

.link-container{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.link{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    text-align: center;
    a{
        color: white;
        &:hover .icon{
            text-shadow: 0px 0px 4px $offwhite;
        }
        .icon{
            font-size: 5em;
            transition: 0.5s;
        }
    }
}

.destination{
    text-align: center;
    transition: 0.5s;
}



</style>