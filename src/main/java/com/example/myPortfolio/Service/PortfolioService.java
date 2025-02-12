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
		
		if(portfolioRepo.findAll()!=null) portfolio = portfolioRepo.findAll();
		
		return portfolio;
	}

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
	
	
	public PortfolioEntity updateEmployeePersonalDetailsService(int id, PortfolioEntity portfolio) throws Exception {
			
			//getting the data from D/B
			PortfolioEntity savedPortfolioEntity = portfolioRepo.findById(id).get();	
			
			//passing current d/b data to updated object
			PortfolioEntity updatedPortfolioEntity = savedPortfolioEntity;
		
			if(id<=0)  throw new Exception("Id should be greater than 0");
			
			else if(id>0) {
								
				if(savedPortfolioEntity.equals(null)) {
					throw new Exception("Data is coming null from database");
				}
				else {
					updatedPortfolioEntity.setName(savedPortfolioEntity.getName());
					updatedPortfolioEntity.setAge(portfolio.getAge());
					updatedPortfolioEntity.setName(savedPortfolioEntity.getName());
					updatedPortfolioEntity.setGender(savedPortfolioEntity.getGender());
					updatedPortfolioEntity.setContactDetails(savedPortfolioEntity.getContactDetails());
					updatedPortfolioEntity.setCareerDetails(savedPortfolioEntity.getCareerDetails());
					
					for(ContactDetails conDetails : savedPortfolioEntity.getContactDetails()) {
						conDetails.setPortfolioEntity(savedPortfolioEntity);
					}
					
					for(CareerDetails cDetails :savedPortfolioEntity.getCareerDetails()) {
						cDetails.setPortfolioEntity(savedPortfolioEntity);
					}
				}
			}
		return updatedPortfolioEntity;
	}
	
	public <T> void deleteDetailsAsPerEntity(PortfolioEntity entity) {
		
		portfolioRepo.delete(null);
	}
}
