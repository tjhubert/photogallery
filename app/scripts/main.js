$(document).ready(function(){
	var slider = $('.bxslider').bxSlider({
	  mode: 'fade',
	  captions: true
	});

	$('#tag').find('button').click(function(){
		var that = this;

		//get data info from file
		$.get('mockup/data.json', function(response){
			$('.bxslider').empty();

			response.data.forEach(function(element,index,array){
				if(element.tag === $(that).html())
				{
					$('.bxslider').append('<li><img src="/images/'+ element.id +'.jpg" title="' + element.title +'" /></li>');
				}
				
			});

		slider.reloadSlider();
		});

	});

	$('#tag').find('button:nth-child(1)').trigger('click');

});

