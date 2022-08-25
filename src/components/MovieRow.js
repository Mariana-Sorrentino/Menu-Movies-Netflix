import React, { useState } from 'react';
// O useState ^, nesse caso é para armazenar o valor do deslocamento da div movieRow--list 
import './MovieRow.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
// import ModalMovie from './components/ModalMovieRow';

export default ({title, items}) => {    
    const [scrollX, setScrollX] = useState (-0);
    
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth /2);
        if (x > 0) {
            x = 0
        }
        setScrollX(x); 
        
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) -60;
        }
        // 150 é o tamnho de cada imagem
        // o 60 é o tamanho da div das setinhas (30px de cada lado)
        setScrollX(x);
    }

    const [modalInfo, setModalInfo] = useState (false);

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>                
                <MdArrowBackIosNew style={{fontSize: 30}} />
                
            </div>

            <div className="movieRow--rigth" onClick={handleRightArrow}>               
                <MdArrowForwardIos style={{fontSize: 30}} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                {items.results.length > 0 && items.results.map((item, key)=>(                 
                    <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} onClick = { () => setModalInfo(true)}/>
                        {modalInfo ? <h1>MODAL</h1> : null}
                    </div>
                ))}
                </div>
                
            </div>
        </div>
    );
}