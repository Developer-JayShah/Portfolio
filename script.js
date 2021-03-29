$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('.portfolio-grid').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: 'all' // show app tab on first load
    		}     
			});								
		}
	};
	// Run the show!
	filterList.init();
});	



const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})