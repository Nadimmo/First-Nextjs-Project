"use client"
import axios from 'axios'
import React, { useState } from 'react'

const MealsPage = () => {
  const [search, setSearch] = useState('')
  const [meals, setMeals] = useState([])

  const handleSubmit = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => {
        // API returns { meals: [...] }
        setMeals(res.data.meals || []) 
      })
      .catch(err => {
        console.error(err)
        setMeals([]) // reset meals on error
      })
  }

  return (
    <div className='min-h-screen p-4'>
      <input 
        type="text"  
        placeholder='search meal by name' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mr-2"
      />
      <button 
        onClick={handleSubmit} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {meals && meals.length > 0 ? (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {meals.map(meal => (
            <div key={meal.idMeal} className="border p-2 rounded shadow">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover rounded"/>
              <h2 className="text-lg font-bold mt-2">{meal.strMeal}</h2>
              <p className="text-sm text-gray-600">{meal.strArea} - {meal.strCategory}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-red-500">Meals not found</p>
      )}
    </div>
  )
}

export default MealsPage
