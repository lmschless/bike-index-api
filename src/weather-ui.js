import { BikeService } from './weather-service.js';

$(document).ready(function() {
	$('#bikeInfo').click(function() {
		const manufacturer = $('#manufacturer').val();

		// const color = $('#color').val();
		// const color = colors[0].name;
		$('#color').val();

		const location = $('#location').val();
		$('#location').val();

		(async () => {
			let bikeService = new BikeService();
			const response = await bikeService.getBikeByManufacturer(manufacturer, location);
			getElements(response);
		})();

		const getElements = function(response) {
			let totalBikes = response.stolen + response.non;
			if (response) {
				$('.showManufacturer').append(
					`${response.proximity} ${manufacturer} bikes have been stolen within 10 miles of ${location} out of ${totalBikes} total registered ${manufacturer} bikes. <br>`
				);
				console.log(response);
				$('.showTemp').text(`The temperature in Kelvins is ${response} degrees.`);
			} else {
				$('.showHumidity').text(`There was an error handling your request.`);
				$('.showTemp').text(`Please check your inputs and try again!`);
			}
		};
	});
});
