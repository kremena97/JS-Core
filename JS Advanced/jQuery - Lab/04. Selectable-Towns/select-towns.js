function attachEvents() {
	$('#items li').bind('click', select);
	$('#showTownsButton').bind('click', showTowns)
	function select() {
        if (!$(this).is('[data-selected]')) {
            $(this).attr('data-selected','');
            $(this).css('background-color','#DDD');
        }else{
            $(this).removeAttr('data-selected','');
            $(this).removeAttr('style','');
            $(this).css('background-color','');
        }
    }

    function showTowns() {
        let selectedTowns = $('#items [data-selected=""]')
            .toArray()
            .map(li=>li.textContent)
            .join(', ');
        $('#selectedTowns').text(selectedTowns);
    }
}