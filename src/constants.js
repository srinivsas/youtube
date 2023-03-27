const API_KEY = "AIzaSyB0jdDeacZZ6XqWbuf42j2rpkGpVK0AzDU";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SINGLE_YOUTUBE_VIDEO = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;

export const hello = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id+CHANNEL_ID&fields=items%2Fsnippet%2Fthumbnails&key=${API_KEY}`;

export const RANDOM_JOKE_GENERATOR = "https://icanhazdadjoke.com/";
