export type APISong = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
};

export async function getSongs() {
  const response = await fetch("/api/songs");
  // const tracks: Array<APISong> = await response.json();
  const songs: APISong[] = await response.json();
  return songs;
}

// Alternative with .then chaining:
// export function getSongs() {
//   return fetch("api/songs")
//     .then((response) => response.json())
//     .then((songs: APISong[]) => tracks);
// }
