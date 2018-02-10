// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  {
    id: 1,
    content: "Libyan terrorist steal plutonium from the local power plant.",
    start: "1985-10-12",
    className: "vis-item-custom"
  },
  {
    id: 2,
    content:
      "Doc asks Marty to meet him at Twin Pines Mall at 1:15 a.m. next morning.",
    start: "1985-10-25 08:25",
    className: "vis-item-custom"
  },
  {
    id: 3,
    content:
      "Doc calls Marty to stop by at his garage to pick up his JVC camcorder.",
    start: "1985-10-26 00:28",
    className: "vis-item-custom"
  },
  {
    id: 4,
    content: "Marty arrives at Twin Pines Mall.",
    start: "1985-10-26 01:16",
    className: "vis-item-custom"
  },
  {
    id: 5,
    content: "Doc demonstrates Temporal Experiment #1.",
    start: "1985-10-26 01:18",
    className: "vis-item-custom"
  },
  {
    id: 6,
    content:
      "Einstein becomes the world's first time traveler by departing one minute into the future.",
    start: "1985-10-26 01:20",
    className: "vis-item-custom"
  },
  {
    id: 7,
    content: "Emmett Brown is shot dead by Libyan terrorists.",
    start: "1985-10-26 01:33",
    className: "vis-item-custom"
  },
  {
    id: 8,
    content: "Marty flees in the DeLorean and accidentally departs for 1955.",
    start: "1985-10-26 01:35",
    className: "vis-item-custom"
  },
  {
    id: 9,
    content: "Marty McFly knocks down one of Otis Peabody's twin pine trees.",
    start: "1955-11-05 06:15",
    className: "vis-item-custom"
  },
  {
    id: 10,
    content: "Marty meets George McFly.",
    start: "1955-11-05 08:29",
    className: "vis-item-custom"
  },
  {
    id: 11,
    content: "Marty gets knocked unconscious by Sam Baines's car.",
    start: "1955-11-05 09:00",
    ends: "1955-11-05 18:00",
    className: "vis-item-custom"
  },
  {
    id: 12,
    content:
      "Marty finds young Doc Brown and shows him the time machine from the future.",
    start: "1955-11-05 19:00",
    className: "vis-item-custom"
  },
  {
    id: 13,
    content:
      "Doc tells Marty that only 'a bolt of lightning' could provide the power to make the time machine function.",
    start: "1955-11-05 19:30",
    className: "vis-item-custom"
  },
  {
    id: 14,
    content:
      "Doc learns that Marty has interfered with his parents' first meeting.",
    start: "1955-11-06",
    className: "vis-item-custom"
  },
  {
    id: 15,
    content:
      "Marty, goes to Hill Valley High School to try and get George and Lorraine together.",
    start: "1955-11-07",
    className: "vis-item-custom"
  },
  {
    id: 16,
    content:
      "Marty, as 'Darth Vader from the planet Vulcan', visits George to try and make him take Lorraine to the dance that Saturday.",
    start: "1955-11-08 01:21",
    className: "vis-item-custom"
  },
  {
    id: 17,
    content:
      "Doc demonstrates to Marty the plan on getting him back to the future.",
    start: "1955-11-08 12:00",
    className: "vis-item-custom"
  },
  {
    id: 18,
    content: "George and Marty come up with a plan for Saturday night.",
    start: "1955-11-09",
    className: "vis-item-custom"
  },
  {
    id: 19,
    content:
      "Marty observes that his siblings have disappeared from his photograph.",
    start: "1955-11-12 15:30",
    className: "vis-item-custom"
  },
  {
    id: 20,
    content:
      "Marty borrows Doc’s car to take Lorraine to the dance, but Biff steals her away.",
    start: "1955-11-12 21:30",
    className: "vis-item-custom"
  },
  {
    id: 21,
    content: "George punches Biff before he has his way with Lorraine.",
    start: "1955-11-12 21:45",
    className: "vis-item-custom"
  },
  {
    id: 22,
    content: "George and Lorraine share their first kiss.",
    start: "1955-11-12 21:50",
    className: "vis-item-custom"
  },
  {
    id: 23,
    content:
      "Doc returns from 2015 and informs Marty that 'something has got to be done about (his) kids.'",
    start: "1985-10-26",
    className: "vis-item-custom"
  },
  {
    id: 24,
    content:
      "Doc, Marty and Jennifer arrive in 2015 to save Marty Jr. from Griff.",
    start: "2015-10-21 16:29",
    className: "vis-item-custom"
  },
  {
    id: 25,
    content:
      "Old Biff, age 78, steals the DeLorean and heads back to 1955 with Marty’s sports almanac.",
    start: "2015-10-21 17:45",
    className: "vis-item-custom"
  },
  {
    id: 26,
    content:
      "Biff returns the DeLorean to 2015 shortly thereafter without Doc and Marty immediately noticing.",
    start: "2015-10-21 19:00",
    className: "vis-item-custom"
  },
  {
    id: 27,
    content:
      "Doc, Marty, Einstein and Jennifer depart 2015 for the 'alternate 1985'.",
    start: "2015-10-21 19:28",
    className: "vis-item-custom"
  },
  {
    id: 28,
    content:
      "Doc, Marty, Einstein and Jennifer arrive back from 2015 and find out things have radically changed.",
    start: "1985-10-26 09:00",
    className: "vis-item-custom"
  },
  {
    id: 29,
    content:
      "Doc deduces what has happened in the past with Biff and the almanac from the evidence Biff has carelessly left behind.",
    start: "1985-10-27 09:00",
    className: "vis-item-custom"
  },
  {
    id: 30,
    content:
      "Doc and Marty head back to 1955 to put the history they remember back on track.",
    start: "1985-10-27 02:42",
    className: "vis-item-custom"
  },
  {
    id: 31,
    content:
      "Doc and Marty arrive from 1985 in a DeLorean technologically improved than the one.",
    start: "1955-11-12 06:00",
    className: "vis-item-custom"
  },
  {
    id: 32,
    content: "Old Biff arrives from 2015.",
    start: "1955-11-12 10:00",
    className: "vis-item-custom"
  },
  {
    id: 33,
    content: "Young Biff meets elderly Biff.",
    start: "1955-11-12 15:05",
    className: "vis-item-custom"
  },
  {
    id: 34,
    content:
      "Marty, hiding in the back seat of the car, is a witness to Old Biff’s demonstration of the power of the almanac.",
    start: "1955-11-12 15:05",
    className: "vis-item-custom"
  },
  {
    id: 35,
    content:
      "Thinking he’s done enough to change the future, departs in the DeLorean to the same moment he departed in 2015.",
    start: "1955-11-12 18:38",
    className: "vis-item-custom"
  },
  {
    id: 36,
    content:
      "After much wasted time and effort, Marty ultimately retrieves the almanac from Biff’s car.",
    start: "1955-11-12 21:35",
    className: "vis-item-custom"
  },
  {
    id: 37,
    content:
      "The DeLorean, with Doc on board, gets unexpectedly struck by lightning and sent back to 1885.",
    start: "1955-11-12 21:44",
    className: "vis-item-custom"
  },
  {
    id: 38,
    content:
      "Dr. Emmett Brown arrives in 1885, The DeLorean's time circuits have been scrambled, rendering the car useless for time travel.",
    start: "1885-01-01 00:00",
    className: "vis-item-custom",
    group: "3"
  },
  {
    id: 39,
    content:
      "There is a meeting of the townspeople over who will pick up the new schoolteacher on September 4. Doc volunteers.",
    start: "1885-08-29",
    className: "vis-item-custom"
  },
  {
    id: 40,
    content:
      "Having lived in 1885 for 8 months, Doc writes a letter to be delivered by Western Union to Marty in, 1955.",
    start: "1885-01-01",
    className: "vis-item-custom"
  },
  {
    id: 41,
    content:
      "A train pulls into Hill Valley Station with Clara Clayton aboard as a passenger.",
    start: "1885-01-04",
    className: "vis-item-custom"
  },
  {
    id: 42,
    content:
      "The Hill Valley Festival. A photographer takes a portrait of Doc posing next to the new courthouse clock.",
    start: "1885-01-05",
    className: "vis-item-custom"
  },
  {
    id: 43,
    content: "Western Union delivers Doc's letter to Marty in 1955.",
    start: "1955-11-12 21:45",
    className: "vis-item-custom"
  },
  {
    id: 44,
    content:
      "Marty and Doc uncover the DeLorean with repair instructions near Boot Hill Cemetery.",
    start: "1955-11-14",
    className: "vis-item-custom"
  },
  {
    id: 45,
    content:
      "Doc repairs the unearthed DeLorean, building a new time circuit with vacuum tubes and transistors.",
    start: "1955-11-15",
    className: "vis-item-custom"
  },
  {
    id: 46,
    content: "Marty leaves 1955 and heads back to 1885 to rescue Doc.",
    start: "1955-11-16 10:00",
    className: "vis-item-custom"
  },
  {
    id: 47,
    content: "Marty McFly arrives in 1885 to rescue Doc from death.",
    start: "1885-09-02 08:00",
    className: "vis-item-custom"
  },
  {
    id: 48,
    content:
      "Marty arrives in Hill Valley, and upsets Buford 'Mad Dog' Tannen.",
    start: "1885-09-03 08:00",
    className: "vis-item-custom"
  },
  {
    id: 49,
    content:
      "Doc and Marty ride retrieve DeLorean. They attempt to get it to up 88 mph on the way back to Hill Valley.",
    start: "1885-09-03 15:00",
    className: "vis-item-custom"
  },
  {
    id: 50,
    content:
      "Doc tries using whiskey as fuel for the DeLorean's engine, but this only blows the fuel injection manifold.",
    start: "1885-09-04 08:00",
    className: "vis-item-custom"
  },
  {
    id: 51,
    content:
      "A train pulls into Hill Valley Station, with Clara aboard as a passenger. This gives Doc and Marty the idea of borrowing the locomotive to push the DeLorean.",
    start: "1885-09-04 10:00",
    className: "vis-item-custom"
  },
  {
    id: 52,
    content:
      "Doc and Marty ride out to Carson Spur, deciding it is the perfect stretch of level track on which to push the DeLorean up to 88 mph with the locomotive.",
    start: "1885-09-04 11:00",
    className: "vis-item-custom"
  },
  {
    id: 53,
    content: "Doc rescues Clara from going off the broken bridge.",
    start: "1885-09-04 11:15",
    className: "vis-item-custom"
  },
  {
    id: 54,
    content:
      "Doc fits the DeLorean with flanged steel railroad wheels and shows marty the plan.",
    start: "1885-09-04 15:00",
    className: "vis-item-custom"
  },
  {
    id: 55,
    content: "Doc confronts Marty about the dangers of fighting Buford.",
    start: "1885-09-06 07:00",
    className: "vis-item-custom"
  },
  {
    id: 56,
    content:
      "Doc and Marty haul the DeLorean out to Carson Spur, and prepare for their trip back to the future.",
    start: "1885-09-06 15:00",
    className: "vis-item-custom"
  },
  {
    id: 57,
    content: "Marty has a showdown with Buford Tannen outside Palace Saloon.",
    start: "1885-09-07 08:00",
    className: "vis-item-custom"
  },
  {
    id: 58,
    content:
      "Doc and Marty hijack a train to push the DeLorean up to 88 mph so they may both go back to the future (1985).",
    start: "1885-09-07 06:00",
    className: "vis-item-custom"
  },
  {
    id: 59,
    content:
      "Marty McFly returns from 1885 and the stopped DeLorean is almost demolished head-on by an approaching train.",
    start: "1985-10-27 11:00",
    className: "vis-item-custom"
  },
  {
    id: 60,
    content:
      "Marty decides not to race Needles, and avoids crashing into a Rolls Royce, thus erasing the future experienced in Back to the Future part II.",
    start: "1985-10-27 12:00",
    className: "vis-item-custom"
  }
]);
