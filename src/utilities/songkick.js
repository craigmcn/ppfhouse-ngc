import format from 'date-fns/format';
import parse from 'date-fns/parse';
const TIME_NOT_PROVIDED = 'unknown';

const formatSongkickEvents = (events) =>
  events.map((event) => {
    const songkickEvent = {
      id: `sk-${event.id}`,
      url: event.uri,
      venue: event.venue.displayName,
      city: event.venue.metroArea.displayName,
      date: event.start.date,
      time: event.start.time || TIME_NOT_PROVIDED,
    };

    if (songkickEvent.date && songkickEvent.time !== TIME_NOT_PROVIDED) {
      songkickEvent.time = format(
        new Date(`${event.start.date} ${event.start.time}`),
        'h:mm bbb',
      );
    }

    const eventStartDate = parse(event.start.date, 'yyyy-MM-dd', new Date());
    songkickEvent.monthYear = format(eventStartDate, 'MMMM y');
    songkickEvent.eventStartDate = format(eventStartDate, 'EEEE, MMMM d');
    if (event.performance.length === 1) {
      songkickEvent.artist = event.performance[0].displayName;
    } else {
      songkickEvent.artist = event.performance
        .reduce((r, c, i) => {
          if (c.billing === 'headline') r.push(c.displayName);
          return r;
        }, [])
        .join(', ');
      songkickEvent.guests = event.performance
        .reduce((r, c, i) => {
          if (c.billing === 'support') r.push(c.displayName);
          return r;
        }, [])
        .join(', ');
    }
    return songkickEvent;
  });

export { formatSongkickEvents };
