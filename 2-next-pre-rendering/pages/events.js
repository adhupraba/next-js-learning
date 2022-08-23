import { useRouter } from "next/router";
import { useState } from "react";

const Events = ({ events }) => {
  const [eventList, setEventList] = useState(events);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const filtered = await (await fetch("http://localhost:4000/events?category=sports")).json();
    setEventList(filtered);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <div>
      <button onClick={fetchSportsEvents}>Sports events</button>
      <h1>Events</h1>
      {eventList.map((event, idx) => (
        <div key={idx}>
          <h2>
            {event.id} - {event.title} - {event.category}
          </h2>
          <h3>date - {event.date}</h3>
          <p>description - {event.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Events;

/** @type {import('next').GetServerSideProps} */
export const getServerSideProps = async (context) => {
  const { query } = context;
  const qs = query.category ? `category=${query.category}` : "";

  const events = await (await fetch(`http://localhost:4000/events?${qs}`)).json();
  return { props: { events } };
};
