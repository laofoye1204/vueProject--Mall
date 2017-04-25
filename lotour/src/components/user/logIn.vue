<template>
	<div class="logIn">
        <div class="hd">欢迎光临，登录后体验更多服务</div>
		<div class="f6"><a >【享低采购价，联系客服：0755-29020099】</a></div>
	    <ul class="table_box">
	          <form name="formLogin" onsubmit="">
	             <li>
	             	<input placeholder="用户名/手机/电子邮件地址" name="username" type="text" class="inputBg">
	             </li>
	             <li><input placeholder="请输入密码" name="password" type="password" class="inputBg" ></li>    
	             <div>
	                <input type="checkbox" value="1" name="remember" id="remember" class="checkbox">
	                <label for="remember"> 记住密码</label>
					<a style="float: right; color: #1CA2E1;" href="javascript:;">忘记密码?</a>
	             </div>
	             <li>
	                <input type="submit" name="submit" value="登录" class="c-btn3">
	            </li>
	          </form>
	      </ul>
    </div>
	</div>
</template>
<script>

	export default{
             data(){
             	return {
             		
             	}
             },
             methods:{
             	 
             }
	}
</script>
<style lang='less' scoped>
	.logIn{
		width: 100%;
		height: 100%;
		padding: .59rem .1rem .15rem;
		.hd{
			height:.3rem;
			line-height: .3rem;
			font-size: .12rem;
		}
		.f6{
			height:.3rem;
			line-height: .3rem;
			a{
				display: block;
				width: 100%;
				height: 100%;
				font-size: .12rem;
				color:#1CA2E1;
			}
		}
		.table_box{
			width: 100%;
			li{
				width: 100%;
				height: .4rem;
				line-height: .4rem;
				input{
					height: 100%;
					width: 100%;
					border:none;
					padding-left: .12rem;
					&.c-btn3{
						background: #0091c6;
						color: #fff;
					}
				}
			}
			div{
				width: 100%;
				height: .4rem;
				line-height: .4rem;
				.checkbox{
					vertical-align: middle;
				    border: 1px solid #8ab746;
				    position: relative;
				    width: 20px;
				    height: 20px;
				    -webkit-border-radius: 2px;
				    border-radius: 2px;
				}
				label,a{
					display: inline-block;
					height: 100%;
					font-size: .12rem;
				}

			}
		}
	}
</style>