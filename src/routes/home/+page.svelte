<script>
import { goto, beforeNavigate } from '$app/navigation';
import { base } from '$app/paths';

async function navigateAndRefresh(url) {
  await goto(url);
  window.location.reload();
}

const projectTitle = ' Economic Indicator Decoded';
const description = 'This project explores the trends and patterns of GDP (Gross Domestic Product) across different countries and regions. GDP is a crucial economic indicator that measures the total value of goods and services produced within a country during a specific period. By analyzing GDP data, we aim to gain insights into economic growth, development, and potential factors that influence a nation\'s economic performance.';
const group = 'Team: Data Genius!'
const authors = 'Mianchen Zhang and Yulin Chen';
</script>

<button on:click={() => navigateAndRefresh(`${base}/home`)}>HOME</button>
<button on:click={() => navigateAndRefresh(`${base}/gdp`)}> Lets Explore the GDP world!</button>

<main>
  <div class="cover">
    <div class="content">
      <h1>{projectTitle}</h1>
      <p>{description}</p>
      <p>Click the buttons in the top left to explore visualizations.</p>
      <div class="authors">
        <span>{group}</span>
      </div>
      <div class="authors">
        <span>{authors}</span>
      </div>
    </div>
  </div>
</main>

<style>
  .cover {
    height: 100vh;
    background-image: url('https://www.investopedia.com/thmb/IN8QesXlnqmtg6RgQC9USnh9Bm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-636251500-53ea44b08ca04fb7bc4f0c633cd3ea5d.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    max-width: 800px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .content p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .authors {
    font-size: 1.2rem;
    text-align: right;
  }
</style>

