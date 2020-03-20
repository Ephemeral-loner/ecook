<template>
	<div>
		<div class="itemwrap" @click="fn()">
			<span v-show="!bol"><slot name="normalImg"></slot></span>
			<span v-show="bol"><slot name="activeImg"></slot></span>
			<p :class="{'active':bol}">{{title}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"item",
		props:["title","mark","active"],
		computed:{
			bol(){
				if(this.mark==this.active){
					return true
				}else{
					return false
				}
			}
		},
		methods:{
			fn(){
				this.$emit("myevent",this.mark)
				this.$router.push("/"+this.mark)
			}
		}
	}
</script>

<style>
	.itemwrap{
		width: 20%;
		height: 100%;
		float: left;
		text-align: center;
	}
	.itemwrap img{
		margin-top: 5px;
		width: 30px;
	}
	.active{color:#ffc000;}
</style>