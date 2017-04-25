<template>
	<div class="catalog">
		  <header-bar :goBack='true' class="bg" :head-title="title" :flag="flag" @flagChange='wait' :id="id">
	        <div class="title-box" slot='search' >
	        </div>
	        <div class="header-right"  slot='icon-image' @click='log'>
	        </div>
	     </header-bar>
	    
	     <section class="catagoryContaniner">
	     	<div class="sidebar">
	     		<router-link v-for='item in gridData' :to='{path:"/catalog/"+item.id}'>
	     			{{item.title}}
	     		</router-link>	
	     	</div>
	     	   <router-view　:room='contentData' :img='img'></router-view>
	     </section>
	</div>
</template>
<script>
    import headerBar from "@/components/header/header"
	export default{
		data(){
          return {
          	  title:'',
          	  img:'',
          	  gridData: [],
          	  contentData:[],
              apiUrl: 'http://localhost:3000/catalog',
              id:'',
              flag:false
              
          }
		},
       components:{
       	headerBar
       },
       created: function() {
        this.getCustomers();
        this.$emit('bodyH',true);
	    },
	    methods: {
	      getCustomers: function() {
	        this.$http.get(this.apiUrl)
	          .then((response) => { //请求成功
	          	this.title=response.data.title;
	            this.gridData=response.data.content;
	            this.id=this.gridData[0].id;
	            this.contentData=this.gridData[0].choose;
	            this.img=this.gridData[0].img;
	            //默认跳转
	            this.go(this.id);
	          })
	          .catch(function(response) {//出错
	            console.log(response)
	          })
	      },
	      go:function(id){
	      	 this.$router.push({ path: '/catalog/'+id});
	      },
	      log:function(){
	      	this.flag=!this.flag;
	      },
          wait:function(res){ 
          	this.flag=res;
          }
	    },
	    watch:{
	    	$route:function(){
	    		var id=this.$route.params.id;
	    		if(!id){
	    			this.$router.push({ path: '/'});
	    		}
	    		var self=this;

	    		this.gridData.forEach( function(val) {
	    			if(val.id==id){
                      self.contentData=val.choose;
                      self.img=val.img;

	    			}
	    		});
	    	}
	    }
	}
</script>
<style lang="less" >
   body{
   	height:100%;
   }
    .catalog{
    	width:100%;
    	height:100%;
    }
	.bg{
        background: rgb(0, 145, 198)!important;
        opacity: 0.95!important;
      }
    .header-right{
	    
	    background:url(../../../static/images/ico_02.png) no-repeat 50% 50%;

	}
	.catagoryContaniner{
		width:100%;
		height:100%;
		overflow:hidden;
		padding-top:.44rem;
	}
	.sidebar{
		width:25%;
		height:100%;
		float:left;
		background:#fff;
		a{
			display:block;
			width:100%;
			height:.4rem;
			line-height:.4rem;
            color:#333;
            text-align:center;
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
            &.router-link-active{
            	color: #0091C6;
			    border-left: 2px solid #0091C6;
			    background: #ebeced;
            }
		}
	}
	
</style>