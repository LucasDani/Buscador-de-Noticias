import React from 'react'
import PropTypes from 'prop-types'

const Noticia = ({ noticia }) => {

    //extraer los datos
    const { urlToImage, url, title, description, source } = noticia


    const imagen = (urlToImage) ?
        <div className='card-content'>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
        : null

    return (
        <div className='col s12 m6 l4'>
            <div className='card'>
                <div className='card-image'>
                    <img src={urlToImage} alt={title} />
                    <span className='card-title'>{source.name}</span>
                </div>
                {imagen}

                <div className='card-action'>
                    <a
                        href={url}
                        target="_black"
                        rel='noopener noreferrer'
                        className='waves-effect waves-light btn btn-large'
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
  }

export default Noticia