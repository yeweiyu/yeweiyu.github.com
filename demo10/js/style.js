$(document).ready(function(){

	function ietrim(str){
		return str.replace(/^\s+|\s+$/gi,'');
	}
	$(".key_word").blur(function(){
		if(ietrim($(this).val()) == ''){
			$(this).val('请输入商品关键字');
		}
	});
	$(".key_word").focus(function(){
		if(ietrim($(this).val()) == '请输入商品关键字'){
			$(this).val('');
		}
	});
	$(".key_word2").blur(function(){
		if(ietrim($(this).val()) == ''){
			$(this).val('搜索品牌');
		}
	});
	$(".key_word2").focus(function(){
		if(ietrim($(this).val()) == '搜索品牌'){
			$(this).val('');
		}
	});

	$(".car,.geren_car").mouseenter(function(){
		$(".gwc_lrc").css("display","inline");
	});
    
	$(".car,.geren_car").mouseleave(function(){
		$(".gwc_lrc").css("display","none");
	});

	//登陆
	$(".login_bu").click(function(){
		$(".login_bu,.login_qian").css("display","none");
		$(".login_hou").css("display","inline");
		return false;
	});

	$(".geren").mouseenter(function(){
		$(".xiala_ul").css("display","inline");
	});
	$(".geren").parent().mouseleave(function(){
		$(".xiala_ul").css("display","none");
	});

	//品牌列表
	$(".pai_name").mouseenter(function(){
		$(this).addClass("change");
		$(this).siblings().removeClass("change");

		var this_in = $(this).index();
		if(this_in == 0){
			$(".pai_list").css("display","block");
			$(".pai_list").siblings("ul").css("display","none");
		}else if(this_in == 1){
			$(".erpai_list").css("display","block");
			$(".erpai_list").siblings("ul").css("display","none");
		}else if(this_in == 2){
			$(".sanpai_list").css("display","block");
			$(".sanpai_list").siblings("ul").css("display","none");
		}
	});

	//侧边
	$(".aside div").mouseenter(function(){
		$(this).addClass("bg");
		$(this).children(".say").css("display","block");
	});
	$(".aside div").mouseleave(function(){
		$(this).removeClass("bg");
		$(this).children(".say").css("display","none");
	});

	//效果
	var index = 0;
	var time = setInterval(function(){
		index++;
		if(index > (li - 1)){
			index = 0;
		}
		$(".lunbo .lunbo_ul li:eq(" + index + ")").fadeIn(600);
		$(".lunbo .lunbo_ul li:eq(" + index + ")").siblings().fadeOut();

		$(".yuandian li:eq(" + index + ")").addClass("now");
		$(".yuandian li:eq(" + index + ")").siblings().removeClass("now");
	},2000);

	$(".yuandian li").mouseenter(function(){

		clearInterval(time);

		$(this).addClass("now");
		$(this).siblings().removeClass("now");

		$(".lunbo .lunbo_ul li").eq($(this).index()).siblings().stop();
		$(".lunbo .lunbo_ul li").eq($(this).index()).fadeIn(600);
		$(".lunbo .lunbo_ul li").eq($(this).index()).siblings().fadeOut();

		index = $(this).index();
	});

	$(".yuandian li").mouseleave(function(){

		time = setInterval(function(){
			index++;
			if(index > (li - 1)){
				index = 0;
			}
			$(".lunbo .lunbo_ul li:eq(" + index + ")").fadeIn(600);
			$(".lunbo .lunbo_ul li:eq(" + index + ")").siblings().fadeOut();

			$(".yuandian li:eq(" + index + ")").addClass("now");
			$(".yuandian li:eq(" + index + ")").siblings().removeClass("now");
		},2000);

		
	});

	$(".all_goods_word .all_goods_list").mouseenter(function(){
		$(this).css("cursor","auto");
	});

	$("http://case.tenghuiit.com/demo10/js/.all_goods_word .all_goods_list .row").each(function(){
		$(this).children(".white_line").css("height",(this.offsetHeight - 1) + 'px');
	});
	
    
	//进入二级菜单
	$("http://case.tenghuiit.com/demo10/js/.all_goods_word .all_goods_list .row").mouseenter(function(){
		$(this).children(".san_menu").css("display","inline");
        //线条
        $(this).children(".white_line").css("display","inline");
        $(this).find("ul").children(".youjian").addClass("youjian1");
        
		//让本div和上个div的下面的线变样
		$(this).css("border-bottom","1px solid #DCDCDC");
		$(this).prev().css("border-bottom","1px solid #DCDCDC");

	});

	$("http://case.tenghuiit.com/demo10/js/.all_goods_word .all_goods_list .row").mouseleave(function(){
		$(this).children(".san_menu").css("display","none");
        //线条
        $(this).children(".white_line").css("display","none");
		$(this).find("ul").children(".youjian").removeClass("youjian1");

		//让本div和上个div的下面的线变样
		$(this).css("border-bottom","1px dashed #DCDCDC");
		$(this).prev().css("border-bottom","1px dashed #DCDCDC");
	});
    
	$(".san_menu").mouseenter(function(){
		$(this).css("display","inline");
	});
	$(".san_menu").mouseleave(function(){
		$(this).css("display","none");
	});

	//购物车
	$("http://case.tenghuiit.com/demo10/js/.erweima .car").click(function(){
		$(".show_car").css("display","inline");
	});


	//个人中心页
	$("http://case.tenghuiit.com/demo10/js/.geren_down_all .gz_info .yi .uname .chan").mouseenter(function(){
		$(this).children("img").attr("src","img/qita/pen1.png"/*tpa=http://case.tenghuiit.com/demo10/js/img/qita/pen1.png*/);
	});
	$("http://case.tenghuiit.com/demo10/js/.geren_down_all .gz_info .yi .uname .chan").mouseleave(function(){
		$(this).children("img").attr("src","img/qita/pen.png"/*tpa=http://case.tenghuiit.com/demo10/js/img/qita/pen.png*/);
	});

	$(".goumai").click(function(){
		$(this).addClass("clic");
		$(this).children(".goumai_num").addClass("clic1");
		$(this).siblings(".goumai").children(".goumai_num").removeClass("clic1");
		$(this).siblings(".goumai").removeClass("clic");

		return false;
	});

	$(".guanzhu a").click(function(){
		$(this).addClass("clic");
		$(this).siblings().removeClass("clic");
		return false;
	});

	//关注的品牌
	$(".guanzhu a").click(function(){
		$(this).addClass("clic");
		$(this).siblings("a").removeClass("clic");
		if($(this).index() == 0){
			$(".goods_name_ul").css("display","block");
			$(".pu_name_ul,.pin_name_ul").css("display","none");
		}else if($(this).index() == 1){
			$(".pu_name_ul").css("display","block");
			$(".pin_name_ul,.goods_name_ul").css("display","none");
		}else if($(this).index() == 2){
			
			$(".pu_name_ul,.goods_name_ul").css("display","none");
			$(".pin_name_ul").css("display","block");
		}
		return false;
	});
});