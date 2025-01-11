package com.example.myPortfolio.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name="careeraspects" ,schema="public")
public class CareerDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id; 

	private String careeraim;
	
	private String passion;
	
	private String previouscompany;
	
	private String qualification;
	
	private List<String> skills;
	
	 @ManyToOne
	 @JoinColumn(name = "userid")
	@JsonIgnore
	 private PortfolioEntity portfolioEntity ;

	public CareerDetails() {
		super();
	}


	public CareerDetails(Integer id,String careeraim, String passion, String previouscompany,
			String qualification, List<String> skills, PortfolioEntity portfolioEntity) {
		super();
		this.id = id;
		this.careeraim = careeraim;
		this.passion = passion;
		this.previouscompany = previouscompany;
		this.qualification = qualification;
		this.skills = skills;
		this.portfolioEntity = portfolioEntity;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCareeraim() {
		return careeraim;
	}

	public void setCareeraim(String careeraim) {
		this.careeraim = careeraim;
	}

	public String getPassion() {
		return passion;
	}

	public void setPassion(String passion) {
		this.passion = passion;
	}

	public String getPreviouscompany() {
		return previouscompany;
	}

	public void setPreviouscompany(String previouscompany) {
		this.previouscompany = previouscompany;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public List<String> getSkills() {
		return skills;
	}

	public void setSkills(List<String> skills) {
		this.skills = skills;
	}

	public PortfolioEntity getPortfolioEntity() {
		return portfolioEntity;
	}

	public void setPortfolioEntity(PortfolioEntity portfolioEntity) {
		this.portfolioEntity = portfolioEntity;
	}

	
}
