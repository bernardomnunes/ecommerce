import Category from '../../types/category.types'
import './category-item.styles'
import { CategoryItemContainer, CategoryName } from './category-item.styles'
interface CategoryItemProps {
  category: Category
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
