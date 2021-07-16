<template>
    <div class="exhibit">
        <div v-if="label" class="portrait-label z-depth-2">
            <div class="title raleway">{{ label.title }}</div>
            <div class="desc" v-html="label.desc"></div>
        </div>
        <div v-if="displayType == 'video'" class="frame">
            <iframe :src="slide.video+'?rel=0'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen>
            </iframe>
        </div>
        <div v-else-if="displayType == 'image'" class="img-container" :class="{ 'dual-image': images.length > 1}">
            <div v-for="img in images" class="frame" :key="img">
                <img class="portrait" :data-flickity-lazyload="require('@/assets/images/projects/'+img)" />
            </div>
        </div>
    </div>
</template>

<script>

import isUndefined from 'lodash/isUndefined'

export default  {
    name:'project-portrait',
    props:['displayType','slide'],
    computed:{
        label(){
            return this.slide.label
        },
        images(){
            if(Array.isArray(this.slide.img))
                return this.slide.img
            else
                return [this.slide.img]
        }
    },
}

</script>

<style lang="scss">

.img-container.dual-image{
    img.portrait{
        height: 40vh;
    }
}

</style>

<style lang="scss" scoped>

$easeInCubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
$easeOutBack: cubic-bezier(0.175, 0.885, 0.620, 1.650);

.exhibit{
    padding: 1em 3em;    
    display: flex;
    align-items: center;
    //height: 100%;
}

.portrait-label{
    flex:1;
    margin-right: 1.5em;
    min-width: 150px;
    width: 200px;
    max-width: 100%;    
    padding: .5em;
    .title{
        font-weight: bold;
        font-size: 1.1em;
        margin-bottom: 0.25em;
    }
    .desc{
        font-weight: 300;
    }
}


.frame {
    position: relative;
    margin-bottom: .5em;
    height: auto;
    transition: transform 1s $easeOutBack;
    box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
    border-style: solid;
    border-width: 2vmin;
    border-radius: 2px;
    
    &.rotated{
        transform: rotate(10deg);
    }
    iframe {
        position: relative;
        z-index: 1;
        //720p ratio
        width: 70vw;
        height: calc((9/16)*70vw);
    }
    img{
        max-height: 70vh;
        width: auto;
        max-width: 80vw;
        display:block;
    }

    &:before, 
    &:after{
        content:"";
        position:absolute;
        border-radius:2px;
    }

    &:before {
        box-shadow:0 2px 5px 0 rgba(0,0,0,.25) inset;
        bottom:-1vmin;
        left:-1vmin;
        right:-1vmin;
        top:-1vmin;
    }
    &:after {
        box-shadow:0 2px 5px 0 rgba(0,0,0,.25);
        bottom:-1.75vmin;
        left:-1.75vmin;
        right:-1.75vmin;
        top:-1.75vmin;
    }
}


</style>


<style lang="scss">



.project-carousel{
    .portrait-label{
        color: $offwhite;
        background: #333;
    }
    &:nth-child(odd) .frame{
        background-color:#333;
        border-bottom-color:#444;
        border-left-color:#333;
        border-right-color:#333;
        border-top-color:#222;
    }
    &:nth-child(even){
        .portrait-label{
            color: #333;
            background: $offwhite;
        }
        .frame{
            background-color: $offwhite;
            border-bottom-color: #fcfcfc;
            border-left-color: $offwhite;
            border-right-color: $offwhite;
            border-top-color: #e1e1e1;
        }
    }
}
</style>
