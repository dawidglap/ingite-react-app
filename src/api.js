
require("dotenv").config();

const base_url = `https://api.rawg.io/api/`;

// GETTING THE DATES

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDay();
    if(day < 10){
        return `0${day}`;
    } else {
        return day;
    }
}

// current day/month/year 
const currentYear =  new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear +1}-${currentMonth}-${currentDay}`;
// popular games 

const popular_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`

console.log(popularGamesURL());




// const base_url = `https://api.rawg.io/api/`;

// const getDate = () => {
//   return new Date().toISOString().slice(0, 10);
// };

// const lastYear = getDate().slice(0, 4) - 1;
// const currentYear = new Date().getFullYear();
// const nextYear = getDate().slice(0, 4) + 1;
// const currentDate = getDate();

// const popular_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// export const popularGamesURL = () => `${base_url}${popular_games}`.anchor