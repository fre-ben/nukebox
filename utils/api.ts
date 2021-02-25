export type APISong = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
  audioSrc: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getSongs(): Promise<APISong[]> {
  return await fetchURL<APISong[]>("/api/songs");
}

export async function getSong(id: string): Promise<APISong> {
  return await fetchURL<APISong>(`/api/songs/${id}`);
}

export async function deleteSong(id: string) {
  const confirmation = confirm("Are you sure to delete the song?");
  if (confirmation === true) {
    const response = await fetch(`/api/songs/${id}`, { method: "delete" });
    history.back();
    getSongs();
    return response;
  } else {
    getSong(id);
  }
}
