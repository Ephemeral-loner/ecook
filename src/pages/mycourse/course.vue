<template>
	<div>
		<div class="course-top">
			<myheader>
				<div class="c-top1" slot="header-center">
					<input type="text" />
					<img class="c-input1" src="../../../static/icon/ic_search.png" alt="" />
					<span class="c-input">搜索&nbsp;课程</span>
				</div>
				<img class="h-top2" slot="header-img2" src="../../../static/icon/course_top_myvideo.png" alt="" />
			</myheader>
		</div>
	</div>
</template>

<script>
	import Myheader from '../../components/myheader';
	export default{
		name:"course",
		components:{Myheader}
	}
</script>

<style>
	.course-top{
		width: 100%;
		height: 40px;
		position: relative;
		top: 0;
		background: #2a2b2f;
	}
	.course-top .h-top2{
		width: 40px;
		color: #9fa0a2;
		position: absolute;
		right: 3%;
	}
	.c-top1{
		width: 80%;
		height: 30px;
		background: #717274;
		border-radius: 5px;
		position: absolute;
		left: 3%;
		top: 12%;
	}
	.c-top1 input{
		height: 25px;
		line-height: 25px;
		position: absolute;
		top: 0;
		left: 18%;
		background: #717274;
		border: none;
	}
	.course-top .c-input1{
		position: absolute;
		top: 30%;
		left: 34%;
		width: 12px;
	}
	.course-top .c-top1 .c-input{
		position: fixed;
		top: -0.1%;
		left: 37%;
		/*color:#acadaf;*/
		color: lightgray;
	}
</style>