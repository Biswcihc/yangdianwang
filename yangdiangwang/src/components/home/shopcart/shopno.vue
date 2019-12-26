<template>
    <div class="shopcarNo">
		<div class="mes">
			<span class="iconfont"></span>
			<p>购物车还是空的快去逛逛吧~</p>
		</div>
	</div>
</template>
<script>
export default {
    name:"ShopcarNo"
}
</script>
<style scoped>
    .shopcarNo{
        width: 100%;
        height: 14.67rem /* 1100/75 */ ;
        position: relative;
        overflow: hidden;
    }
    .mes{
        width: 3.07rem  /* 230/75 */;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        height: 2rem /* 150/75 */;
    }
    .mes .iconfont{
        font-size: 1.15rem /* 86/75 */;
    }
    .mes p{
        font-size: .43rem /* 32/75 */;
    }
</style>
