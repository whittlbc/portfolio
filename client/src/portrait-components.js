
import Vue from 'vue'

Vue.component('man',{
	render(createElement){
		return createElement(
			'svg',{
				attrs:{
					class:'speech-portrait z-depth-1 circle',
					width:'50',
					height:'50'
				},
			}, [
				createElement('use',{
					attrs: {
					'xlink:href':'#man-svg'
					}
				})
			]
		)
	}
})

Vue.component('robot',{
	render(createElement){
		return createElement(
		'img',
			{
				attrs:{
					class:'speech-portrait',
					src: require('@/assets/images/robot.svg')
				}
			}
		)
	}
})
