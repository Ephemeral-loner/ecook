<template>
	<div>
		<div class="m-top">
			<myheader>
				<img class="m-right1" slot="header-center" src="../../../static/icon/home_message.png" alt="" />
				<img class="h-top2" slot="header-img2" src="../../../static/icon/icon_setting.png" alt="" />
			</myheader>
		</div>
	</div>
</template>

<script>
	import Myheader from '../../components/myheader';
	export default{
		name:"mine",
		components:{Myheader}
	}
</script>

<style>
	.m-top{
		width: 100%;
		height: 40px;
		position: relative;
		top: 0px;
		color: white;
		background:#ffa746 ;
	}
	.m-top .h-top2{
		color: white;
		position: absolute;
		right: 5%;
		top: 24%;
	}
	.m-top .m-right1{
		position: absolute;
		right: 17%;
		top: 28%;
	}
</style>