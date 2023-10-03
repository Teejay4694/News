const apiKey = process.env.NEWS_API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
  fetchNews()


  function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');

        // Create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        // Create and append a description to the articleDiv
        const description = document.createElement('p');
        description.textContent = article.description;
        articleDiv.appendChild(description);

        // Create and append an image to the articleDiv
        if (article.urlToImage) {
            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.alt = article.title; // Use the article title as alt text
            articleDiv.appendChild(image);
        }

        // Create and append a link to the full article
        const link = document.createElement('a');
        link.textContent = 'Read More';
        link.href = article.url;
        link.target = '_blank'; // Open the link in a new tab
        articleDiv.appendChild(link);

        // Append the articleDiv to the newsDiv
        newsDiv.appendChild(articleDiv);
    }
}
