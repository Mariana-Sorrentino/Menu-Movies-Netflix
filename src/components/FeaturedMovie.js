import React, { useState } from 'react';
import  './FeaturedMovie.css';
import ModalDescription from './Modal';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }

    let description = item.overview;
    if(description.length > 250) {
        description = description.substring(0, 250) + '...';
    } 
    
    let descriptionModal = item.overview;

    const [showModal, setShowModal] = useState(false); 

    
       return (     
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            {showModal === true ?  (
            <ModalDescription
              onClose={() => {
                setShowModal(false);
                setShowModal(null);
              }}
            >
            </ModalDescription>
          ) : (
          <React.Fragment/>
            )
            }

          <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>

                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} Pontos </div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : '' }</div>
                    </div>
                        {description != null &&
                           description.length === 0 ? (
                              <h2>Não há descrição!</h2>
                        ) : (

                     <div className="featured--description">{description}

                        <div className="featured--modal"  >
                        {description != null &&
                           description.length > 249 ? (
                              <button className="featured--BtnModal" onClick={() => setShowModal(true)}> Ler Mais</button>
                        ) : (
                         <React.Fragment/>
                          )} 
                        </div>

                        {showModal ? <ModalDescription onClose={() => setShowModal(false)}>
                            <div className="boxTxt">{descriptionModal}</div>
                              <div className='boxClose'>
                                <button className="btnClose" onClick={() => setShowModal(false)}>Fechar</button>
                              </div>                            
                        </ModalDescription> : null}

                    </div>
                    )}              
                    

                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton" >► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton" >+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(' , ')} </div>
                </div>
          </div>
        </section>
    );
}