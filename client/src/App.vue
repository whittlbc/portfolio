<template>
	<div id="app" :style="background" v-cloak>
        <!--<menu-button @click.native="toggleMenu"></menu-button>
        <menu-view v-show="menuIsActive"></menu-view>-->
        <about></about>
        <technologies></technologies>
        <projects></projects>
        <guestbook></guestbook>
        <iconCredits></iconCredits>
	</div>
</template>

<script>

import backgroundGradient from './background-gradient'
import menuButton from '@/components/Menu/MenuButton'
import menuView from '@/components/Menu/MenuView'
import about from '@/components/About/About'
import technologies, {scrollfire} from '@/components/Technologies'
import projects from '@/components/Projects/Projects'
import guestbook from '@/components/Guestbook/Guestbook'
import iconCredits from '@/components/IconCredit'

export default {
	name: 'app',
    mixins:[backgroundGradient],
	components:{
        menuButton,
        menuView,
		about,
		technologies,
		projects,
		guestbook,
		iconCredits
	}
}
</script>

<style lang="scss">

@import '~@/style/style.scss';

html, body{
	height: 100%;
	width: 100%;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body{
	color: $offwhite;
	overflow-y: scroll;
}

#app {
	overflow-x: hidden;
    position: relative;
}

.container{
    overflow: visible !important;//quick fix to show projects carousel at full screen width
}



</style>
