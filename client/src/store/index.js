import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import technologies from './technologies'
import projects from './projects'

Vue.use(Vuex)

export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND'
export const POST_COMMENT = 'POST_COMMENT'

let store = new Vuex.Store({
	state: {//
        gradientIndex: 0,
        //these gradients are bright, so i need to change the text color to keep it readable
        brightGradientIndexes: [2,3],
        scrolledToProjects: false,
        gradients:[
            ['#da7352','#d64759'],//red/orange
            ['#38aecc','#2E3192'],//blue
            ['#F5F5F5','#F5F5F5'],//white
            ['#faf0cd','#fab397']//peach
        ],
        ...projects,
        ...technologies
    },
	mutations:{
        [CHANGE_BACKGROUND] (state, { gradientIndex }){
            state.gradientIndex = gradientIndex
            if(gradientIndex == 2 && !state.scrolledToProjects)
                state.scrolledToProjects = true;
        },
	},
    actions:{
        [POST_COMMENT] ({commit, state}, {data}){
            return axios.post('/api/comments', { data })
        },
    },
    getters:{
        defaultGradient: state => {
            return state.gradients[0]
        },
        currentGradient: state => {
            return state.gradients[state.gradientIndex]
        },
        gradient: state => index => {
            return state.gradients[index]
        },
    }
})

export default store;