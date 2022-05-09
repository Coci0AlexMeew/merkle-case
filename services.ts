const geneRandomIndex = (max) => Math.floor(Math.random() * max);
const amountOfStoriesToGet = 10;

const getRandomStoryIds = (data) => {
  const randomStoryIds = [];
      while (randomStoryIds.length < amountOfStoriesToGet) {
        const randomIndex = geneRandomIndex(data.length);
        // add random story to array
        randomStoryIds.push(data[randomIndex])
        // delete added story from original data array
        data.splice(randomIndex, 1);
      }
  return randomStoryIds;
};

export const fetchTopStoryIds = () => {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((res) => res.json())
    .then((data) => getRandomStoryIds(data));
};

export const fetchTopStory = (id: string) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((res) => res.json())
    .then((data) => data);
}

export const fetchUserKarmaScore = (id: string) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
    .then((res) => res.json())
    .then((user) => user.karma);
}

const sortStoriesAccordingToScore = (stories) => stories.sort((a, b) => b.score - a.score);

export const fetchStories = async () => {
  const ids = await fetchTopStoryIds();
  const stories = await Promise.all(ids.map((id) => fetchTopStory(id)));
  const sortedStories = sortStoriesAccordingToScore(stories);

  const geneNeededStoryData = () => sortedStories.map(async (story) => ({
    title: story.title,
    url: story.url,
    timestamp: story.time,
    score: story.score,
    authorId: story.by,
    authorKarmaScore: await fetchUserKarmaScore(story.authorId),
  }));
  
  return Promise.all(geneNeededStoryData());
}