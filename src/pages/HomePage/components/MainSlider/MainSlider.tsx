import { MainSliderItem } from '../MainSlideItem/MainSlideItem';
import './MainSlider.scss';

export const MainSlider = () => {
  return (
    <div className="mainSlider">
      <div className="mainSlider__block">
        <div className="mainSlider__wrapper">
          <MainSliderItem />
        </div>
      </div>

      <div className="mainSlider__dotes">
        <button className="mainSlider__dote mainSlider__dote--active"></button>
        <button className="mainSlider__dote"></button>
        <button className="mainSlider__dote"></button>
      </div>
    </div>
  );
};
