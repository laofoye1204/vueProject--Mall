<template>
	<div class="searchBox">
		<header-bar :goBack='true' class="bg" >
	        <div class="title-box" slot='search'>
	          <form>
	            <input type="text" placeholder="请输入关键字">
	            <button type="submmit" id='searchBtn'></button>
	          </form>
	        </div>
	        <div class="header-right"  slot='icon-image'>
	           <label for="searchBtn">搜索</label>
	        </div>
	     </header-bar>
	     <div class="container">
	     	<ul v-for='item in copyGrid'>
	     		<li v-for='i in item'>{{i.tit}}</li>
	     	</ul>
	     </div>
	</div>
</template>
<script>
 import headerBar from "@/components/header/header"
	export default{
        components:{
        	headerBar
        },
        data(){
            return {
            	 gridData: [],
	             apiUrl: 'http://localhost:3000/searchBox'
            }
        },
        computed:{//计算属性
           copyGrid:function(){
              var arr=this.gridData;
              var newArr=[];
	          var len=Math.floor(arr.length/3);
	          for(var i=0;i<len;i++){
	                var arr1=arr.splice(0,3)
	                newArr.push(arr1);
	          }
	           newArr.push(arr);
	          return newArr;
           }
        },
        created:function(){
           this.getCustomers();
        },
        methods: {
	      getCustomers: function() {
	        this.$http.get(this.apiUrl)
	          .then((response) => { //请求成功
	            this.gridData=response.data;
	          })
	          .catch(function(response) {//出错
	            console.log(response)
	          })
	      },
	      dataFormat:function(arr,type){
            
	      }
	     } 
	}
</script>
<style lang="less" scoped>
	.searchBox{
    	width:100%;
    	height:100%;
    }
	.bg{
        background: rgb(0, 145, 198)!important;
        opacity: 0.95!important;
      }
      .container{
      	width:100%;
      	padding-top:.44rem;
      	background:#fff;
      	ul{
      		width:100%;
      		display:-webkit-box;
      		-wenkit-box-align:center;
      		-webkit-box-pack:center;
      		padding:0 .3rem;
      		box-sizing:border-box;
      		li{
                -webkit-box-flex:1;
                text-align:center;
                height:.3rem;
                line-height:.3rem;
                border:1px solid #ccc;
                margin:.05rem;
                border-radius:.15rem;
      		}
      	}
      }
</style>
