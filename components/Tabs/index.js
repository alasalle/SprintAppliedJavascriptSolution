// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = topic;
  tab.dataset.topic = topic
    //data tab stretch
  tab.addEventListener('click', e => {
    const tabs = document.querySelectorAll('.tab')
    tabs.forEach(tab => tab.classList.remove('active-tab'))
    tab.classList.add('active-tab')
    const cards = document.querySelectorAll('.card')
    topic === 'node.js' ? topic = 'node' : topic = topic
    const tabCards = document.querySelectorAll(`.card[data-topic = ${topic}]`)
    if (topic === 'all') {
      cards.forEach(card => {
        card.style.display = 'flex'
      })
    } else {
      cards.forEach(card => {
        card.style.display = 'none'
      })
      tabCards.forEach(card => {
        card.style.display =  'flex'
      })
    }
  })
  return tab;
}

const topics = document.querySelector('.topics');

//data tab stretch
const all = topics.appendChild(Tab('all'))
all.classList.add('active-tab')

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    response.data.topics.forEach(topic => {
      console.log(topic)
      topics.appendChild(Tab(topic));
    });
  })
  .catch(err => console.error(err));
