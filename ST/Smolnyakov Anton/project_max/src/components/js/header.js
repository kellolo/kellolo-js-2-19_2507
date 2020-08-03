let header = {
    handleEvents() {
        let main = document.querySelector('#headerCartWrap');
        document.addEventListener('click', evt => {

            if (evt.target.id == 'headerCart') {
                main.classList.toggle('hidden');
            }
        })
    },
}

export default header;