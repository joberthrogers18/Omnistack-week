import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

function addCourseAction(title){
    return {type: 'ADD_COURSE', title }
}

export default function CourseList() {
  const qty = 2;
  // A variável dentro do colchete vai ser monitorada e a cada vez que for mudada vai refleti na função
  const courses = useSelector(
      state => state.data.slice(0, qty),
      [qty]
    );
  // Usar o dispatch do redux sem ter que usar o connect e os mapsstatetoprops e para o dispatch
  const dispatch = useDispatch();

  function addCourse(){
    dispatch(addCourseAction('GraphQL'))
  }

  return (
    <div>
      <ul>
        {courses.map(course => <li key={course}>{course}</li>)}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </div>
  );
}
