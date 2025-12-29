import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../../Components/Categories/Categories';
import ShoesSection from '../../Components/Shoes/ShoeSection';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const displayName = categoryName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div>
      <Categories categoryName={displayName} />
      <ShoesSection />
    </div>
  );
};

export default CategoryPage;