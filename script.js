$(document).ready(function () {
	//DARK MODE
	$('#mySwitch').click(function () {
		if ($('#mySwitch').prop('checked')) {
			$('body').css('background-color', 'black');
			$('body').css('color', 'white');
			$('input').css('background-color', 'gray');
			$('input').css('color', 'white');
		} else {
			$('body').css('background-color', 'white');
			$('body').css('color', 'black');
			$('input').css('background-color', 'white');
			$('input').css('color', 'black');
		}
	});
	//ADD TO LIST
	$('#btn-add').on('click', function () {
		let text = $('#add-list').val();
		if (text.length > 0) {
			$('#list').append(
				"<div class='alert alert-dark alert-dismissible'>" +
					text +
					"<button id='remove' class='btn btn-close ms-3'></button>" +
					'</div>'
			);
			$('.alert').css('cursor', 'pointer');
			$('input').val('');
			//IF THERE'S NO TEXT
		} else alert('No task was inserted');
	});
	//KEYBOARD ENTER BUTTON
	$('#add-list').keypress(function (event) {
		if (event.keyCode === 13) {
			$('#btn-add').click();
		}
	});
	//RISK ITEM
	$(document).on('click', '.alert', function () {
		$(this).css('text-decoration-line') == 'none'
			? $(this).css('text-decoration-line', 'line-through')
			: $(this).css('text-decoration-line', 'none');
	});
	//REMOVE ITEM
	$(document).on('click', '#remove', function () {
		$(this).parent().hide();
	});
});
