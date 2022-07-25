let url = 'http://localhost:3001/users'

let main_top_items = document.querySelector('.main_top_items')

function react() {
    axios.get(url)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                App(res.data)
            }
        })
}

react()

function App(arr) {
    main_top_items.innerHTML = ""
    for (let item of arr) {
        main_top_items.innerHTML += `
        <div class="item" id="${item.id}">
        <div class="item_img">
            <img src="${item.src}" alt="">
        </div>
        <div class="item_information_user">
            <div class="item_information_user_top">
                <div class="item_information_user_top_text">
                    <span>${item.title}</span>
                    <span class="yellow">${item.Is_Title}</span>
                </div>
                <div class="item_information_user_top_text1">
                    <span>6 часов</span>
                    <span>${item.money} ₽</span>
                </div>
            </div>

            <div class="item_information_user_bottom">
                <p>${item.decription}</p>
                <button class="btn">Подробнее</button>
            </div>
        </div>
    </div>
        `

    }
}