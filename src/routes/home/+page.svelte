<script>
  import { goto, beforeNavigate } from '$app/navigation';
  import { base } from '$app/paths';


  async function navigateAndRefresh(url) {
    await goto(url);
    window.location.reload();
  }


</script>



<button on:click={() => navigateAndRefresh(`${base}/home`)}>HOME</button>
<button on:click={() => navigateAndRefresh(`${base}/gdp`)}>GDP</button>
<button on:click={() => navigateAndRefresh(`${base}/gini`)}>GINI</button>





<style>
  
  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  
  .cover {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 20px;
    background-color: #f5f5f5;
  }

  .title {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin: 0;
  }

  .content {
    text-align: center;
    font-size: 24px;
  }

  .author {
    text-align: right;
    font-size: 20px;
    font-style: italic;
  }
</style>

<div class="cover">
  <h1 class="title">DSC106 Final Project</h1>
  <p class="content">GDP</p>
  <p class="author">Mianchen Zhang and Yulin Chen</p>
</div>
