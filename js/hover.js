
window.onload = function(){
	mapAnim = document.getElementById("base-map");
	mapAnim.addEventListener( 'webkitAnimationEnd', () => {
		Init();
	}, false );
};

var target;
function Init(){

	target = document.getElementById("gray-map");


	addLisner('school');

	addLisner('city');

	addLisner('entertainment');

	addLisner('Landfill');

	addLisner('high-residential');

	addLisner('bridge');

};

function addLisner(id_name)
{
	const obj = document.getElementById(id_name + '-col');
	const map = document.getElementById(id_name + '-map');

	//ON
	obj.addEventListener('mouseenter', () => {
		target.style.opacity = 1;
		map.style.opacity = 1;
	}, false);

	//OUT
	obj.addEventListener('mouseleave', () => {
		target.style.opacity = 0;
		map.style.opacity = 0;
	}, false);
}