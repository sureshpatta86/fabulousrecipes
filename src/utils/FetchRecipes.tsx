export async function fetchRecipes(filter: any) {
  const { query, limit } = filter;
  const appId = process.env.EDAMAM_APP_ID;
  console.log(appId)

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${process.env.EDAMAM_API_KEY}&from=0&to=${limit}&`;

  const response = await fetch(url);

  const data = await response.json();

  return data?.hits;
}

export async function fetchRecipe(id: any) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`;

  const response = await fetch(url);

  const data = await response.json();

  return data[0];
}
