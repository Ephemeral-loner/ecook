<template>
	<div class="tabbar">
			<item title="首页" mark="home" :active="sel" @myevent="getVal">
				<img slot="normalImg" src="../../../static/tabbar/icon_main_home_normal.png" alt="" />
				<img slot="activeImg" src="../../../static/tabbar/icon_main_home_sel.png" alt="" />
			</item>
			<item title="课堂" mark="course" :active="sel" @myevent="getVal">
				<img slot="normalImg" src="../../../static/tabbar/icon_main_course_normal.png" alt="" />
				<img slot="activeImg" src="../../../static/tabbar/icon_main_course_sel.png" alt="" />
			</item>
			<item title="食话" mark="eat" :active="sel" @myevent="getVal">
				<img slot="normalImg" src="../../../static/tabbar/icon_main_talk_normal.png" alt="" />
				<img slot="activeImg" src="../../../static/tabbar/icon_main_talk_sel.png" alt="" />
			</item>
			<item title="收藏" mark="collect" :active="sel" @myevent="getVal">
				<img slot="normalImg" src="../../../static/tabbar/icon_main_collection.png" alt="" />
				<img slot="activeImg" src="../../../static/tabbar/icon_main_collection_sel.png" alt="" />
			</item>
			<item title="我的" mark="mine" :active="sel" @myevent="getVal">
				<img slot="normalImg" src="../../../static/tabbar/icon_main_mine_normal.png" alt="" />
				<img slot="activeImg" src="../../../static/tabbar/icon_main_mine_sel.png" alt="" />
			</item>
	</div>
</template>

<script>
	import Item from './tabbar-item';
	export default{
		name:"tabbar",
		components:{Item},
		data(){
			return{
				sel:"home"
			}
		},
		methods:{
			getVal(value){
				this.sel=value
			}
		}
	}
</script>

<style>
	.tabbar{
		width: 100%;
		height: 64px;
		position: fixed;
		bottom: 0px;
		border-top: 1px solid darkgray;
		font-size: 12px;
	}
</style>