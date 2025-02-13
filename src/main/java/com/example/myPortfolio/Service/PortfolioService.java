package com.example.myPortfolio.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.myPortfolio.Entity.CareerDetails;
import com.example.myPortfolio.Entity.ContactDetails;
import com.example.myPortfolio.Entity.PortfolioEntity;
import com.example.myPortfolio.Repo.ContactRepo;
import com.example.myPortfolio.Repo.PortfolioRepo;

@Service
@Transactional
public class PortfolioService {

	@Autowired
	private PortfolioRepo portfolioRepo;

	@Autowired
	private ContactRepo contactRepo;

	public List<PortfolioEntity> getMyDetailsService() {

		List<PortfolioEntity> portfolio = null;

		if (portfolioRepo.findAll() != null)
			portfolio = portfolioRepo.findAll();

		return portfolio;
	}

	public PortfolioEntity addMyDetailsService(PortfolioEntity portfolioEntity) {

		if (portfolioEntity.getContactDetails() != null && portfolioEntity.getCareerDetails() != null) {

			for (ContactDetails contactDetails1 : portfolioEntity.getContactDetails())
				contactDetails1.setPortfolioEntity(portfolioEntity);

			for (CareerDetails careerDetails : portfolioEntity.getCareerDetails())
				careerDetails.setPortfolioEntity(portfolioEntity);

			PortfolioEntity newPortfolioEntity = portfolioRepo.save(portfolioEntity);
		} else {

			throw new IllegalArgumentException("getContactDetails and getCareerDetails object cannot be null ");

		}

		return portfolioEntity;
	}

	public PortfolioEntity updateEmployeePersonalDetailsService(int id, PortfolioEntity portfolio) throws Exception {

		PortfolioEntity savedPortfolioEntity = portfolioRepo.findById(id).get();

		PortfolioEntity updatedPortfolioEntity = savedPortfolioEntity;

		if (id <= 0)
			throw new Exception("Id should be greater than 0");

		else if (id > 0) {

			if (savedPortfolioEntity.equals(null))
				throw new Exception("Data is coming null from database");

			else {
				updatedPortfolioEntity.setName(savedPortfolioEntity.getName());
				updatedPortfolioEntity.setAge(portfolio.getAge());
				updatedPortfolioEntity.setGender(savedPortfolioEntity.getGender());
				updatedPortfolioEntity.setContactDetails(savedPortfolioEntity.getContactDetails());
				updatedPortfolioEntity.setCareerDetails(savedPortfolioEntity.getCareerDetails());

				for (ContactDetails conDetails : savedPortfolioEntity.getContactDetails()) {
					conDetails.setPortfolioEntity(savedPortfolioEntity);
				}

				for (CareerDetails cDetails : savedPortfolioEntity.getCareerDetails()) {
					cDetails.setPortfolioEntity(savedPortfolioEntity);
				}
			}
		}
		return updatedPortfolioEntity;
	}

	public List<ContactDetails> updateContactDetails(String name,List<ContactDetails> contactDetails ) throws Exception {
		

	    if (contactDetails == null || contactDetails.isEmpty()) 
	    	throw new Exception("Provided contact details list is null or empty");
	   
	    
		System.out.println("Named passed by user : " + name);
	
		//From DB
		List<ContactDetails> savedContactDetails = contactRepo.findContactDetailsByName(name);
		
	
		  if (savedContactDetails == null || savedContactDetails.isEmpty()) {
		        throw new Exception("No contact details found for name: " + name);
		    }else {
		    	System.out.println(savedContactDetails);
		    }
		  
		//Storing DB values to new object which is to be returned
		List<ContactDetails> updatedContactDetails = new ArrayList<ContactDetails>();
	
		
		for(ContactDetails saved : savedContactDetails) {
			
				ContactDetails updated = new ContactDetails();
				
				updated.setContactNumber(saved.getContactNumber());
		        updated.setEmail(saved.getEmail());
		        updated.setName(saved.getName());
		        updated.setSocialMediaLink(saved.getSocialMediaLink());
		        updated.setPortfolioEntity(saved.getPortfolioEntity());

		        updatedContactDetails.add(updated);
		}
		

		// Update first record
	    ContactDetails updatedContact = savedContactDetails.get(0);
	    ContactDetails newContact = contactDetails.get(0);

	    if (newContact.getContactNumber() != null) 
	        updatedContact.setContactNumber(newContact.getContactNumber());

	    if (newContact.getEmail() != null) 
	        updatedContact.setEmail(newContact.getEmail());

	    if (newContact.getName() != null) 
	        updatedContact.setName(newContact.getName());

	    if (newContact.getSocialMediaLink() != null) 
	        updatedContact.setSocialMediaLink(newContact.getSocialMediaLink());

	    // Save updated contact
	    contactRepo.save(updatedContact);
	
	    
	    return List.of(updatedContact);
	}

	public <T> void deleteDetailsAsPerEntity(PortfolioEntity entity) {

		portfolioRepo.delete(null);
	}
}
