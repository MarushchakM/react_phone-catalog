import './MainSlideItem.scss';

export const MainSliderItem = () => {
  return (
    <div className="mainSliderItem">
      <p className="mainSliderItem__description">Now available in our store!</p>
      <h4 className="mainSliderItem__title">iPhone 14 Pro</h4>
      <span className="mainSliderItem__subtitle">Pro. Beyond.</span>
      <img
        className="mainSliderItem__img"
        src="img/banner-1.png"
        alt="iPhone 14 Pro"
      />
    </div>
  );
};
