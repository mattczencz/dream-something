import { FaArrowRight } from 'react-icons/fa6';
import NewsImageGrid from './NewsImageGrid';

const News = () => {
  const events = [
    {
      id: 1,
      name: 'Arcu euismod cum leo quis. Et adipiscing amet accumsan in.',
      timeStr: 'June 11   |  10:00 AM - 11:30 AM',
    },
    {
      id: 2,
      name: 'Euismod nisl mauris tristique egestas viverra sed. Molestie elit eu augue felis quam quis.',
      timeStr: 'June 11   |  10:00 AM - 11:30 AM',
    },
    {
      id: 3,
      name: 'Faucibus felis semper erat natoque quis',
      timeStr: 'June 11   |  10:00 AM - 11:30 AM',
    },
  ];

  return (
    <section className="news">
      <NewsImageGrid />
      <div className="upcoming-events">
        <h4 className="eyebrow">Upcoming events</h4>
        <div className="events-grid">
          {events.map((event) => (
            <div
              key={`event-${event.id}`}
              className={`event-${event.id} event-card`}
            >
              <h3 className="event-name">{event.name}</h3>
              <p className="event-time">{event.timeStr}</p>
            </div>
          ))}

          <div className="event-cta event-card">
            <a href="/" className="cta-reverse">
              View all news & events <FaArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
