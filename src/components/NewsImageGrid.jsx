import imageOne from '../assets/Images/Frame 15.jpg';
import imageTwo from '../assets/Images/Frame 25.jpg';
import imageThree from '../assets/Images/Frame 26.jpg';
import arrowRight from '../assets/arrow-right.svg';

const NewsImageGrid = () => {
  const imageData = [
    {
      id: 1,
      headline:
        'Dui egestas mauris urna eget. In cursus volutpat at massa tristique.',
      image: imageOne,
      alt: 'A man with a headlamp standing on a rock.',
    },
    {
      id: 2,
      headline: 'Eget varius rhoncus sodales tellus. Molestie eu ac feugia.',
      image: imageTwo,
      alt: 'A panoramic view of a sun setting.',
    },
    {
      id: 3,
      headline: 'Aliquam tellus nisi pellentesque turpis eget accumsan dui',
      image: imageThree,
      alt: 'A panormaic view of a mountain with clouds.',
    },
  ];

  return (
    <div className="news-image-grid">
      {imageData.map((img) => (
        <div key={`news-image-${img.id}`} className={`img-${img.id}`}>
          <div className="content">
            <p className="tag">News</p>
            <div className="text-with-button">
              <p className="headline">{img.headline}</p>
              <button>
                <img src={arrowRight} alt="Right arrow" />
              </button>
            </div>
          </div>
          <img src={img.image} alt={img.alt} />
        </div>
      ))}
    </div>
  );
};
export default NewsImageGrid;
