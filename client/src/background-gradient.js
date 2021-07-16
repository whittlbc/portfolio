

import {CHANGE_BACKGROUND} from '@/store'
import throttle from 'lodash/throttle'
import { easeCubicInOut } from 'd3-ease'
import { interpolateRgb } from 'd3-interpolate'

export default {
    data(){
		var g = this.$store.getters.currentGradient
		return {
			color1: g[0],
			color2: g[1],
			duration: 1500,
			startTime: null,
			interpolator1: null,
			interpolator2: null,
            menuIsActive: false
		}
	},
	computed:{
		currentGradient(){
			return this.$store.getters.currentGradient
		},
		background(){
			return {
				background: `linear-gradient(to left, ${this.color1} 10%, ${this.color2} 90%)`
			}
		}
	},
	watch:{
		//transition from the current gradient, to handle mid-transition changes
		currentGradient(newGradient){
			this.startTime = new Date();
			this.interpolator1 = interpolateRgb(this.color1,newGradient[0])
			this.interpolator2 = interpolateRgb(this.color2,newGradient[1])
			
			requestAnimationFrame(this.draw)
		},
	},
	mounted(){
		var self = this;
		$('#app > .app-section').inViewport(function( pixelsOnScreen ){
			var isMoreThanHalf = pixelsOnScreen >= window.innerHeight/2;
            let gradientIndex = $(this).data('gradient-index')
			if(isMoreThanHalf && self.$store.state.gradientIndex !== gradientIndex)
				self.$store.commit(CHANGE_BACKGROUND, { gradientIndex })
		});

		this.$nextTick(this.setScrollFires)
	},
	methods:{
		draw(){
			var elapsed = new Date() - this.startTime;
			var normalizedTime = Math.min(elapsed,this.duration)/this.duration
			var easedTime = easeCubicInOut(normalizedTime);
			this.color1 = this.interpolator1(easedTime)
			this.color2 = this.interpolator2(easedTime)

			if(elapsed < this.duration)
				requestAnimationFrame(this.draw)
		},
        toggleMenu(){
            this.menuIsActive = !this.menuIsActive;
        },
        /*onClickAnchor(e){
			e.preventDefault();
            var anchor = e.currentTarget.getAttribute('href')
            var node = document.querySelector(anchor);
            var top = node.offsetTop;
            window.scroll({ top , behavior: 'smooth' });
        },*/
		setScrollFires(){
			//available scrollfire classes in custom.less file
			//add ONLY ONE of these classes to any element
			var options = []
			var regex = new RegExp('scrollfire')
			let defaultOffset = 100;
			$('[class*="scrollfire"]').each(function(index){
				var $this = $(this);
				let scrollfireType = $this.attr('class').split(' ').find(c=>regex.test(c))
				let tempClass = 'scrollfire-'+index
				$this.addClass(tempClass);
				$this.attr('data-scrollfire-type',scrollfireType)
				let customOffset = $this.data('scrollfire-offset')
				let offset = customOffset ? customOffset : defaultOffset;

				if(scrollfireType === 'scrollfire-to-top')
					offset -= 75; //offset the translateY

				options.push({ selector: '.'+tempClass, offset, callback: scrollFireCallback })
			})
			Materialize.scrollFire(options)
		}
	}
}

function scrollFireCallback(el){
    var $el = $(el)
    $el.addClass('scrollfire-active')
	let classToRemove = $el.attr('data-scrollfire-type')
	let delay = $el.attr('data-scrollfire-delay') || 0;

	setTimeout(()=>$el.removeClass(classToRemove), delay)
    	
    $el.one('transitionend',function(){
        $el.off('transitionend')
		$el.attr('class',(i,c)=>c.replace(/(^|\s)scrollfire\S+/g, ''))
    })
}

;(function($, window) {
	$.fn.inViewport = function(cb) {
		return this.each((i,el)=>{
			let fn = throttle(()=>{
				var elH = $(el).outerHeight(),
					H = window.innerHeight,
					r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
					return cb.call(el, Math.max(0, t>0 ? Math.min(elH, H-t) : (b<H?b:H)),i);  
				},100)
			fn();
			$(window).on("resize scroll", fn);
		});
	};
}(jQuery, window));