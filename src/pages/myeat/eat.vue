<template>
	<div>
		<div class="e-top">
			<myheader>
				<img class="h-top1" slot="header-img1" src="../../../static/icon/service_pic.png" alt="" />
				<div class="e-center" slot="header-center">
					<div class="etop-left">
						广场
						<img class="et-line1" src="../../../static/icon/ic_yellow_line.png" alt="" />
					</div>
					<div class="etop-right">
						关注
						<img class="et-line2" src="../../../static/icon/ic_yellow_line.png" alt="" />
					</div>
				</div>
				<img class="h-top2" slot="header-img2" src="../../../static/icon/home_message.png" alt="" />
			</myheader>
		</div>
	</div>
</template>

<script>
	import Myheader from '../../components/myheader';
	export default{
		name:"eat",
		components:{Myheader}
	}
</script>

<style>
	.e-top{
		width: 100%;
		height: 40px;
		position: relative;
		top: 0;
		border-bottom: 1px solid lightgray;
	}
	.e-top .h-top1{
		color: white;
		position: absolute;
		left: 5%;
		top: 25%;
	}
	.e-top .h-top2{
		position: absolute;
		right: 5%;
		top: 25%;
	}
	.e-center{
		width: 60%;
		height: 40px;
		display: flex;
		position: relative;
		left: 20%;
		color: #a8a8a8;
		/*outline:1px solid red;*/
	}
	.e-center .etop-left{
		flex: 1;
		width: 100%;
		height: 40px;
		display: flex;
		position: relative;
		flex-direction: column;
		/*outline:1px solid red;*/
	}
	.etop-left .et-line1{
		position: absolute;
		top: 80%;
		left: 39%;
	}
	.e-center .etop-right{
		flex: 1;
		position: relative;
	}
	.etop-right .et-line2{
		position: absolute;
		top: 80%;
		left: 40%;
	}
</style>