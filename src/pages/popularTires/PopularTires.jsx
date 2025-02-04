import React from 'react'
import "./popularTires.css" 

const PopularTires = () => {
  return (
    <div>
    PopularTires
    <div class="filters">
        <p className="filter active">Автомобильные</p>
        <p className="filter">Грузовые</p>
        <p className="filter">Дорожно-строительные</p>
        <p className="filter">Сельскохозяйственные</p>
    </div>
    <div class="tire-list">
        <div class="tire-card">
            <div class="image-container">
                <img src="./src/assets/shina1.png" alt="Goodyear Vector 4Seasons"/>
               
                <span class="season-icon"></span>
            </div>
            <h3>Goodyear Vector 4Seasons</h3>
            <div class="details">
                <span></span>
                <span class="rating">★★★★☆</span>    
            </div>
            <p class="stock in-stock">В наличии</p>
            <div class="bottom">
                <span class="price">5 600 C</span>
                <button class="favorite"></button>
            </div>
        </div>

        <div class="tire-card">
            <div class="image-container">
            <img src="./src/assets/shina1.png" alt="Goodyear Vector 4Seasons"/>  //
                <span class="season-icon"></span>
            </div>
            <h3>Goodyear Vector 4Seasons</h3>
            <div class="details">
                <span></span>
                <span class="rating"></span>
            </div>
            <p class="stock in-stock">В наличии</p>
            <div class="bottom">
                <span class="price">5 600 C</span>
                <button class="favorite"></button>
            </div>
        </div>
        <div class="tire-card">
            <div class="image-container">
            <img src="./src/assets/shina1.png" alt="Goodyear Vector 4Seasons"/>  //
                <span class="season-icon">❄️</span>
            </div>
            <h3>Goodyear Vector 4Seasons</h3>
            <div class="details">
                <span>💬 2</span>
                <span class="rating">★★★★☆</span>
            </div>
            <p class="stock in-stock">В наличии</p>
            <div class="bottom">
                <span class="price">5 600 C</span>
                <button class="favorite"></button>
            </div>
        </div>
        <div class="tire-card">
            <div class="image-container">
            <img src="./src/assets/shina1.png" alt="Goodyear Vector 4Seasons"/>  //
                <span class="season-icon">❄️</span>
            </div>
            <h3>Goodyear Vector 4Seasons</h3>
            <div class="details">
                <span>💬 2</span>
                <span class="rating">★★★★☆</span>
            </div>
            <p class="stock in-stock">В наличии</p>
            <div class="bottom">
                <span class="price">5 600 C</span>
                <button class="favorite"></button>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default PopularTires







{/* <div class="tire-card">
            <div class="image-container">
                <img src="./src/assets/shina1.png" alt="Goodyear Vector 4Seasons"/>
               
                <span class="season-icon">☀️</span>
            </div>
            <h3>Goodyear Vector 4Seasons</h3>
            <div class="details">
                <span>💬 2</span>
                <span class="rating">★★★★☆</span>
            </div>
            <p class="stock in-stock">В наличии</p>
            <div class="bottom">
                <span class="price">5 600 C</span>
                <button class="favorite">❤️</button>
            </div>
        </div> */}