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
@RequestMapping(value="/portfolio")//,method={RequestMethod.GET, RequestMethod.POST}
public class PortfolioController {
	
	@Autowired
	private PortfolioService portfolioService;
	
	@GetMapping("/details")
	public ResponseEntity<List<PortfolioEntity>> getMyDetails(){
		
		 List<PortfolioEntity> portfolio = portfolioService.getMyDetailsService();
		 
		return ResponseEntity.ok(portfolio);
		 
	}
	
	@PostMapping("/addMyDetails")
	public ResponseEntity<PortfolioEntity> addMyDetails(@RequestBody PortfolioEntity portfolio){		
		
		PortfolioEntity portFolioEntity = portfolioService.addMyDetailsService(portfolio);

		return new ResponseEntity<>(portFolioEntity,HttpStatus.CREATED);
		
	}

	@PutMapping(value="/updateMyDetails/{id}")
	public ResponseEntity<PortfolioEntity> updateMyDetails(@PathVariable int id, @RequestBody PortfolioEntity portfolio){
		
		try {
			portfolio = portfolioService.updateEmployeePersonalDetailsService(id, portfolio);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return ResponseEntity.ok(portfolio);
		
	}
	
	@DeleteMapping("/deleteMyDetails")
	public void removeDetails(PortfolioEntity entity){		
		
		//Optional<PortfolioEntity> entity = this.portfolioService.fi
		
	}
}
