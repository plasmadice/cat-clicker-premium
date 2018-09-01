const model = {
    cats: [
        {name: 'Happy', url: 'images/cat1.jpg', clicks: 0},
        {name: 'Sad', url: 'images/cat2.jpg', clicks: 0},
        {name: 'Ecstatic', url: 'images/cat3.jpg', clicks: 0},
        {name: 'Grinning', url: 'images/cat4.jpg', clicks: 0},
        {name: 'XD', url: 'images/cat5.jpg', clicks: 0},
        {name: 'Roar', url: 'images/cat6.jpg', clicks: 0}
    ],
    currentCat: {},
}

const control = {
    init: function() {
        // create buttons
        view.init();
        control.addListeners();
    },

    addListeners: function() {
        // add event listeners to buttons
        const catList = document.querySelectorAll('.cat-list li');

        catList.forEach(btn => {
            btn.addEventListener('click', () => {
                view.update(btn.value)
                model.currentCat = model.cats[btn.value];
            })
        })

        // start with a cat
        view.update(0);

        // add event click listener to picture element
        const catPicture = document.querySelector('.cat-picture');
        catPicture.addEventListener('click', () => {
            model.currentCat.clicks += 1;
            view.updateClickCount();
        })

        model.currentCat = model.cats[0];
    }
}

const view = {
    init: function() {
        // create buttons
        const catList = document.querySelector('.cat-list');
        model.cats.forEach((cat, index) => {
            let newCat = document.createElement('li');
            newCat.innerText = cat.name;
            newCat.className = cat.name;
            newCat.value = index;
            catList.appendChild(newCat);
        })
    },

    update: function(cat) {
        const name = document.querySelector('.cat-name');
        const clicks = document.querySelector('.cat-clicks');
        const img = document.querySelector('.cat-picture');

        name.innerText = model.cats[cat].name;
        clicks.innerText = `Clicks: ${model.cats[cat].clicks}`;
        img.src = model.cats[cat].url;
    },

    updateClickCount: function() {
        const clicks = document.querySelector('.cat-clicks');

        clicks.innerText = `Clicks: ${model.currentCat.clicks}`
    }
}

control.init();