package com.example.myPortfolio.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.myPortfolio.Entity.ContactDetails;
import com.example.myPortfolio.Entity.PortfolioEntity;

@Repository
public interface PortfolioRepo extends JpaRepository<PortfolioEntity,Integer>{
	
	List<ContactDetails> findContactDetailsByName(String name);
	void deletePortfolioEntityByName(String userName);
}
