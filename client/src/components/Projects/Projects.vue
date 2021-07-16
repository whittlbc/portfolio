<template>
    <div id="projects" class="app-section" :data-gradient-index="gradientIndex">
        <div>
            <div class="container">
                <div class="app-section-title">The Gallery</div>
                <dynamic-dialogue class="project-dialogue" :script="script" :startDialogue="startDialogue">
                </dynamic-dialogue>
            </div>
            <project-carousel class="project-list" v-for="project in projects" :project="project" :key="project.name">
            </project-carousel>
        </div>
    </div>
</template>

<script>


import projectCarousel from './ProjectCarousel'
import dynamicDialogue from '@/components/Dialogue/DialogueDynamic'
import { mapState } from 'vuex'
import Promise from 'bluebird'
import { select } from 'd3-selection';
import 'd3-transition'; 

export default {
    name:'projects',
	data () {
		return {
            gradientIndex: 2,
			projects: this.$store.state.projects,
            startDialogue:false,
            showDelay: 1500,
            script:[
                {speaker:'man', line:"", duration: 1000},
                {speaker:'man', line:"Welcome... to the gallery"},
                {speaker:'man', line:"...", duration: 1000},
                this.fixRotatedPortrait,
                {speaker:'robot', line:"so sorry sire. it won't happen again"},
                {speaker:'man', line:"Please Guest, feel free to browse around"},
            ],
            
		}
	},
    computed:{
        ...mapState(['scrolledToProjects'])
    },
    watch:{
        scrolledToProjects(val){
            if(val)
                this.startDialogue = true
        }
    },
    mounted(){
        //joke: egg said gallery was ready but the first portrait is fucked up.
        this.$el.querySelector('.frame').classList.add('rotated')
    },
    methods:{
        fixRotatedPortrait(){
            return new Promise(resolve => {
                var robot = this.$el.querySelector('.robot-text img')
                var robotBbox = robot.getBoundingClientRect()
                var rotatedPortrait = this.$el.querySelector('.frame.rotated')
                var portraitBbox = rotatedPortrait.getBoundingClientRect()
                
                var x = Math.round(portraitBbox.left - robotBbox.left)
                var y = Math.round(portraitBbox.top - robotBbox.top)
                var translate = `translate(${x}px,${y}px)`
                /*
                robot.style.transition = '1s ease-in-out'
                robot.style.transform = translate*/

                select(robot)
                    .transition()
                    .duration(1000)
                    .style('transform',translate)
                    .on('end', function(){
                        rotatedPortrait.classList.remove('rotated')
                    })
                .transition()
                    .duration(1500)
                    .delay(950)
                    .style('transform',null)
                    .on('end',resolve)
            })
        },
    },
    components:{
        dynamicDialogue,
        projectCarousel
    }
}

</script>


<style lang="scss" scoped>


#projects{
    color: #333;
}

.app-section-title,
.project-list{
    transition: 2s;
}

.project-dialogue{
    
}

</style>