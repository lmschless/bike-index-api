import { BikeService } from './weather-service.js';

$(document).ready(function() {
	$('#weatherLocation').click(function() {
		const color = $('#location').val();
		$('#location').val('');

		(async () => {
			let bikeService = new BikeService();
			const response = await bikeService.getBikeByColor(color);
			getElements(response);
		})();

		const getElements = function(response) {
			if (response) {
				$('.showHumidity').text(`The humidity in ${color} is ${response.bikes[0].title}`);
				console.log(response);
				$('.showTemp').text(`The temperature in Kelvins is ${response} degrees.`);
			} else {
				$('.showHumidity').text(`There was an error handling your request.`);
				$('.showTemp').text(`Please check your inputs and try again!`);
			}
		};
	});
});
