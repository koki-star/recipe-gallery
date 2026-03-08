function RecipeGallery() {
  const recipes = [
  // Normal Test 1
  // Scenario: Render recipes from the array
  // Expected: All recipe cards appear in the gallery
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Parmesan Cheese", "Turkey Bacon", "Black Pepper"],
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    },

  // Normal Test 2
  // Scenario: Display recipe information
  // Expected: Each card shows image, title, and ingredients
    {
      id: 2,
      title: "Chicken Salad",
      ingredients: ["Chicken", "Lettuce", "Tomatoes", "Cucumber", "Salad Dressing"],
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
    },
  
  // Normal Test 3
  // Scenario: Verify layout and hover styling
  // Expected: Card displays correctly and hover effect works

    {
      id: 3,
      title: "Avocado Toast",
      ingredients: ["Bread", "Avocado", "Lemon Juice", "Salt", "Pepper"],
      image:
        "https://images.unsplash.com/photo-1628556820645-63ba5f90e6a2?auto=format&fit=crop&w=800&q=80",
    },

  /* ---------- EDGE TEST CASE 1 ----------  */
    //  Scenario: Recipe has no ingredients
    //  Expected: Card renders and ingredient list is empty

  {
    id: 4,
    title: "Plain Toast",
    ingredients: [],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },

  /* ---------- EDGE TEST CASE 2 ----------  */
    //  Scenario: Recipe has a very long title
    //  Expected: Title wraps to multiple lines and layout remains correct

  /*
  {
    id: 5,
    title: "Extra Large Homemade Avocado Toast with Roasted Vegetables and Fresh Herbs",
    ingredients: ["Bread", "Avocado"],
    image: "https://images.unsplash.com/photo-1628556820645-63ba5f90e6a2",
  },
  */

  /* ---------- EDGE TEST CASE 3 ----------  */
    //  Scenario: Recipe image is missing
    //  Expected: Card renders and shows fallback or empty image area

  /*
  {
    id: 6,
    title: "Mystery Recipe",
    ingredients: ["Ingredient 1"],
    image: "",
  },
  */
  ];

  return (
    <div>
      <h1 className="gallery-title">🍽️ Recipe Gallery</h1>

      <div className="gallery">
        {recipes.map((recipe) => (
          <div className="card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} loading="lazy" />
            <h2>{recipe.title}</h2>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeGallery;