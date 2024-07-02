import configs from "../utils/config.json";

export async function searchByKeyword(keyword: string) {
  const params: Record<string, any> = {
    part: "snippet",
    q: keyword,
    type: "video",
    maxResults: 8,
    key: configs.GOOGLE_KEY,
    fields: "items(id(videoId), snippet(title, thumbnails(medium(url))))",
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `https://www.googleapis.com/youtube/v3/search?${queryString}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    console.log(error);
  }
}
