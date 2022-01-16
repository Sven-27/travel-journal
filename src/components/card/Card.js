import './Card.css'
import fuji from '../../img/fuji.jpg'

const Card = () => {
  return (
    <section className='card'>
      <div className='card--container'>
        <figure className='card--image-container'>
          <img className='card--image' src={fuji} alt='Photo of place' />
        </figure>
        <main className='card--main-container'>
          <div className='card--main-top'>
            <i className="fas fa-map-marker-alt" />
            <p className='card--country-name'>Japan</p>
            <a className='card--country-link' href="#">View on Google Maps</a>
          </div>
          <h3 className='card--country-place'>Mount Fuji</h3>
          <p className='card--country-date'>12 Jan, 2021 - 24 Jan, 2021</p>
          <p className='card--country-description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor esse ea iure. 
            Totam, nobis laborum alias placeat exercitationem minus aut. 
            Deserunt molestias nam laboriosam voluptatibus quaerat commodi nisi magnam ex.
          </p>
        </main>
      </div>
    </section>
  )
}

export default Card
