<template>
    <div id="technologies" class="app-section" :data-gradient-index="gradientIndex">
        <div class="container">
            <div class="app-section-title scrollfire-to-right">The Workshop</div>
            <div class="tech-intro flow-text scrollfire-to-top">
                <p>I consider myself to be a versatile programmer. Having experience in Javascript, Java, and SQL means that
                    I'm able to work in the 3 major areas of web development: <b>frontend</b>, <b>backend</b>, and the <b>database</b>.</p>
                <p>As the state of web development trends more towards complex frontends,
                    so has my focus increased on staying up to date on modern frontend practices.</p>
                <p>Can you guess the technology by the logo?</p>
            </div>
            <div class="interactions scrollfire-to-top" ref="interactions">
                <span v-for="(category,i) in categories"
					:class="activeCategory == i ? 'active':''"
                    class="tech-action" @click="onFilter(i)"
                    :key="category"
                    >{{category}}</span>
                <span class="tech-action" :class="{ active: isRevealed }" @click="toggleReveal">[ Reveal Names ]</span>
            </div>
            <div class="scrollfire-to-top">
                <transition-group ref="wrapper" tag="div" name="tech"
                    class="technology-list flow-text">
                    <div v-for="tech in filteredTech"
                        :class="[tech.class, { reveal: isRevealed } ]"
                        @mouseover="tech.class = 'reveal'"
                        @mouseout="tech.class = ''"
                        :key="tech.name"
                        class="technology z-depth-2-inset"
                    >
                        <div class="img-wrapper">
                            <img :src="tech.imgSrc" :alt="tech.name" >
                        </div>
                        <div class="description-overlay">
                            <b>{{ tech.name }}</b>
                            <span v-html="tech.text"></span>
                        </div>
                    </div>
                </transition-group>
            </div>
            <persistent-dialogue :script="script"></persistent-dialogue>

        </div>
    </div>
</template>

<script>
import persistentDialogue from '@/components/Dialogue/DialoguePersistent'
import smoothHeight from 'vue-smooth-height'

export default {
    name:'technologies',
    mixins:[smoothHeight],
    data () {
        return {
            gradientIndex: 1,
            isRevealed: false,
            categories: this.$store.state.technologyCategories,
            activeCategory: 0,
            script:[
                {speaker:'robot', lines:["What do you make with these tools Sire?"]},
                {speaker:'man', lines:["I like making SPAs, real time web applications, and data visualizations!","Is the gallery ready?" ]},
                {speaker:'robot', lines:["Y-yes SIRE!"]},
            ],
        }
    },
    computed:{
		technologies(){
			return this.$store.state.technologies.slice().sort((a,b)=>a.name.localeCompare(b.name))
		},
        filteredTech(){
            if(this.activeCategory == 0)
                return this.technologies
            else
                return this.technologies.filter(d=>d.category.includes(this.activeCategory))
        },
    },
    mounted(){
        this.$smoothElement({
            el: this.$refs.wrapper.$el,
        })
    },
    methods:{
        onFilter(index){
            this.activeCategory = parseInt(index);
        },
        toggleReveal(){
            this.isRevealed = !this.isRevealed;
        },
    },
    components:{
        persistentDialogue,
    }
}

</script>


<style lang="scss" scoped>

$tech-size: 120px;
$small-tech-size: 80px;
$transition: .75s;

.guess{
    position: relative;
    display:flex;
    justify-content: space-between;
}

.z-depth-2-inset{
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14) inset,
                0 1px 10px 0 rgba(0,0,0,0.12) inset,
                0 2px 4px -1px rgba(0,0,0,0.3) inset;
}

.interactions{
    padding: 15px 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    span{
        margin:0px 0.25em;
        padding:0px 0.25em;
        cursor: pointer;
    }
    span.line{
        cursor: default;
    }
    .tech-action{
        transition: .75s;
        border-radius:4px;
        &.active{
            background: $offwhite;
            color:#333;
        }
        &:not(.active):hover{
            background: rgba($offwhite,0.2);
        }
    }
}

.technology-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    font-size: 0.8rem;
    color: #333;
    transition: height .75s;// to animate height change due to filtering content
}

.technology{
    transition: .75s;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    overflow: hidden;
    border-radius: 50%;
    width: $small-tech-size;
    height: $small-tech-size;
    padding: 5px;
    margin: 5px;
    &.reveal div.description-overlay{
        opacity: 1;
    }
    &.reveal .img-wrapper{
		filter: blur(2px);
    }
}
@media (min-width: 400px){
    .technology-list {
        font-size: 0.85rem;
        .technology{
            width: $tech-size;
            height: $tech-size;
        }
    }
}


div.description-overlay{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    height:100%;
    width:100%;
    background-color:rgba(255,255,255,0.8);
    transition: $transition;
    padding: 5px;
    border-radius: 50%;
    font-weight: 400;
}
.img-wrapper{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    max-width:100%;
    max-height:100%;
    transition: $transition ease-in;
}

.tech-leave-active{
    transition: all .75s, opacity .5s;
    position: absolute;
}

.tech-enter, .tech-leave-to{
    opacity: 0;
}

.tech-enter{
    transform: translateY(30px);
}


</style>
