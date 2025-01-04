package com.example.myPortfolio.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.myPortfolio.Entity.CareerDetails;
import com.example.myPortfolio.Entity.ContactDetails;
import com.example.myPortfolio.Entity.PortfolioEntity;
import com.example.myPortfolio.Repo.PortfolioRepo;

@Service
@Transactional
public class PortfolioService {
	
	
	@Autowired
	private PortfolioRepo portfolioRepo;
	
	
	public List<PortfolioEntity> getMyDetailsService() {
		
		List<PortfolioEntity> portfolio = null;
		
		if(portfolioRepo.findAll()!=null) {
				portfolio = portfolioRepo.findAll();
		}
		
		return portfolio;
		
	}
	
	public PortfolioEntity addMyDetailsService(PortfolioEntity portfolioEntity) {
		
		
		for(ContactDetails contactDetails1: portfolioEntity.getContactDetails())
			contactDetails1.setPortfolioEntity(portfolioEntity);
		
		
		for(CareerDetails careerDetails: portfolioEntity.getCareerDetails()) 
			careerDetails.setPortfolioEntity(portfolioEntity);
	
		
		
//		if(portfolioEntity.getContactDetails() !=null && portfolioEntity.getCareerDetails() !=null) {
//		
//			
//			for(ContactDetails contactDetails1: portfolioEntity.getContactDetails()) contactDetails1.setPortfolioEntity(portfolioEntity);
//			
//			
//			for(CareerDetails careerDetails: portfolioEntity.getCareerDetails()) careerDetails.setPortfolioEntity(portfolioEntity);
//			
//		}
//		 else throw new IllegalArgumentException("PortfolioEntity PortfolioEntity cannot be null ");
		
		
		 PortfolioEntity newPortfolioEntity = portfolioRepo.save(portfolioEntity);
	
		return newPortfolioEntity;
	}
	
	public <T> void deleteDetailsAsPerEntity(PortfolioEntity entity) {
		
		portfolioRepo.delete(null);
	}
}
