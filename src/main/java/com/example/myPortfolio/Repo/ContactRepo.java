package com.example.myPortfolio.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.myPortfolio.Entity.ContactDetails;

@Repository
public interface ContactRepo extends JpaRepository<ContactDetails,Integer>{

	List<ContactDetails> findContactDetailsByName(String name);
	
}
