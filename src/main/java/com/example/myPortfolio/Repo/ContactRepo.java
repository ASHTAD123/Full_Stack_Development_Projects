package com.example.myPortfolio.Repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.myPortfolio.Entity.ContactDetails;
import com.example.myPortfolio.Entity.PortfolioEntity;

@Repository
public interface ContactRepo extends JpaRepository<ContactDetails,Integer>{

	@Query(nativeQuery = true, value =  
		    "SELECT \"contactId\", cd.contactnumber, cd.email, cd.name, cd.socialmedialink,cd.userid " +
		    "FROM ContactDetails cd " +
		    "JOIN personaldetails c ON cd.userid = c.userid " +
		    "WHERE c.name = :name")

	List<ContactDetails> findContactDetailsByName(@Param("name")String name);
	
}
