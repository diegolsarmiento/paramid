function piram(num, row=0, level=''){

  // First we check base case: num and row are equal
  if(num === row){
    return;
  }

  // We check case when we call the function again 
  // Parameters change: row + 1
  if(level.length === (2 * num - 1)){
    console.log(level);
    return piram(num, row+1);
  }

  // Logic: Define half and check on the side(s)
  const midpoint = Math.floor((2 * num - 1)/2);
  if((midpoint - row <= level.length) && (midpoint + row >= level.length)){
    level += '#';
  } else {
     level +=' ';
  }
  
  piram(num, row, level);
}

// Example:
piram(5);