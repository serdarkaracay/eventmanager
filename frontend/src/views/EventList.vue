<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>
<script>
import EventCard from "../components/EventCard";
import axios from "axios";
export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    axios
      .post("/api/event")
      .then((response) => {
        this.events = response.data["events"];
        console.log(this.events);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>
