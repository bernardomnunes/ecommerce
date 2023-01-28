// import { useEffect, useState } from 'react'

// import Category from '../../types/category.types'
import CategoryItem from '../category-item/category-item.component'
import './categories.styles.css'

function Categories() {
  // const [categories, setCategories] = useState<Category[]>([])

  // const fetchCategories = async () => {
  //   try {
  //   } catch (error) {}
  // }

  // useEffect(() => {
  //   fetchCategories()
  // }, [])

  return (
    <div className="categories-container">
      <div className="categories-content">
        {/* {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Categories
