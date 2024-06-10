import React from 'react'
import Card from './Card'
import Loading from './Loading';

 function Cards({courses}) {

  if (!courses) {
    console.log(courses)
    // courses=[]
    // console.log(courses)

    return <Loading/>;
  }

  let allcourses=[];

  const getCourses=()=>{
    Object.values(courses).forEach( (courseCategory)=>{
      courseCategory.forEach((course)=>{
        allcourses.push(course);
      })
    })
    return allcourses;
  }

  return (
    
      <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
          getCourses().map((course)=>{
           return <Card key={course.id} course={course}/>
          })
        }
      </div>

  );
}


export default Cards;