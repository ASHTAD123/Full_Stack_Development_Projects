package com.example.myPortfolio.Repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.myPortfolio.Entity.CareerDetails;

	@Repository
	public interface CareerRepo extends JpaRepository<CareerDetails,Integer>{

		@Query(nativeQuery = true, value =  
			    "SELECT \"id\", ca.careeraim ,ca.passion, ca.previouscompany, ca.qualification, ca.skills ,ca.userid " +
			    "FROM careeraspects ca " +
			    "JOIN personaldetails c ON ca.userid = c.userid " +
			    "WHERE c.name = :name")

		List<CareerDetails> findCareerDetailsByName(@Param("name")String name);
		
	}

