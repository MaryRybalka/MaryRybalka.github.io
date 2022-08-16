const _button_class = 'button';
const _active_class = 'active';
const _since_input_class = 'since-input';
const _since_label_class = 'since-label';
const _to_input_class = 'to-input';
const _to_label_class = 'to-label';
const _base_URL = 'https://www.metaquotes.net/files/vacancies/test-javascript.zip';

window.onload = function () {
    CanvasJS.addColorSet("blue", ["#319b9b"]);
    let chart = new CanvasJS.Chart("chart", {
        animationEnabled: true,
        colorSet: "blue",
        theme: "light2",
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                {y: 450},
                {y: 414},
                {y: 460},
                {y: 450},
                {y: 500},
                {y: 480},
                {y: 480},
                {y: 500},
                {y: 480},
                {y: 510}
            ]
        }]
    });
    chart.render();

    document.getElementsByClassName(_button_class)[0].classList.add(_active_class)
    for (let button of document.getElementsByClassName(_button_class)) {
        button.addEventListener('click', e => {
            const activeId = document.getElementsByClassName(_active_class)[0].id;
            document.getElementsByClassName(_button_class)[activeId].classList.remove(_active_class);
            e.target.classList.add(_active_class);
        })
    }

    document.getElementById(_since_input_class).addEventListener('change', e => {
            const maxVal = parseInt(document.getElementById(_to_label_class).innerText);
            if (e.target.value >= maxVal) {
                document.getElementById(_since_label_class).innerText = maxVal - 1;
                e.target.value = maxVal - 1;
            } else
                document.getElementById(_since_label_class).innerText = e.target.value;
        }
    )
    document.getElementById(_to_input_class).addEventListener('change', e => {
            const minVal = parseInt(document.getElementById(_since_label_class).innerText);
            if (e.target.value <= minVal) {
                document.getElementById(_to_label_class).innerText = minVal + 1;
                e.target.value = minVal + 1;
            } else
                document.getElementById(_to_label_class).innerText = e.target.value;
        }
    )
}

async function getTemperatureFromServer(){
    let response = await fetch(_base_URL);
    let data = await response.json();
    
}
async function getPrecipitationFromServer(){

}

async function getTemperatureFromLocal(){

}
async function getPrecipitationFromLocal(){

}
