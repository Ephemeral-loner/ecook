<template>
	<div>
		<div class="home-top">
			<myheader>
				<img class="h-top1" slot="header-img1" src="../../../static/icon/home_upload_top.png" alt="" />
				<img class="h-top2" slot="header-img2" src="../../../static/icon/home_shop_top.png" alt="" />
			</myheader>
			<div class="home-center">
				<div class="home-center1">
					<p>网上厨房</p>
				</div>
				<div class="home-center2">
					<div class="input-body">
						<input type="text"/>
						<img src="../../../static/icon/icon_search.png" alt="" />
						<span>在此输入菜名/食材&nbsp;搜索菜谱</span>
					</div>
				</div>
				<div class="home-center3">
					333
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Myheader from '../../components/myheader';
	export default{
		name:"home",
		components:{Myheader}
	}
</script>

<style>
	/*头部*//*头部*//*头部*//*头部*//*头部*/
	.home-top{
		width: 100%;
		height: 40px;
		line-height: 40px;
		position: relative;
		top: 0px;
		color: #3b3c3e;
		border-bottom: 1px solid lightgray;
	}
	/*center部分*//*center部分*//*center部分*//*center部分*/
	.home-center{
		width: 100%;
		height: 220px;
		position: relative;
		display: flex;
		flex-direction: column;
		outline: 1px solid red;
	}
	.home-center .home-center1{
		flex: 0.3;
		outline: 1px solid red;
	}
	.home-center p{
		margin-top: 30px;
	}
	.input-body{
		width: 95%;
		height: 40px;
		border-radius: 20px;
		border: 1px solid black;
		position: relative;
		margin: 0 auto;
	}
	.input-body input{
		width: 88%;
		height: 38px;
		border: none;
	}
	.input-body img{
		width: 20px;
		position: absolute;
		top: 25%;
		left: 5%;
	}.input-body span{
		position: absolute;
		left: 15%;
	}
	.home-center .home-center2{
		flex: 0.3;
		outline: 1px solid red;
	}
	.home-center .home-center3{
		flex: 0.38;
		outline: 1px solid red;
	}

</style>