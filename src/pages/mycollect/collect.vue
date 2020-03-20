<template>
	<div>
		<div class="col-top">
			<myheader>
				<div class="col-t-center" slot="header-center">
					<div class="col-t-left">
						菜谱
						<img class="col-t-line1" src="../../../static/icon/ic_yellow_line.png" alt="" />
					</div>
					<div class="col-t-right">
						课程
						<img class="col-t-line2" src="../../../static/icon/ic_yellow_line.png" alt="" />
					</div>
				</div>
				<img class="h-top2" slot="header-img2" src="../../../static/icon/sc_iocn_search.png" alt="" />
			</myheader>
		</div>
	</div>
</template>

<script>
	import Myheader from '../../components/myheader';
	export default{
		name:"collect",
		components:{Myheader}
	}
</script>

<style>
	.col-top{
		width: 100%;
		height: 40px;
		line-height: 40px;
		position: relative;
		top: 0px;
		border-bottom: 1px solid lightgray;
	}
	.col-t-center{
		width: 70%;
		height: 40px;
		/*outline: 1px solid red;*/
		position: relative;
		left: 10%;
		display: flex;
	}
	.col-t-center .col-t-left,.col-t-center .col-t-right{
		flex: 1;
		position: relative;
	}
	.col-t-left .col-t-line1,.col-t-right .col-t-line2{
		position: absolute;
		top: 80%;
		left: 41%;
	}
</style>