function attachEvents() {
    let username = 'pesho';
    let password = 'p';

    let url = 'https://baas.kinvey.com/appdata/kid_rJJJqd1K4/biggestCatches';

    $('#addForm button').click(createCatch);
    $('#aside .load').click(loadCatches);
    
    function loadCatches() {
        $('#catches').empty();
        $.ajax({
            type: 'GET',
            url:url,
            headers:{
                "Authorization": "Basic " + btoa(username + ":" + password)
            }
        }).then(displayAllCatches)
            .catch(error);
    }

    function displayAllCatches(catches) {
        for (let currentCatch of catches){
            $('#catches')
                .append($(`<div class="catch" data-id="${currentCatch._id}">`)
                    .append(['<label>Angler</label>', `<input type="text" class="angler" value="${currentCatch.angler}">`,
                        '<label>Weight</label>', `<input type="number" class="weight" value="${currentCatch.weight}">`,
                        '<label>Species</label>', `<input type="text" class="species" value="${currentCatch.species}">`,
                        '<label>Location</label>',`<input type="text" class="location" value="${currentCatch.location}">`,
                        '<label>Bait</label>',`<input type="text" class="bait" value="${currentCatch.bait}">`,
                        '<label>Capture Time</label>', `<input type="number" class="captureTime" value="${currentCatch.captureTime}">`,
                    '<button class="update">Update</button>', '<button class="delete">Delete</button>']));

            $(`[data-id="${currentCatch._id}"] .update`).click(function (){updateCatch(currentCatch._id)});
            $(`[data-id="${currentCatch._id}"] .delete`).click(function (){deleteCatch(currentCatch._id)});
        }
    }
    function updateCatch(id) {

        let data = {
            angler: $(`[data-id="${id}"] .angler`).val(),
            weight: $(`[data-id="${id}"] .weight`).val(),
            species: $(`[data-id="${id}"] .species`).val(),
            location: $(`[data-id="${id}"] .location`).val(),
            bait: $(`[data-id="${id}"] .bait`).val(),
            captureTime: $(`[data-id="${id}"] .captureTime`).val()
        };

        $.ajax({
            type: 'PUT',
            url: `https://baas.kinvey.com/appdata/kid_rJJJqd1K4/biggestCatches/${id}`,
            headers:{
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            contentType: 'application/json',
            data: JSON.stringify(data)
        });
    }

    function deleteCatch(id) {
        $.ajax({
            type: 'DELETE',
            url: `https://baas.kinvey.com/appdata/kid_rJJJqd1K4/biggestCatches/${id}`,
            headers:{
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            contentType: 'application/json'
        }).then(loadCatches);
    }

    function error(err) {
        console.log(err);
    }

    function createCatch() {
        let angler = $('#addForm .angler').val();
        let weight = Number($('#addForm .weight').val());
        let species = $('#addForm .species').val();
        let location = $('#addForm .location').val();
        let bait = $('#addForm .bait').val();
        let captureTime = Number($('#addForm .captureTime').val());

        let data = {
            angler: angler,
            weight: weight,
            species: species,
            location: location,
            bait: bait,
            captureTime: captureTime
        };

        $.ajax({
            type: 'POST',
            url: url,
            headers:{
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            contentType: 'application/json',
            data: JSON.stringify(data)
        }).then(loadCatches);
    }
}