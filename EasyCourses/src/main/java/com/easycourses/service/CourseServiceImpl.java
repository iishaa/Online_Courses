package com.easycourses.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easycourses.dao.CourseDao;
import com.easycourses.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;
	
//	List<Course> list;
	
	

	public CourseServiceImpl() {
//		list = new ArrayList<>();	
//		list.add(new Course(145, "Java Core Course", "This is course contains basics of Java"));
//		list.add(new Course(5342, "Spring Boot Course", "Creating rest API using spring boot"));
	}



	@Override
	public List<Course> getCourse() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
	}



	@Override
	public Course getCourse(long courseId) {
//		Course c= null;
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
//		}
		return courseDao.getReferenceById(courseId);
	}



	@Override
	public Course addCourse(Course course) {
//		list.add(course);
		
		courseDao.save(course);
		return course;
	}



	@Override
	public Course updateCourse(Course course) {
//		list.forEach(e->{
//			if(e.getId() == course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		
		courseDao.save(course);
		return course;
	}



	@Override
	public void deleteCourse(long parseLong) {
//		list= this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		
		Course entity = courseDao.getReferenceById(parseLong);
		courseDao.delete(entity);
	}
	
	
	

}
