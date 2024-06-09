import { View, Text, ScrollView , } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';

import CategoryCard from './CategoryCard'
// import createCLient from  '../sanity '
import createCLient, { urlFor } from '../sanity';

const Categories = () => {
  const [categories , setCategories] = useState([]);

  useEffect(()=> {

    createCLient.fetch(`
    *[_type == "category"]
    `).then(data => {
      setCategories(data)
    })

  },[])
  return (
    <ScrollView horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop:10
    }}>
        {/* Category Card */}

    {categories.map((category) => (
      <CategoryCard 
      key={categories._id}
      imgUrl={urlFor(category.image).width(200).url()} 
      title={category.name} />
    ))}

       
    </ScrollView>
  )
}

export default Categories