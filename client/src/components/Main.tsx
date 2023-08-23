import Card from "./Card";

const Main = () => {
  const bigimage =
    "https://images.pexels.com/photos/18021349/pexels-photo-18021349/free-photo-of-mujer-en-cascada.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load";
  const smallimage =
    "https://images.pexels.com/photos/15153567/pexels-photo-15153567/free-photo-of-horses-on-green-grass-field.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load";
  return (
    <section className="main flex sp-btw col-gap-2">
      <div className="main flex  row-gap-2 flx-col">
        <Card variant={"smallCard"} src={smallimage} />
        <Card variant={"smallCard"} src={smallimage} />
        <Card variant={"smallCard"} src={smallimage} />
      </div>
      <div className="main flex row-gap-2 flx-col">
        <Card variant={"bigCard"} src={bigimage} />
        <Card variant={"bigCard"} src={bigimage} />
      </div>
      <div className="main flex row-gap-2 flx-col">
        <Card variant={"smallCard"} src={smallimage} />
        <Card variant={"bigCard"} src={bigimage} />
      </div>
    </section>
  );
};

export default Main;
