// JavaScript Document
window.onerror=function(){return true;}

//tab选项卡
function tab(){
	tabArr = $("[id$='tab']");
	for(var i=0;i<tabArr.length;i++){
		tabArr.eq(i).children().each(function(j){
			$(this).mouseenter(function(){
				$(this).addClass("on");
				$(this).siblings().removeClass("on");
				$(this).siblings().children("em").removeClass("on");
				$(this).children("em").addClass("on");
				id = $(this).parent().attr("id");
				if($("#" + id + "_c").length > 0){
					$("#" + id +"_c").children().eq(j).show();
					$("#" + id +"_c").children().eq(j).siblings().hide();
					//$("#" + id +"_c2").children().eq(j).show();
					//$("#" + id +"_c2").children().eq(j).siblings().hide();
				}
			});	
		});
	}
}

//选显卡1
function setTab(name,cursel,n){   
 for(i=1;i<=n;i++){   
  var menu=document.getElementById(name+i);   
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":""; 
  if(i==cursel) {
	  $("#con_"+name+"_"+i).show();
  }
  else{
	  $("#con_"+name+"_"+i).hide(); 
  }
 }   
}


//个性赠品
$(".zp_lt li").click(function() {
    loc_id = $(this).index();
    $(this).siblings().removeClass("hov");
    $(this).addClass("hov");
});

$(".jia_obj").click(function(){
	num_val = parseInt($(this).parent().children(".num_txt_obj").val());
    total = $(this).parent().children(".num_txt_obj").attr("total");
    if (num_val >= total) {
        num_val = total;
        alert("库存已到最大！");
    } else {
        num_val = num_val + 1;
    }
	$(this).parent().children(".num_txt_obj").val(num_val);
});
    
$(".jian_obj").click(function(){
	num_val = parseInt($(this).parent().children(".num_txt_obj").val());
    total = $(this).parent().children(".num_txt_obj").attr("total");
    if (num_val <= 1) {
        num_val = 1;
    } else {
        num_val = num_val - 1;
    }
	$(this).parent().children(".num_txt_obj").val(num_val);
});


//个性选择
$(".xz_lt li").click(function() {
    loc_id = $(this).index();
    $(this).siblings().removeClass("hov");
    $(this).addClass("hov");
});

//品牌更多
$(".pp_more").click(function() {
    if ($(".pp_c2").css("display") == "none") {
        $(this).children(".ico").addClass("hov");
        $(".pp_c1").hide();
        $(".pp_c2").show();
    } else {
        $(this).children(".ico").removeClass("hov");
        $(".pp_fl_jg_lt label .checkb").hide();
        $(".pp_fl_jg_lt label .checkb").find("input[type='checkbox']").attr("checked",false);
        $(".pp_c2").hide();
        $(".pp_c1").show();
    }
    $(".pp_yxz_lt").hide();
    $(".pp_qd_btnc").hide();
    
    //添加品牌链接
    $(".pp_fl_jg_lt li a").each(function() {
        loc_alink = $(this).attr("link_href");
        $(this).attr("href",loc_alink);
    });
});


//品牌ok
$(".pp_ok_btn").click(function() {
    $(".pp_c2").hide();
    $(".pp_c1").show();
});   

//初始化品牌链接
$(".pp_fl_jg_lt li a").each(function() {
    loc_alink = $(this).attr("link_href");
    $(this).attr("href",loc_alink);
});

//品牌多选
$(".pp_duox").click(function() {
    $(".pp_fl_jg_lt li").removeClass("hov");
    $(".pp_fl_jg_lt label .checkb").show();
    $(".pp_fl_jg_lt label .checkb").find("input[type='checkbox']").attr("checked",false);
    $(".pp_yxz_lt ul").html("<li>已选品牌：</li>");
    $(".pp_yxz_lt").show();
    $(".pp_qd_btnc").show();
    $(".pp_c1").hide();
    $(".pp_c2").show();
    
    //清除品牌链接
    $(".pp_fl_jg_lt li a").each(function() {
        loc_alink = "javascript:void(0);";
        $(this).attr("href",loc_alink);
    });
});

//品牌分类选择
function ppfl_btn(obj,obj2) {
    $(".pp_fl_lt dl").removeClass("hov");
    $("#"+obj).addClass("hov");
    if (obj2 == "All") {
        $(".pp_fl_jg_lt li").show();
    } else {
        ppfl_count = $(".pp_fl_jg_lt li").length;
        for (var i=0;i<ppfl_count;i++) {
            if ($(".pp_fl_jg_lt li").eq(i).attr("rel") == obj2) {
                $(".pp_fl_jg_lt li").eq(i).show(); 
            } else {
                $(".pp_fl_jg_lt li").eq(i).hide(); 
            }
        }
    }
}

//品牌checkbox选择
$(".pp_fl_jg_lt li .checkb").click(function(){
    loc_check_id = $(this).find("input[type='checkbox']").attr("data-rel");
    if ($(this).css("display") == "inline") {
        if ($(this).find("input[type='checkbox']").is(":checked")) {
            $(this).parent().parent().addClass("hov");
            check_str = $(this).parent().text();
            $(".pp_yxz_lt ul").append("<li class='hov' onclick='pp_remove(this)'><label><input type='checkbox' data-rel='"+loc_check_id+"' checked>"+check_str+"</label></li>");
        } else {
            $(this).parent().parent().removeClass("hov");
            yxz_count = $(".pp_yxz_lt li").length;
            for (var i=0;i<yxz_count;i++) {
                if ($(".pp_yxz_lt li").eq(i).find("input[type='checkbox']").attr("data-rel") == loc_check_id) {
                    $(".pp_yxz_lt li").eq(i).remove();
                }
            }
        }
    }
});

//品牌已选择删除
function pp_remove(obj) {
    loc_check_id = $(obj).find("input[type='checkbox']").attr("data-rel");
    pp_count = $(".pp_fl_jg_lt li").length;
    for (var i=0;i<pp_count;i++) {
        if ($(".pp_fl_jg_lt li").eq(i).find("input[type='checkbox']").attr("data-rel") == loc_check_id) {
            $(".pp_fl_jg_lt li").eq(i).find("input[type='checkbox']").attr("checked",false);
        }
    }
    $(obj).remove();
}


//价格多选
$(".jg_duoWx").click(function() {
    $(".jiag_c li").removeClass("hov");
    $(".jiag_c label .checkb").show();
    $(".jiag_c label .checkb").find("input[type='checkbox']").attr("checked",false);
    $(".jg_yxz_lt ul").html("<li>已选：</li>");
    $(".jg_yxz_lt").show();
    $(".jg_qd_btnc").show();
    
    //清除价格链接
    $(".jiag_c li a").each(function() {
        loc_alink = "javascript:void(0);";
        $(this).attr("href",loc_alink);
    });
});

//价格ok
$(".jg_ok_btn").click(function() {
    $(".jg_yxz_lt").hide();
    $(".jg_qd_btnc").hide();
});  

//价格checkbox选择
$(".jiag_c li .checkb").click(function(){
    loc_check_id = $(this).find("input[type='checkbox']").attr("data-rel");
    if ($(this).css("display") == "inline") {
        if ($(this).find("input[type='checkbox']").is(":checked")) {
            $(this).parent().parent().addClass("hov");
            check_str = $(this).parent().text();
            $(".jg_yxz_lt ul").append("<li class='hov' onclick='jg_remove(this);'><label><input type='checkbox' data-rel='"+loc_check_id+"' checked>"+check_str+"</label></li>");
        } else {
            $(this).parent().parent().removeClass("hov");
            yxz_count = $(".jg_yxz_lt li").length;
            for (var i=0;i<yxz_count;i++) {
                if ($(".jg_yxz_lt li").eq(i).find("input[type='checkbox']").attr("data-rel") == loc_check_id) {
                    $(".jg_yxz_lt li").eq(i).remove();
                }
            }
        }
    }
});

//价格已选择删除
function jg_remove(obj) {
    loc_check_id = $(obj).find("input[type='checkbox']").attr("data-rel");
    jg_count = $(".jiag_c li").length;
    for (var i=0;i<jg_count;i++) {
        if ($(".jiag_c li").eq(i).find("input[type='checkbox']").attr("data-rel") == loc_check_id) {
            $(".jiag_c li").eq(i).find("input[type='checkbox']").attr("checked",false);
        }
    }
    $(obj).remove();
}


//初始化价格链接
$(".jiag_c li a").each(function() {
    loc_alink = $(this).attr("link_href");
    $(this).attr("href",loc_alink);
});

//个人中心左侧菜单
$(".lt_nav li").click(function(){
	if ($(this).children(".lev_nav").css("display") == "none") {
		$(this).children(".lev_nav").slideDown()
	} else {
		$(this).children(".lev_nav").slideUp();
	}
});

//自定义check
$(".custom_check_b i").click(function(){
	if ($(this).hasClass("hov")) {
		$(this).removeClass("hov");
		$(this).parent().find("input[type='checkbox']").attr("checked",false);
	} else {
		$(this).addClass("hov");
		$(this).parent().find("input[type='checkbox']").attr("checked",true);
	}
});

//头部
$(".wei_li").mouseenter(function(){
    $(this).children(".awm_cnb").slideDown();
}).mouseleave(function(){
    $(this).children(".awm_cnb").slideUp();
});

//评价大图
$(".pj_piclist li").mouseenter(function(){
    $(this).children(".max_pic").show();
}).mouseleave(function(){
    $(this).children(".max_pic").hide();
});

//新增地址选中
$("#address dl").click(function(){
    $(this).addClass("hov");
    $(this).siblings().removeClass("hov");
});

//优惠卷打开
$("http://case.tenghuiit.com/demo10/js/.youhuij_c .tib").click(function(){
    if ($(this).parent().children(".cnb").css("display") == "none") {
        $(this).addClass("jian");
        $(this).parent().children(".cnb").slideDown(); 
    } else {
        $(this).removeClass("jian");
        $(this).parent().children(".cnb").hide(); 
    }
});

$(".jf_btn").click(function(){
    if ($(this).find("input[type='checkbox']").attr('checked')) {
        $(this).children(".ysyjf_c").show();
    } else {
        $(this).children(".ysyjf_c").hide();
    }
});

//支付手机二维码
$(".zfsj_b").mouseenter(function(){
    $(this).children(".lev_awm").slideDown();
}).mouseleave(function(){
    $(this).children(".lev_awm").hide();
});

//支付方式选择
$(".zfym_cnb dl input[type='radio']").click(function(){
    $(this).parent().addClass("hov");
    $(this).parent().siblings().removeClass("hov");
    //$(this).parent().find("input[type='radio']").attr("checked",true);
});

//网银支付方式选择
$(".zffs_wylt .list input[type='radio']").click(function(){
    $(this).parent().parent().parent().children(".bor").addClass("hov_bor");
    $(this).parent().parent().parent().siblings().children(".bor").removeClass("hov_bor");
});

//商家菜单
$(".lt_menu li i").click(function(){
    if ($(this).parent().children(".lev_menu").css("display") == "none") {
		$(this).parent().children(".lev_menu").slideDown()
	} else {
		$(this).parent().children(".lev_menu").slideUp();
	}
});

//售后详情收起展开
$(".clhj_btn").click(function() {
    if ($(".clhj_cnb .cn_list").css("height") == "90px") {
		$(".clhj_cnb .cn_list").css("height","auto");
        $(this).text("收起");
	} else {
		$(".clhj_cnb .cn_list").css("height","90px");
        $(this).text("打开");
	}
});

//查看物流
$(".find_logistics").mouseenter(function() {
    $(this).children(".lev_logistics").slideDown();
}).mouseleave(function() {
    $(this).children(".lev_logistics").hide();
});

//注册
$(".zc_fm_iptb input[type='text']").focus(function() {
    $(this).parent().parent().children(".zc_tip").show();
}).blur(function() {
    $(this).parent().parent().children(".zc_tip").hide();
});

$(".zc_fm_iptb input[type='password']").focus(function() {
    $(this).parent().parent().children(".zc_tip").show();
}).blur(function() {
    $(this).parent().parent().children(".zc_tip").hide();
}); 
$(".zc_fm_iptb input[type='text']").keyup(function() {
    $(this).removeClass("error_bor");
    $(this).parent().parent().children(".zc_tip").removeClass("zc_tip_error");
});
$(".zc_fm_iptb input[type='password']").keyup(function() {
    $(this).removeClass("error_bor");
    $(this).parent().parent().children(".zc_tip").removeClass("zc_tip_error");
});

//登录
$(".bd_borb input[type='text']").keyup(function(){
    $(this).parent().children(".close").show();
});
$(".bd_borb .close").click(function(){
    $(this).parent().find("input[type='text']").val("");
    $(this).hide();
});

$(".bd_borb input[type='password']").keyup(function(){
    $(this).parent().children(".close").show();
});
$(".bd_borb .close2").click(function(){
    $(this).parent().find("input[type='password']").val("");
    $(this).hide();
});


//促销优惠
$(".yhcx_cnb").mouseenter(function(){
    $(this).addClass("ico_up");
    $(this).children(".lev_cnb").slideDown();
}).mouseleave(function(){
    $(this).removeClass("ico_up");
    $(this).children(".lev_cnb").hide();
});

$(".more_yh_btn").click(function(){
    if ($(".more_yh_list").css("display") == "none") {
        $(".more_yh_list").show();
        $(this).hide();
    } else {
        $(".more_yh_list").hide();
    }
});

//购物车全选
$(".all_check").click(function(){
    if ($(this).find("input[type='checkbox']").attr('checked')) {
        $(".all_check").find("i").addClass("hov");
        $(".all_check").find("input[type='checkbox']").attr("checked",true);
        $(".all_dp_check").find("i").addClass("hov");
        $(".all_dp_check").find("input[type='checkbox']").attr("checked",true);
        $(".dp_children_check").find("i").addClass("hov");
        $(".dp_children_check").find("input[type='checkbox']").attr("checked",true);
        $(".all_sp_check").find("i").addClass("hov");
        $(".all_sp_check").find("input[type='checkbox']").attr("checked",true);
        $(".sp_children_check").find("i").addClass("hov");
        $(".sp_children_check").find("input[type='checkbox']").attr("checked",true);
    } else {
        $(".all_check").find("i").removeClass("hov");
        $(".all_check").find("input[type='checkbox']").attr("checked",false);
        $(".all_dp_check").find("i").removeClass("hov");
        $(".all_dp_check").find("input[type='checkbox']").attr("checked",false);
        $(".dp_children_check").find("i").removeClass("hov");
        $(".dp_children_check").find("input[type='checkbox']").attr("checked",false);
        $(".all_sp_check").find("i").removeClass("hov");
        $(".all_sp_check").find("input[type='checkbox']").attr("checked",false);
        $(".sp_children_check").find("i").removeClass("hov");
        $(".sp_children_check").find("input[type='checkbox']").attr("checked",false);
    }
});

$(".all_dp_check").click(function(){
    if ($(this).find("input[type='checkbox']").attr('checked')) {
        $(".dp_children_check").find("i").addClass("hov");
        $(".dp_children_check").find("input[type='checkbox']").attr("checked",true);
    } else {
        $(".dp_children_check").find("i").removeClass("hov");
        $(".dp_children_check").find("input[type='checkbox']").attr("checked",false);
    }
});

$(".all_sp_check").click(function(){
    if ($(this).find("input[type='checkbox']").attr('checked')) {
        $(".sp_children_check").find("i").addClass("hov");
        $(".sp_children_check").find("input[type='checkbox']").attr("checked",true);
    } else {
        $(".sp_children_check").find("i").removeClass("hov");
        $(".sp_children_check").find("input[type='checkbox']").attr("checked",false);
    }
}); 

tab();