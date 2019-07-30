import { Player, Squad } from '../models/player.model';

export const players:Player[] = [
    {
        id:1,
        born:new Date("09-20-1953"),
        lastName:"Mlynarczyk",
        firstName:"Jozef"
    },
    {
        id:2,
        born:new Date("19-12-1955"),
        lastName:"Dziuba",
        firstName:"Marek"
    },
    {
        id:3,
        born:new Date("09-12-1955"),
        lastName:"Kupcewicz",
        firstName:"Janusz"
    },
    {
        id:4,
        born:new Date("07-05-1958"),
        lastName:"Dolny",
        firstName:"Tadeusz"
    },
    {
        id:5,
        born:new Date("07-05-1953"),
        lastName:"Janas",
        firstName:"Pawel"
    },
    {
        id:6,
        born:new Date("07-05-1953"),
        lastName:"Skrobowski",
        firstName:"Piotr"
    },
    {
        id:7,
        born:new Date("07-05-1953"),
        lastName:"Jalocha",
        firstName:"Jan"
    },
    {
        id:8,
        born:new Date("07-05-1953"),
        lastName:"Matysik",
        firstName:"Waldemar"
    },
    {
        id:9,
        born:new Date("07-05-1953"),
        lastName:"Zmuda",
        firstName:"Wladyslaw"
    },
    {
        id:10,
        born:new Date("07-05-1953"),
        lastName:"Majewski",
        firstName:"Stefan"
    },
    {
        id:11,
        born:new Date("07-05-1953"),
        lastName:"Smolarek",
        firstName:"Wlodzimerz"
    },
    {
        id:12,
        born:new Date("07-05-1953"),
        lastName:"Wojcicki",
        firstName:"Roman"
    },
    {
        id:13,
        born:new Date("07-05-1953"),
        lastName:"Buncol",
        firstName:"Andrzej"
    },
    {
        id:14,
        born:new Date("07-05-1953"),
        lastName:"Palasz",
        firstName:"Andrzej"
    },
]


export const squad:Squad[] = [
    {
        player:{
            id:1,
            born:new Date("09-20-1953"),
            lastName:"Mlynarczyk",
            firstName:"Jozef"
        },
        appearances:9,
        goals:0,
        position:"Bramkarz",
        year:1982
    },
    {
        player:{
            id:2,
            born:new Date("10-12-1955"),
            lastName:"Dziuba",
            firstName:"Marek"
        },
        appearances:4,
        goals:1,
        position:"Obronca",
        year:1982
    },
    {
        player: {
            id:3,
            born:new Date("09-12-1955"),
            lastName:"Kupcewicz",
            firstName:"Janusz"
        },
        appearances:4,
        goals:3,
        position:"Pomocnik",
        year:1982
    },
    {
        player: {
            id:4,
            born:new Date("07-05-1958"),
            lastName:"Dolny",
            firstName:"Tadeusz"
        },
        appearances:6,
        goals:2,
        position:"Obronca",
        year:1982
    },
    {
        player:  {
            id:5,
            born:new Date("07-05-1953"),
            lastName:"Janas",
            firstName:"Pawel"
        },
        appearances:4,
        goals:3,
        position:"Obronca",
        year:1982
    },
    {
        player:  {
            id:6,
            born:new Date("07-05-1953"),
            lastName:"Skrobowski",
            firstName:"Piotr"
        },
        appearances:4,
        goals:3,
        position:"Pomocnik",
        year:1982
    },
    {
        player:  {
            id:7,
            born:new Date("07-05-1953"),
            lastName:"Jalocha",
            firstName:"Jan"
        },
        appearances:4,
        goals:3,
        position:"Obronca",
        year:1982
    },
    {
        player:  {
            id:8,
            born:new Date("07-05-1953"),
            lastName:"Matysik",
            firstName:"Waldemar"
        },
        appearances:4,
        goals:3,
        position:"Pomocnik",
        year:1982
    },
    {
        player:  {
            id:9,
            born:new Date("07-05-1953"),
            lastName:"Zmuda",
            firstName:"Wladyslaw"
        },
        appearances:4,
        goals:3,
        position:"Obronca",
        year:1982
    },
    {
        player:  {
            id:10,
            born:new Date("07-05-1953"),
            lastName:"Majewski",
            firstName:"Stefan"
        },
        appearances:4,
        goals:3,
        position:"Obronca",
        year:1982
    },
    {
        player:  {
            id:11,
            born:new Date("07-05-1953"),
            lastName:"Smolarek",
            firstName:"Wlodzimerz"
        },
        appearances:4,
        goals:3,
        position:"Napastnik",
        year:1982
    },
    {
        player:   {
            id:12,
            born:new Date("07-05-1953"),
            lastName:"Wojcicki",
            firstName:"Roman"
        },
        appearances:4,
        goals:3,
        position:"Obronca",
        year:1982
    },
    {
        player:   {
            id:13,
            born:new Date("07-05-1953"),
            lastName:"Buncol",
            firstName:"Andrzej"
        },
        appearances:4,
        goals:3,
        position:"Pomocnik",
        year:1982
    },
    {
        player:   {
            id:14,
            born:new Date("07-05-1953"),
            lastName:"Palasz",
            firstName:"Andrzej"
        },
        appearances:4,
        goals:3,
        position:"Napastnik",
        year:1982
    },
    
] 