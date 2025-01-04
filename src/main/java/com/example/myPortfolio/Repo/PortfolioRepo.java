package com.example.myPortfolio.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.myPortfolio.Entity.PortfolioEntity;

@Repository
public interface PortfolioRepo extends JpaRepository<PortfolioEntity,Integer>{

	void deletePortfolioEntityByName(String userName);
}
