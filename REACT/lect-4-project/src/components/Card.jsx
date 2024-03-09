import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickhandler() {}
  return (
    <div className="w-[300px] bg-blue-900 rounded-md overflow-hidden bg-opacity-800 m-4 p-2">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />
      </div>
      <div className="bg-white rounded-full absolute">
        <button onClick={clickhandler}>
          <FcLike fontSize="1.75rem" />
        </button>
      </div>
      <div>
        <h3 className="text-white text-lg">{course.title}</h3>
        <p className="text-white">{course.description}</p>
      </div>
    </div>
  );
}
