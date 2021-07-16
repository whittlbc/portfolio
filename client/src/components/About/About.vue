<template>
    <div id="about" class="app-section" :data-gradient-index="gradientIndex">
        <div class="container">
            <div class="app-section-title scrollfire-appear">The Entrance Hall</div>
            <div class="robot-intro robot-text flow-text">
                    <floating-robot class="scrollfire-to-right" data-scrollfire-delay="1000" />
                    <span class="scrollfire-appear" data-scrollfire-delay="1500">
                        <template v-for="line in robotIntro">
                            <span class="speech-bubble-light" v-html="line" :key="line"></span>
                            <br>
                        </template>
                    </span>
            </div>
            <div class="section">
                <img style="height: 300px" src="/orisa.png" />
                <img style="height: 300px" src="/reinhardt.jpg" />
                <audio style="height: 300px" src="/av/pipes.mp3" controls="controls"/>
                <audio style="height: 300px" src="/av/vegas.mp3" controls="controls"/>
                <video style="height: 300px" src="/av/vacations.mp4" controls="controls"/>
                <video style="height: 300px" src="/av/lpl.mp4?cache=bust" controls="controls"/>
                <video height="302" ref="videoPlayer" class="video-js" controls>
                    <source src="https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8" type="application/x-mpegURL">
                </video>
            </div>
            <div class="section">
                <div class="clearfix">
                    <div class="scrollfire-to-left img-wrapper"  data-scrollfire-delay="1000">
                        <man-portrait />
                        <div>Egg rendition</div>
                    </div>

                    <div class="scrollfire-to-right"  data-scrollfire-delay="1000" >
                        <span>Name</span>
                        <div class="name">Eric Guan</div>
                        <ul class="flow-text">
                            <li>Age: {{ ageInYears }}</li>
                            <li>Gender: Male</li>
                            <li>Height: 5'9"</li>
                            <li>Location: San Diego, California</li>
                            <li>Title: Software Developer</li>
                        </ul>
                    </div>
                </div>
                <links></links>
                <persistent-dialogue :script="script"></persistent-dialogue>
            </div>
        </div>
    </div>
</template>

<script>
import manPortrait from './ManPortrait'
import links from './Links'
import floatingRobot from './FloatingRobot'
import persistentDialogue from '@/components/Dialogue/DialoguePersistent'
import {mapState} from 'vuex'
import videojs from 'video.js';

export default {
    name:'about',
    data(){
        return {
            gradientIndex:0,
            birthYear: 1991,
            robotIntro:[
                'Welcome to <b class="raleway">Guanzo manor</b>',
                "I am the caretaker of this estate, my name is <b>Egg</b>.",
                "Here you will find Guanzo's greatest software works.",
                "Allow me to make an introduction."
            ],
            script:[
                {speaker:'man', lines:["Hi there Guest! I see you've met my-",]},
                {speaker:'robot', lines:["Welcome home sire"]},
                {speaker:'man', lines:["Hi Egg.","Would you kindly prepare the gallery for a showing"]},
                {speaker:'robot', lines:["Yes sire"]},
                {speaker:'man', lines:["Let's get this tour started"]},
            ],
            player: null,
        }
    },
    mounted(){
        this.player = videojs(this.$refs.videoPlayer)
    },
    computed:{
        ageInYears(){
            return new Date().getFullYear() - this.birthYear
        },
    },
    beforeDestroy() {
        this.player && this.player.dispose()
    },
    components:{
        floatingRobot,
        persistentDialogue,
        manPortrait,
        links
    }
}

</script>

<style lang="scss" scoped>

#about{
    position: relative;
}

.robot-intro{
    padding-top: 15vh;
    padding-bottom: 15vh;
}

.disclaimer{
    line-height: 2;
}

.name{
    font-size: 2rem;
}

.trademark{
    font-size: 0.75rem;
}

.sire-found{
    margin:50px 0px;
}

.alert{
    padding: 0px 3px;
    border-radius: 4px;
}

.redacted{
    background-color: black;
}

.img-wrapper{
    margin: 0px 0px .5rem .5rem;
    float: right;
    text-align: center;
    width: 25%;
    min-width: 125px;
    img{
        width: 100%;
        min-width:125px;
        height: auto;
        max-height:200px;
    }
}



</style>
