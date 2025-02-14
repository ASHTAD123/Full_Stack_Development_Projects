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
import com.example.myPortfolio.Repo.CareerRepo;
import com.example.myPortfolio.Repo.ContactRepo;
import com.example.myPortfolio.Repo.PortfolioRepo;

@Service
@Transactional
public class PortfolioService {

	@Autowired
	private PortfolioRepo portfolioRepo;

	@Autowired
	private ContactRepo contactRepo;

	@Autowired
	private CareerRepo careerRepo;

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

			portfolioRepo.save(portfolioEntity);
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

				if (portfolio.getAge() != null && !portfolio.getAge().isEmpty())
					updatedPortfolioEntity.setAge(portfolio.getAge());
				else
					updatedPortfolioEntity.setAge(savedPortfolioEntity.getAge());

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

	public List<ContactDetails> updateContactDetails(String name, List<ContactDetails> contactDetails)
			throws Exception {

		if (contactDetails == null || contactDetails.isEmpty())
			throw new Exception("Provided contact details list is null or empty");

		List<ContactDetails> savedContactDetails = contactRepo.findContactDetailsByName(name);

		if (savedContactDetails == null || savedContactDetails.isEmpty()) {
			throw new Exception("No contact details found for name : " + name);
		} else {
			System.out.println(savedContactDetails);
		}

		ContactDetails updatedContact = savedContactDetails.get(0);
		ContactDetails newContact = contactDetails.get(0);

		if (newContact.getContactNumber() != null && !newContact.getContactNumber().isEmpty())
			updatedContact.setContactNumber(newContact.getContactNumber());
		else
			updatedContact.setContactNumber(savedContactDetails.get(0).getContactNumber());

		if (newContact.getEmail() != null && !newContact.getEmail().isEmpty())
			updatedContact.setEmail(newContact.getEmail());
		else
			updatedContact.setEmail(savedContactDetails.get(0).getEmail());

		if (newContact.getName() != null && !newContact.getName().isEmpty())
			updatedContact.setName(newContact.getName());
		else
			updatedContact.setName(savedContactDetails.get(0).getName());

		if (newContact.getSocialMediaLink() != null && !newContact.getSocialMediaLink().isEmpty())
			updatedContact.setSocialMediaLink(newContact.getSocialMediaLink());
		else
			updatedContact.setSocialMediaLink(savedContactDetails.get(0).getSocialMediaLink());

		// Spring Data JPA automatically generates an UPDATE query when saving an
		// existing entity.
		// so no need of save()

		return List.of(updatedContact);
	}

	public List<CareerDetails> updateCareerDetails(String name, List<CareerDetails> careerDetails) throws Exception {

		if (careerDetails == null || careerDetails.isEmpty())
			throw new Exception("Provided Career Details list is null or empty");

		System.out.println("Named passed by user : " + name);

		// From DB
		List<CareerDetails> savedCareerDetails = careerRepo.findCareerDetailsByName(name);

		if (savedCareerDetails == null || savedCareerDetails.isEmpty()) {
			throw new Exception("No career details found for name: " + name);
		} else {
			System.out.println(savedCareerDetails);
		}

		// Storing DB values to new object which is to be returned
		List<CareerDetails> updatedCareerDetails = new ArrayList<CareerDetails>();

		// Update first record
		CareerDetails updatedCareer = savedCareerDetails.get(0);
		CareerDetails newCareer = careerDetails.get(0);

		if (newCareer.getCareeraim() != null && !newCareer.getCareeraim().isEmpty())
			updatedCareer.setCareeraim(newCareer.getCareeraim());
		else
			updatedCareer.setCareeraim(savedCareerDetails.get(0).getCareeraim());

		if (newCareer.getPassion() != null && !newCareer.getPassion().isEmpty())
			updatedCareer.setPassion(newCareer.getPassion());
		else
			updatedCareer.setPassion(savedCareerDetails.get(0).getPassion());

		if (newCareer.getPreviouscompany() != null && !newCareer.getPreviouscompany().isEmpty())
			updatedCareer.setPreviouscompany(newCareer.getPreviouscompany());
		else
			updatedCareer.setPreviouscompany(savedCareerDetails.get(0).getPreviouscompany());

		if (newCareer.getQualification() != null && !newCareer.getQualification().isEmpty())
			updatedCareer.setQualification(newCareer.getQualification());
		else
			updatedCareer.setQualification(savedCareerDetails.get(0).getQualification());

		if (newCareer.getSkills() != null && !newCareer.getSkills().isEmpty())
			updatedCareer.setSkills(newCareer.getSkills());
		else
			updatedCareer.setSkills(savedCareerDetails.get(0).getSkills());

		return List.of(updatedCareer);

	}

}
