// import { useEffect, useState } from 'react'

// import Category from '../../types/category.types'
import CategoryItem from '../category-item/category-item.component'
import './categories.styles'
import { CategoriesContainer, CategoriesContent } from './categories.styles'

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
    <CategoriesContainer>
      <CategoriesContent>
        {/* {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))} */}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
