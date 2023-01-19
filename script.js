const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);

const data = {
    run: ['01-01', '01-02', '01-06'],
    water: ['01-03', '01-11']
}

nlwSetup.setData(data)
nlwSetup.load()