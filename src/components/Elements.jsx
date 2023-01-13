import Element from "./Element";

const Elements = ({ data }) => {
  return (
    <section className='elements main__elements'>
      {data.map((item, i) => {
        return <Element item={item} key={i} />;
      })}
    </section>
  );
};

export default Elements;
