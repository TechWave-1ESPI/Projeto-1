import { ProdutosStyle } from "../css/ProdutosStyle"
import  Product1  from '../assets/products/product-1.png'
import  Product2  from '../assets/products/product-2.png'
import  Product3  from '../assets/products/product-3.png'
import  Product4  from '../assets/products/product-4.png'



const Produtos = () => {
    return(
        <ProdutosStyle>
            <section>
                <div class="product-container">

                    <div class="product-card">
                        <div class="product-img">
                            <img src={Product1} alt="Product 1"/>
                        </div>
                        <div className="product-info-and-btn-container">
                            <div className="tittle-price-container">
                                <p>Tank Top</p>
                                <h3>$40</h3>
                            </div>
                            <div className="add-btn">
                                <i class="bi bi-plus-square-fill"></i>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-img">
                            <img src={Product2} alt="Product 1"/>
                        </div>
                        <div className="product-info-and-btn-container">
                            <div className="tittle-price-container">
                                <p>Grey Outfit</p>
                                <h3>$69</h3>
                            </div>
                            <div className="add-btn">
                                <i class="bi bi-plus-square-fill"></i>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-img">
                            <img src={Product3} alt="Product 1"/>
                        </div>
                        <div className="product-info-and-btn-container">
                            <div className="tittle-price-container">
                                <p>Brown Outfit</p>
                                <h3>$79</h3>
                            </div>
                            <div className="add-btn">
                                <i class="bi bi-plus-square-fill"></i>
                            </div>
                        </div>
                    </div>

                    <div class="product-card">
                        <div class="product-img">
                            <img src={Product4} alt="Product 1"/>
                        </div>
                        <div className="product-info-and-btn-container">
                            <div className="tittle-price-container">
                                <p>Black Outfit</p>
                                <h3>$50</h3>
                            </div>
                            <div className="add-btn">
                                <i class="bi bi-plus-square-fill"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </ProdutosStyle>
    )
}

export default Produtos
