import { FaArrowRight } from 'react-icons/fa6';
import imageOne from '../assets/Images/image 4.jpg';
import imageTwo from '../assets/Images/image 5.jpg';
import imageThree from '../assets/Images/image 6.jpg';

const Specialties = () => {
  return (
    <div className="narrow-container specialties">
      {/* Image Column */}
      <div className="img-col">
        <div className="image-wrapper img-1">
          <img src={imageOne} alt="A person standing underneath a rock arch." />
        </div>
        <div className="image-wrapper img-2">
          <img
            src={imageTwo}
            alt="A night time scene with a lake and a mountain in the distance."
          />
        </div>
        <div className="image-wrapper img-3">
          <img src={imageThree} alt="A beach sunrise." />
        </div>
      </div>

      {/* Content Column */}
      <div className="content">
        <h3>Mi tellus magna at</h3>
        <p className="sub-headline">
          Aliquet eget purus eu nisl et eleifend. Arcu mi nulla odio.
        </p>
        <p>
          Tristique et enim quisque gravida non parturient nunc a pharetra. Est
          rhoncus porta faucibus sit nunc diam. Accumsan proin praesent faucibus
          fermentum ipsum vulputate commodo viverra. Dui eget aliquam mauris
          consectetur.
        </p>

        <div className="stats">
          <h2>75+</h2>
          <div className="stat-info">
            <p className="eyebrow small">Large Statistic IPSUM</p>
            <small>
              Nisi a id sit pulvinar non. Quis tristique et sem cras morbi
              lacus. Magna faucibus ultric.
            </small>
          </div>
        </div>

        <a href="/" className="cta">
          Our specialty areas <FaArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};
export default Specialties;
