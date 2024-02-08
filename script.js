function fibonacci(num) {
// your code here
	
    if(num<0){
		return "Invalid Number"
	}
	else if(num==1){
		return 0
	}
	else if(num==2){
		return 1
	}
	else{
		 return fibonacci(num-1)+fibonacci(num-2)
	}

}

module.exports = fibonacci;
