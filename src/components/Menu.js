import "../components/Menu.css"

function Menu() {
    return (
        <header >
            <div class="container">
            <div class="address">
                <p>Цовакал Исакови пр., 2 дом</p>
                <p>8 (812) 123-45-67</p>
            </div>
            <nav class="menu">
                <ul>
                    <li>Каталог</li>
                    <li>Доставка</li>
                    <li>Коллекции</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div class="button">
                <a>Каталог</a>
                <a>дегустация</a>
            </div>
            </div>
        </header>

    )
}

export default Menu;