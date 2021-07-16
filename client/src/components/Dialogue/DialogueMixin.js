import { mapState } from 'vuex'

export default {
    computed:{
        ...mapState(['gradientIndex','brightGradientIndexes']),
        //only the projects section has a bright background, need to keep the text readable.
        speechBubbleClass(){
            let baseClass = 'speech-bubble'
            let variant = this.brightGradientIndexes.includes(this.gradientIndex) ? '-dark' : '-light' 
            return baseClass + variant;
        }
    },

}