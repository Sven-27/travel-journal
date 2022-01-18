import './Card.css'

const Card = (props) => {
  console.log(props)
  return (
    <section className='card'>
        <figure className='card--image-container'>
          <img className='card--image' src={props.image} alt='Place' />
        </figure>
        <main className='card--main-container'>
          <div className='card--main-top'>
            <i className="fas fa-map-marker-alt" />
            <p className='card--country-name'>{props.country}</p>
            <button className='card--country-link'>View on Google Maps</button>
          </div>
          <h3 className='card--country-place'>{props.place}</h3>
          <p className='card--country-date'>{props.date}</p>
          <p className='card--country-description'>
            {props.description}
          </p>
        </main>
    </section>
  )
}

export default Card
