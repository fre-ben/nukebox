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
    method: "delete",
    redirect: "manual",
  });
  return response;
}
