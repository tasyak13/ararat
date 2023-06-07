import "./SectionCoqnac.css"
import "./Reset.css"
import plant from "../img/zavod.png"
import coctail from "../img/coctail.png"
import glasOfArarat from "../img/glas-ararat.png"

function SectionSecond() {
    return(
        <article className="coqnac">
           <div className="container">
            <hr className="line-section"></hr>

            <div className="coqnac-item">
                <div className="coqnac-about">
                    <p className="coqnac-name">
                        Новинки коллекций
                    </p>
                    <h3 className="proces">
                        Процесс, безупречный в каждой детали
                    </h3>
                    <hr className="coqnac-line"></hr>
                    <p className="coqnac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet 
                        adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. </p>
                    <table className="coqnac-table">
                        <tr>
                            <td>1980</td>
                            <td>Colli Euganei Bianco Ca' Lustra 1980<br></br><p className="table-text">Красочная бутылка вина из Марселя</p></td>
                        </tr>
                        <tr>
                            <td>1980</td>
                            <td>Colli Euganei Bianco Ca' Lustra 1980<br></br><p className="table-text">Красочная бутылка вина из Марселя</p></td>
                        </tr>
                        <tr>
                            <td>1980</td>
                            <td>Colli Euganei Bianco Ca' Lustra 1980<br></br><p className="table-text">Красочная бутылка вина из Марселя</p></td>
                        </tr>
                        </table>    
                    <p className="coqnac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet 
                        adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. </p>
                    <div class="button-coqnac">
                        <a>узнать подробнее</a>
                    </div>    
                </div>
                <div className="coqnac-img">
                    <div className="coqnaq-img-big">
                        <img src={plant}></img>
                    </div>
                    <div className="coqnac-img-small">
                        <img src={coctail}></img>
                        <img src={glasOfArarat}></img>
                    </div>
                </div>
            </div>

            <hr className="line-section-second"></hr>
            </div>
        </article>
    )
}

export default SectionSecond;