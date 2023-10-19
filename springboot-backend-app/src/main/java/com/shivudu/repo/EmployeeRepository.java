package com.shivudu.repo;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shivudu.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Serializable>{

}
