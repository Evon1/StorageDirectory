/*var manager = new jsAnimManager(40);
var feat_pic = manager.createAnimObject("feat-pic");
var feat_txt = manager.createAnimObject("feat-txt");

$('#feat-pic, #feat-txt').show().css('opacity', 0)

feat_pic.add({ property: Prop.opacity, from: 0, to: 1, duration: 300 });
feat_txt.add({ property: Prop.opacity, from: 0, to: 1, duration: 500 });

feat_txt.add({ property: Prop.top, from: -100, to: 200, duration: 1000 });
*/

setTimeout(GR_anim, 30);
var feat, feat_pic, feat_txt, heading;

var msg1 = 'Looking For Self Storage?',
		msg2 = 'You\'ve come to the right place.';
		
var imgs = [
	'/images/ui/storagelocator/storage-pic.png',
	'/images/ui/storagelocator/storage-pic.png'
]

function init() {
	feat = $('#feat');
	feat_pic = $('#feat-pic', feat);
	feat_txt = $('#feat-txt', feat_pic);
	heading = $('h2', feat_txt).hide();
}

function GR_anim() {
	init();
	
	feat_pic.fadeIn(900, function(){
		feat_txt.fadeIn(600);
		feat_txt.css({ 'top':'180px', 'width':'0' });
		
		feat_txt.animate({ 'top':'50px' }, 500, function(){
			feat_txt.animate({ 'width':'490px' }, 400, function(){
				heading.text(msg1).slideDown(600, function(){
					setTimeout(GR_anim2, 3000);
				});
			});
		}); // END feat_txt.animate(top 180px)
		
	}); // END feat_pic.fadeIn
}

function GR_anim2() {
	heading.hide(900);
	
	feat_txt.animate({ 'width':'550px' }, 900, function(){
		feat_txt.css({ 'right':'0' });
		feat_txt.animate({ 'width':'0', 'left':'570px' }, 600, function(){
			feat_txt.css({ 'left':'2px', 'top':'130px' });
			feat_txt.animate({ 'width':'310px' }, 900, function(){
				heading.text(msg2).slideDown(900, function(){
					setTimeout(GR_anim, 3000);
				});
			});
		});
	});
}