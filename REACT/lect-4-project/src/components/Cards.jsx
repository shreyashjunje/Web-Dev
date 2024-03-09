import React, { useState } from "react";
import Card from "./Card";

export default function Cards(props) {
  let courses = props.courses;
  let [likedCourses,setLikedCourses]=useState([]);

  function getCourses() {
    let allcourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((coursedata) => {
        allcourses.push(coursedata);
      });
    });
    return allcourses;
  }

  return (
    <div className=" w-[100%] m-auto flex justify-center items-center flex-wrap p-50% ">
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>;
      })}
    </div>
  );
}
