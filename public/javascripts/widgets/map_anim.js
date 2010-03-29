if (window.location.hash == '#anim') setTimeout(GR_anim, 500);

var $GR_map = $('#map'),
		$GR_heading = $('h3', '#map');
		GR_css_hide = { 'opacity': 0, 'left': '-320px' },
		markers = [],
		GR_sign_img = new Image();
		GR_sign_img.src = '/images/ui/storagedirectory/sign.png';
		GR_sign_img.id = 'map_sign';
		GR_sign_img.className = 'anim_img';
		GR_sign_img.alt = 'Sign';

$GR_map.append(GR_sign_img);
var $GR_sign_img = $(GR_sign_img);

for (var i = 0; i < 4; i++) {
	markers[i] = GR_get_marker_img(i).css(GR_css_hide);
	$GR_map.append(markers[i]);
}

$GR_sign_img.css(GR_css_hide)
$GR_heading.show().css(GR_css_hide);

function GR_anim() {
	$GR_sign_img.animate({
		'opacity': '.8',
		'top': '50px',
		'left': '50px'
	}, 400, function(){
		markers[0].show().animate({ 'opacity': '.8', 'top': '200px', 'left': '50px' }, 200);
		markers[1].show().animate({ 'opacity': '.8', 'top': '150px', 'left': '250px' }, 400);

		$(this).animate({
			'top': '20px',
			'left': '20px'
		}, 500, function(){
			markers[2].show().animate({ 'opacity': '.8', 'top': '70px', 'left': '420px' }, 300);
			markers[3].show().animate({ 'opacity': '.8', 'top': '225px', 'left': '400px' }, 500);
			$GR_heading.animate({ 'opacity': 1 }, 700);
			
			$(this).animate({
				'top': '30px',
				'left': '30px'
			}, 1000);
		});
	});
}

function GR_get_marker_img(i){
	var marker = new Image();
	marker.src = '/images/ui/storagedirectory/marker.png';
	marker.className = 'map_marker';
	marker.id = 'marker_' + i;
	return $(marker);
}