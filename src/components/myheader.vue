<template>
	<div>
		<div class="headerwrap">
			<slot name="header-img1"></slot>
			<slot name="header-center"></slot>
			<slot name="header-img2"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"myheader"
	}
</script>

<style>
	.headerwrap{
		width: 100%;
		height: 40px;
		line-height: 40px;
		position: relative;
		top: 0px;
		color: #3b3c3e;
	}
	.headerwrap img{width:20px;}
	.headerwrap .h-top1{
		position: absolute;
		left: 5%;
		top: 19%;
	}
	.headerwrap .h-top2{
		position: absolute;
		right: 5%;
		top: 19%;
	}
</style>