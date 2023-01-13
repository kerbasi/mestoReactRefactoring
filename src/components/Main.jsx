import Profile from "./Profile";
import Elements from "./Elements";

const Main = ({ person, handleOpenPopup, data }) => {
  return (
    <main className='main page__main'>
      <Profile person={person} handleOpenPopup={handleOpenPopup} />
      <Elements data={data} />
    </main>
  );
};

export default Main;
