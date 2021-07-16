<template>
    <div class="project-carousel">
        <div ref="portraits" class="portraits-carousel">
            <div class="project-intro">
                <div class="z-depth-2">
                    <h5 class="project-name raleway">{{ project.name }}</h5>
                    <div>{{ project.tag }}</div>
                    <div>{{ project.startDate }}</div>
                    <div class="desc" v-html="project.desc"></div>
                </div>
            </div>
            <project-portrait 
                v-for="(slide,i) in project.slides" 
                :displayType="project.displayType" 
                :slide="slide" 
                :key="i"
            >
            </project-portrait>
        </div>
    </div>
</template>

<script>

import dynamicDialogue from '@/components/Dialogue/DialogueDynamic'
import projectPortrait from './ProjectPortrait'

export default {
    name:'project-carousel',
    props:['project'],
    
    mounted(){
        this.initCarousel()
        //WebKit has a bug where changing the DOM stops autoplay. 
        if(this.project.displayType == 'video')
            this.loadVideos()
    },
    methods:{
        loadVideos(){
            [...this.$el.querySelectorAll('video')]
                .forEach(vid=>{
                    vid.play()
                    vid.controls = true
                })
        },
        initCarousel(){
            var el = this.$refs.portraits
            new Flickity(el,{
                percentPosition: false,
                cellAlign: 'left',
                freeScroll: true,
                imagesLoaded: true,
                lazyLoad: 2,
                contain: true,
            })
        },
        onClose(){
            this.$store.commit(CLOSE_PROJECT)
        }
    },
    components:{
        dynamicDialogue,
        projectPortrait
    }
}

</script>

<style lang="scss">



.project-carousel{    
    padding: 0px 10px;
    margin-bottom: 4em;

    &:nth-child(odd){
        color: $offwhite;
        .project-intro > div{
            background: #333;
        }
    }
    &:nth-child(even){
        color: #333;
        .project-intro > div{
            background: $offwhite;
        }
    }
}

.flickity-viewport {
    overflow: visible;
}
</style>

<style lang="scss" scoped>


.project-intro{
    margin: 1em; 
    padding: 0em .5em;
    min-width: 200px;
    width:350px;
    max-width: 100%;
    > div{
        padding: .5em 1em;
    }
}

.desc{
    margin-top: 1em;
}


</style>