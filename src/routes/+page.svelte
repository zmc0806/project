<script>
  import { goto } from '$app/navigation';
</script>

<button on:click={() => goto('/gdp')}>Go to GDP Page</button>
<button on:click={() => goto('/gini')}>Go to Gini Page</button>

<style>
  /* Background image styling */
  .background {
    background-image: url('back.png'); /* Replace with the actual image path */
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-shadow: 2px 2px 4px #000;
  }

  /* Content area styling */
  .content {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 8px;
  }
</style>

<div class="background">
  <div class="content">
    <h1>Economic Concepts: GDP and the Gini Coefficient</h1>
    <p>GDP (Gross Domestic Product) measures the market value of all final goods and services produced within a country in a given period.</p>
    <p>The Gini coefficient is a measure of the inequality of a distribution, a value of 0 expressing total equality and a value of 1 expressing maximal inequality.</p>
    <h2>Their Differences</h2>
    <p>While GDP focuses on the total volume of economic activity, the Gini coefficient focuses on how equally wealth is distributed.</p>
  </div>
</div>
