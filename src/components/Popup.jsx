import crossImage from "../assets/cross.svg";

const Popup = ({
  person,
  setPerson,
  popupShow,
  setPopupShow,
  handleClosePopup,
}) => {
  const popupClass = popupShow ? "popup popup_opened" : "popup";

  const handleChangeName = (e) => {
    e.preventDefault();
    const inputs = e.target.elements;
    setPerson({
      name: inputs.name.value,
      job: inputs.about.value,
    });
    setPopupShow(false);
  };

  return (
    <div className={popupClass}>
      <div className='popup__container'>
        <button type='reset' className='popup__cross'>
          <img
            src={crossImage}
            alt='иконка крестика'
            className='popup__cross-image'
            onClick={handleClosePopup}
          />
        </button>
        <h2 className='popup__title'>Редактировать профиль</h2>
        <form className='popup__form' name='form' onSubmit={handleChangeName}>
          <input
            type='text'
            className='popup__input popup__input_type_name'
            name='name'
            defaultValue={person.name}
          />
          <input
            type='text'
            className='popup__input popup__input_type_about'
            name='about'
            defaultValue={person.job}
          />
          <button type='submit' className='popup__button'>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
