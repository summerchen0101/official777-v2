// JavaScript Document

  jQuery(document).ready(function($) {
		$(window).load(function(){
				$("#youtube01").click(function(){
				   openMovie('_s3G20BzHLc'); 
				});
				$("#youtube02").click(function(){
				   openMovie('N9MqeH_JgTo'); 
				});	
			});

			function openMovie(isYID){
				var nW = $(window).width();
				var nH = $(window).height();
				$.fancybox.open({
					width : nW,
					height: nH,
					href  : 'https://www.youtube.com/embed/'+isYID+'?autoplay=1', 
					type  : 'iframe'
				});	
			}
});