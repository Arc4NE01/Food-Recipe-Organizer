import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import MealList from "../components/API/MealList";
import "../styles/mealPlanStyle.css";
import { motion } from "framer-motion";

const MealPlan = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [recipesToShow, setRecipesToShow] = useState(3);

  const handleChange = (e) => {
    setRecipesToShow(parseInt(e.target.value));
  };

  const handleCaloriesChange = (e) => {
    setCalories(parseInt(e.target.value));
  };

  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredMeals = data.meals.slice(0, recipesToShow); // Take the first 'recipesToShow' meals
        setMealData({ ...data, meals: filteredMeals });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Layout>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exits={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="meal">
          <section className="controls">
            <input
              type="number"
              placeholder="Calories"
              onChange={handleCaloriesChange}
            />
            <input
              type="number"
              placeholder="No. of recipes, max 3"
              onChange={handleChange}
            />
            <button onClick={getMealData}>Get Daily Meal Plan</button>
          </section>
          <div className="meal-list">
            {mealData && <MealList mealData={mealData} />}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default MealPlan;
