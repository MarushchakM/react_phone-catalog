import { MainSlider } from './components/MainSlider';

export const HomePage = () => {
  return (
    <>
      <h1>Product Catalog</h1>
      <section className="slider-section">
        <h2>Welcome to Nice Gadgets store!</h2>
        <MainSlider />
      </section>
    </>
  );
};
