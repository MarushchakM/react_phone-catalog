import './MainSlideItem.scss';

export const MainSliderItem = () => {
  return (
    <div className="mainSliderItem">
      <div className="mainSliderItem__action">
        <p className="mainSliderItem__description">
          Now available in our store!
        </p>
        <span className="mainSliderItem__first">Be the first!</span>
        <button className="mainSliderItem__btn"></button>
      </div>
      <div className="mainSliderItem__goods">
        <h4 className="mainSliderItem__title">iPhone 14 Pro</h4>
        <span className="mainSliderItem__subtitle">Pro. Beyond.</span>
        <img
          className="mainSliderItem__img"
          src="img/banner-1.png"
          alt="iPhone 14 Pro"
        />
      </div>
    </div>
  );
};
