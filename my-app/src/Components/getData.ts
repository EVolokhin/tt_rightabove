export const BOOKS: string = 'https://www.anapioficeandfire.com/api/books';

export const getData = async(url: string) => {
  const response = await fetch(url);
  return response.json();
};

export const getCharacters = async (links: string[]) => {
  const requests = links.map((link) => getData(link));
  const characters: any[] = await Promise.all(requests);
  return characters;
}