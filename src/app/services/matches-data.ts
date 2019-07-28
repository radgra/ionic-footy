import { Match } from './../models/match.model';
const matches: Match[] = [
  {
    homeTeam: {
      flag: "/assets/flags/it.svg",
      name: "Wlochy"
    },
    awayTeam: {
      flag: "/assets/flags/pl.svg",
      name: "Polska"
    },
    date: new Date("07-14-1982"),
    round: {
      name: "Pierwsza Runda",
      order: 1
    },
    goalsAwayTeam: 0,
    goalsHomeTeam: 0,
    scorersAwayTeam: [],
    scorersHomeTeam: [],
    worldCupYear: 1982
  },
  {
    homeTeam: {
      flag: "/assets/flags/pl.svg",
      name: "Polska"
    },
    awayTeam: {
      flag: "/assets/flags/cm.svg",
      name: "Kamerun"
    },
    date: new Date("07-19-1982"),
    round: {
      name: "Pierwsza Runda",
      order: 1
    },
    goalsAwayTeam: 0,
    goalsHomeTeam: 0,
    scorersAwayTeam: [],
    scorersHomeTeam: [],
    worldCupYear: 1982
  },
  {
    homeTeam: {
      flag: "/assets/flags/pl.svg",
      name: "Polska"
    },
    awayTeam: {
      flag: "/assets/flags/pe.svg",
      name: "Peru"
    },
    date: new Date("07-22-1982"),
    round: {
      name: "Pierwsza Runda",
      order: 1
    },
    goalsHomeTeam: 5,
    goalsAwayTeam: 1,
    scorersHomeTeam: [
      {
        minute: 55,
        player: {
          lastName: "Smolarek"
        }
      },
      {
        minute: 58,
        player: {
          lastName: "Lato"
        }
      },
      {
        minute: 61,
        player: {
          lastName: "Boniek"
        }
      },
      {
        minute: 68,
        player: {
          lastName: "Buncol"
        }
      },
      {
        minute: 76,
        player: {
          lastName: "Ciolek"
        }
      },
    ],
    scorersAwayTeam: [
      {
        minute: 83,
        player: {
          lastName: "La Rosa"
        }
      },
    ],
    worldCupYear: 1982
  },
  // Polska - Belgia
  {
    homeTeam: {
      flag: "/assets/flags/be.svg",
      name: "Belgia"
    },
    awayTeam: {
      flag: "/assets/flags/pl.svg",
      name: "Polska"
    },
    date: new Date("07-22-1982"),
    round: {
      name: "Druga Runda",
      order: 2
    },
    goalsHomeTeam: 0,
    goalsAwayTeam: 3,
    scorersHomeTeam: [],
    scorersAwayTeam: [
      {
        minute: 4,
        player: {
          lastName: "Boniek"
        }
      },
      {
        minute: 26,
        player: {
          lastName: "Boniek"
        }
      },
      {
        minute: 53,
        player: {
          lastName: "Boniek"
        }
      },
    ],
    worldCupYear: 1982
  },

]



export { matches }