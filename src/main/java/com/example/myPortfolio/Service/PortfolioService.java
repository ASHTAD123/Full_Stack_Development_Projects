package com.example.myPortfolio.Service;

import java.util.ArrayList;
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
	
//	for(ContactDetails contactDetails1: portfolioEntity.getContactDetails())
//		contactDetails1.setPortfolioEntity(portfolioEntity);
//	
//	
//	for(CareerDetails careerDetails: portfolioEntity.getCareerDetails()) 
//		careerDetails.setPortfolioEntity(portfolioEntity);

	
	public PortfolioEntity addMyDetailsService(PortfolioEntity portfolioEntity) {
		
	
		if(portfolioEntity.getContactDetails() !=null && portfolioEntity.getCareerDetails() !=null) {
					
			for(ContactDetails contactDetails1: portfolioEntity.getContactDetails()) 
				contactDetails1.setPortfolioEntity(portfolioEntity);
				
			for(CareerDetails careerDetails: portfolioEntity.getCareerDetails()) 
				careerDetails.setPortfolioEntity(portfolioEntity);
			
			 PortfolioEntity newPortfolioEntity = portfolioRepo.save(portfolioEntity);
		}
		else {					
			
			  throw new IllegalArgumentException("getContactDetails and getCareerDetails object cannot be null ");
					
		}
		
			
		return portfolioEntity;
	}
	
	
	public PortfolioEntity updateEmployeeService(int id,  PortfolioEntity portfolio) throws Exception {
		
		
		PortfolioEntity savedPortfolioEntity = portfolioRepo.findById(id).get();
		
		if(savedPortfolioEntity == null){
            throw new Exception("User Not Found");
        }
		else {
		
			savedPortfolioEntity.setName(portfolio.getName());
			savedPortfolioEntity.setAge(portfolio.getAge());
			savedPortfolioEntity.setGender(portfolio.getGender());
			savedPortfolioEntity.setContactDetails(portfolio.getContactDetails());
			savedPortfolioEntity.setCareerDetails(portfolio.getCareerDetails());
			
			for(ContactDetails conDetails :portfolio.getContactDetails()) {
				conDetails.setPortfolioEntity(savedPortfolioEntity);
			}
			
			for(CareerDetails cDetails :portfolio.getCareerDetails()) {
				cDetails.setPortfolioEntity(savedPortfolioEntity);
			}
			
		portfolioRepo.save(savedPortfolioEntity);
		

        }
		
		return savedPortfolioEntity;
		
		
	}
	
	public <T> void deleteDetailsAsPerEntity(PortfolioEntity entity) {
		
		portfolioRepo.delete(null);
	}
}
