package com.easycourses.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.easycourses.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long> {

}
