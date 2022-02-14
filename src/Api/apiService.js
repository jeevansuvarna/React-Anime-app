
const getAnimeByName = async (searchTerm) => {
    return await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=20`
    ).then((res) => res.json())
}

const getTopAnimes = async () => {
    const res = await fetch(
        `https://api.jikan.moe/v4/top/anime?limit=12`
    );
    return await res.json();
}
const getPopularAnimes = async () => {
    const res = await fetch(
        `https://api.jikan.moe/v4/watch/promos/popular?limit=6`
    );
    return await res.json();
}

const getAnimeById = async (id) => {
    const res = await fetch(
        `https://api.jikan.moe/v4/anime/${id}`
    );
    return await res.json();
}
const getRecentAnime = async () => {
    const res = await fetch(
        `https://api.jikan.moe/v4/watch/episodes`
    );
    return await res.json();
}

export { getAnimeByName, getTopAnimes, getPopularAnimes, getAnimeById, getRecentAnime }
