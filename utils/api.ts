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
  const response = await fetch(`/api/songs/${id}`, {
    method: "DELETE",
    redirect: "manual",
  });
  return response;
}

export async function addSong(newTrack: APISong) {
  const response = await fetch("/api/songs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTrack),
  });
  return response;
}
