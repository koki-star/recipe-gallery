function RecipeGallery() {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Parmesan Cheese", "Turkey Bacon", "Black Pepper"],
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Chicken Salad",
      ingredients: ["Chicken", "Lettuce", "Tomatoes", "Cucumber", "Salad Dressing"],
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Avocado Toast",
      ingredients: ["Bread", "Avocado", "Lemon Juice", "Salt", "Pepper"],
      image:
        "https://images.unsplash.com/photo-1628556820645-63ba5f90e6a2?auto=format&fit=crop&w=800&q=80",
    },
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