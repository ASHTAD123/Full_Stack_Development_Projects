package com.example.myPortfolio.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myPortfolio.Entity.CareerDetails;
import com.example.myPortfolio.Entity.ContactDetails;
import com.example.myPortfolio.Entity.PortfolioEntity;
import com.example.myPortfolio.Service.PortfolioService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/portfolio")
public class PortfolioController {
	
	@Autowired
	private PortfolioService portfolioService;
	
	@GetMapping("/details")
	public ResponseEntity<List<PortfolioEntity>> getMyDetails(){	

		return ResponseEntity.ok(portfolioService.getMyDetailsService());	 
	}
	
	@PostMapping("/addMyDetails")
	public ResponseEntity<PortfolioEntity> addMyDetails(@RequestBody PortfolioEntity portfolio){		

		return ResponseEntity.ok(portfolioService.addMyDetailsService(portfolio));
		
	}

	@PutMapping("/updateMyDetails/{id}")
	public ResponseEntity<PortfolioEntity> updateMyDetails(@PathVariable int id, @RequestBody PortfolioEntity portfolio) throws Exception{
		
		try {
			return  ResponseEntity.ok(portfolioService.updateEmployeePersonalDetailsService(id, portfolio));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return  null;
	}
	
	@PutMapping("/updateContactDetails/{name}")
	public List<ContactDetails> updateMyDetails(@PathVariable String name,@RequestBody List<ContactDetails> contactDetails)  throws Exception{	
			
		 return portfolioService.updateContactDetails(name, contactDetails);	
	}
	
	@PutMapping("/updateCareerDetails/{name}")
	public List<CareerDetails> updateMyCareerDetails(@PathVariable String name,@RequestBody List<CareerDetails> careerDetails)  throws Exception{
	
		return portfolioService.updateCareerDetails(name, careerDetails);
	}

}
