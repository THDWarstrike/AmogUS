const fetch = require("node-fetch");
const cheerio = require("cheerio");

const getRawData = (URL) => {
   return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
         return data;
      });
};


const URL = "https://www.entoin.com/entertainment/anime-characters";

const getFavortieAnimieCharactersList = async () => {
   const FavortieAnimeCharactersRawData = await getRawData(URL);

   
   const parsedFavoriteAnimeCharactersData = cheerio.load(FavoriteAnimeCharactersRawData);

   
   const animaeCharactersDataTable = parsedFavoriteAnimeCharactersData("table.wikitable")[0]
      .children[1].children;

   console.log("Picture --- Character Name--- Anime");
    animeCharactersDataTable.forEach((row) => {
      
      if (row.name === "tr") {
         let Picture = null,
            CharacterName= null,
            Anime= null;

         const columns = row.children.filter((column) => column.name === "td");

         
         const Picturecolumn = columns[0];
         if (PictureColumn) {
            Picture = PictureColumn.children[0];
            if (year) {
               Picture = Picture.children[0].data;
            }
         }

         
         const CharacterNameColumn = columns[3];
         if (CharacterNameColumn) {
            Character = CharacterNameColumn.children[1];
            if (CharacterName) {
               Character = CharacterName.children[0].data;
            }
         }

         
         const AnimeColumn = columns[5];
         if (AnimeColumn) {
            Anime = AnimeColumn.children[1];
            if (Anime) {
               Anime = Anime.children[0].data;
            }
         }

         if (Picture && CharacterName && Anime) {
            console.log(`${Picture} --- ${CharacterName} --- ${Anime}`);
         }
      }
   });
};


getFavoriteAnimeCharactersList();
