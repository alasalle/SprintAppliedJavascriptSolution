// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function ArticleCard(article, topic) {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const authorContainer = document.createElement('div');
  const authorImageContainer = document.createElement('div');
  const authorImage = document.createElement('img');
  const authorName = document.createElement('span');

  card.classList.add('card');

  headline.classList.add('headline');
  headline.textContent = article.headline;

  authorContainer.classList.add('author');
  authorImageContainer.classList.add('img-container');
  authorImage.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  authorContainer.appendChild(authorImageContainer);
  authorImageContainer.appendChild(authorImage);
  authorContainer.appendChild(authorName);

  card.appendChild(headline);
  card.appendChild(authorContainer);

  //data tab stretch
  card.dataset.topic = topic;
  
  return card;
}
const entry = document.querySelector('.cards-container');

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    let articles = response.data.articles;
    for (topic in articles) {
      articles[topic].forEach(article => {
        entry.appendChild(ArticleCard(article, topic));
      });
    }
  });
