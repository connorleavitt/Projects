import storeImg from "../assets/store.jpg";

export default function Home() {
  return (
    <div className="main--home">
      <h1 className="main--home-title">Welcome to the Plant Store!</h1>
      <h3 className="main--home-subtitle">
        Visit our store in person or shop our products online. At the Plant
        Store, we have a vast selection of both indoor and outdoor plants! We
        have over 10 different species of indoor house plants.
      </h3>
      <button className="main--home-shop-now">Shop Now</button>
      <img className="main--home-img" src={storeImg} alt="store img" />
    </div>
  );
}
