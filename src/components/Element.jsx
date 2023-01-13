import cardImage from "../assets/aleksandr-popov-lXaOSpd_UQw-unsplash.jpg";

const Element = ({ item }) => {
  return (
    <article className='element'>
      <img
        src={item.urls.regular}
        alt='фото москвы'
        className='element__image'
      />
      <h2 className='element__title'>
        {item.description ? item.description : item.alt_description}
      </h2>
      <button className='element__heart-image' type='button'></button>
    </article>
  );
};

export default Element;
