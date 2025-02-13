package com.example.myPortfolio.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name = "contactdetails", schema = "public")
public class ContactDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "\"contactId\"")
	public int contactId;

	private String name;

	private String contactNumber;

	private String email;

	private String socialMediaLink;

	@ManyToOne
	@JoinColumn(name = "userid")
	@JsonIgnore
	private PortfolioEntity portfolioEntity;

	 public ContactDetails() {} 
	

	
	public ContactDetails(Integer contactId,String name, String contactNumber, String email,
			String socialMediaLink, PortfolioEntity portfolioEntity) {
		super();
		this.contactId = contactId;
		this.name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.socialMediaLink = socialMediaLink;
		this.portfolioEntity = portfolioEntity;
	}
	
	public void setContactId(Integer contactId) {
		this.contactId = contactId;
	}


	public int getContactId() {
		return contactId;
	}

	public void setContactId(int contactId) {
		this.contactId = contactId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSocialMediaLink() {
		return socialMediaLink;
	}

	public void setSocialMediaLink(String socialMediaLink) {
		this.socialMediaLink = socialMediaLink;
	}

	public PortfolioEntity getPortfolioEntity() {
		return portfolioEntity;
	}

	public void setPortfolioEntity(PortfolioEntity portfolioEntity) {
		this.portfolioEntity = portfolioEntity;
	}

}
