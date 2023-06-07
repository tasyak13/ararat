import "../components/Footer.css"
import grapes from "../img/image.png"
import boch from "../img/Boch.png"
import { useForm } from "react-hook-form";



function Footer() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <footer>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend><div className="footer-image"><img src={grapes}></img><hr className="left"></hr><p>Запись на дегустацию</p><hr className="right"></hr><img src={boch}></img></div></legend>
                    <div className="footer">
                    <hr className="footer-line"></hr>
                    <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. 
                        Pellentesque nisi, mi sit non sit sed fermentum. </p>
                        <div className="footer-input">
                            <div className="footer-inrut-name">
                                <input placeholder="Имя" {...register("firstName")} />
                                <input placeholder="Телефон" {...register("phone")} />
                            </div>
                                <select {...register("gender")}>
                                    <option value="female">Бутик на Невском 103</option>
                                    <option value="male">Бутик на Невском 103</option>
                                    <option value="other">Бутик на Невском 103</option>
                                </select>
                                <button type="submit">Записаться</button>
                        </div>
                    </div>
                </fieldset>
            </form>
            </div>
        </footer>
    )
}

export default Footer;