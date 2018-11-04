# Jupiter Dev Interview

The purpose of this exercise is to learn more about how you work through
problems and challenges, how you reason about complex tasks, and how you
communicate. This is *not* intended to be a test on how well you
memorize syntax, big O notation, or sorting algorithms. Feel free to work with whatever
tools, docs, etc you're comfortable with. There's also no expectation of
building a completed App in an hour, because that would be ridiculous.

In the next hour, we'll be working side by side on solving an example
problem with many facets: building a calendar. Please ask questions that
come up about anything relating to this; syntax/APIs, higher level
theoretical questions, and everything in between.

## The challenge

Build a small API and an accompanying web app with a minimum of three
screens: event listing, event details, and new event. The events should
at least persist across page refreshes, and ideally beyond server
restarts (ie backed by a database of some sort).

I've provided some boilerplate code in the "example" directory, with
Create React App, Node, Express, and Apollo. Feel free to use this as a
starting point, but if you prefer other frameworks/languages/tools, feel
free to use those. I've set it up for GraphQL, but REST is also
acceptable. There's also no restriction on the front end tooling, I've
chosen React here because it's what we use on Jupiter, and because it's
one of the most known/used. I have not yet added a database for it, so
you may choose whatever you like to back it, even if it's just
in-memory.

### Aim to include:
Three screens:
- Event Listing
  - Show a list of upcoming events, with at least the title and start
    time of each, where clicking one event links to it's detail page
  - Have a button that links to the "New Event" screen
- Event Details
  - Show a details page that shows the title, start time, and
    description of the event
- New Event
  - Have a form that accepts at least a title, a start time, and a
    description, which sends these fields back to the API when submitted.

### Other ideas / possible inclusions
- Event end time
- Timezone support
- Authentication
- Using a service like Google Calendar
- Email notifications with or without Accept/Reject links
