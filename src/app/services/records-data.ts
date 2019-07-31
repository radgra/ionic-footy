import { Stats } from '../models/stats.model';

export const Records:Stats[] = [
    {
        player: {
            id: 1,
            born: new Date("09-10-1953"),
            lastName: "Mlynarczyk",
            firstName: "Jozef"
        },
        appearances: 89,
        goals: 20,
        appearencesRanking: 1,
        goalsRanking: null
    },
    {
        player: {
            id: 2,
            born: new Date("10-12-1955"),
            lastName: "Dziuba",
            firstName: "Marek"
        },
        appearances: 59,
        goals: 20,
        appearencesRanking: 2,
        goalsRanking: null
    },
    {
        player: {
            id: 3,
            born: new Date("09-12-1955"),
            lastName: "Kupcewicz",
            firstName: "Janusz"
        },
        appearances: 51,
        goals: 20,
        appearencesRanking: 3,
        goalsRanking: null
    },
    {
        player: {
            id: 4,
            born: new Date("07-05-1958"),
            lastName: "Dolny",
            firstName: "Tadeusz"
        },
        appearances: 39,
        goals: 20,
        appearencesRanking: 4,
        goalsRanking: 2
    },
    {
        player: {
            id: 4,
            born: new Date("07-05-1958"),
            lastName: "Robert",
            firstName: "Lewandowski"
        },
        appearances: 39,
        goals: 20,
        appearencesRanking: null,
        goalsRanking: 1
    },
]


