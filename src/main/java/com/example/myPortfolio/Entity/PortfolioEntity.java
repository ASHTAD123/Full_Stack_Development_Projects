package com.example.myPortfolio.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "personaldetails", schema = "public")
public class PortfolioEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userid;

	private String age;

	private String gender;

	private String name;

	@OneToMany(mappedBy = "portfolioEntity", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ContactDetails> contactDetails;

	@OneToMany(mappedBy = "portfolioEntity", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<CareerDetails> careerDetails;

	public PortfolioEntity() {
		super();
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<ContactDetails> getContactDetails() {
		return contactDetails;
	}

	public void setContactDetails(List<ContactDetails> contactDetails) {
		this.contactDetails = contactDetails;
	}

	public List<CareerDetails> getCareerDetails() {
		return careerDetails;
	}

	public void setCareerDetails(List<CareerDetails> careerDetails) {
		this.careerDetails = careerDetails;
	}

}
