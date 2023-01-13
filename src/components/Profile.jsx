import avatar from "../assets/avatar.jpg";
import editImage from "../assets/edit.svg";
import addImage from "../assets/plus.svg";

const Profile = ({ person, handleOpenPopup }) => {
  return (
    <section className='profile'>
      <img src={avatar} alt='аватар пользователя' className='profile__avatar' />
      <div className='profile__info'>
        <h1 className='profile__info-title'>{person.name}</h1>
        <button
          type='button'
          className='profile__edit-button'
          onClick={handleOpenPopup}
        >
          <img
            className='profile__edit-image'
            src={editImage}
            alt='знак карандаша'
          />
        </button>
        <p className='profile__info-subtitle'>{person.job}</p>
      </div>
      <button type='button' className='profile__add-button'>
        <img className='profile__add-image' src={addImage} alt='знак плюс' />
      </button>
    </section>
  );
};

export default Profile;
