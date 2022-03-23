function getMoneySpent(keyboards, drives, b) {
  const cheepKeyboards = []
  const cheepDrives = []
  for(let i = 0; i < keyboards.length; i++){
    if(keyboards[i] < b){
      cheepKeyboards.push(keyboards[i])
    }
  }
  for(let j = 0; j < drives.length; j++){
    if(drives[j] < Math.max(cheepKeyboards)){
      cheepDrives.push(drives[j])

    }
  }
  if(cheepKeyboards.length === 0 ||cheepDrives.length === 0 || b < Math.max(cheepKeyboards) + Math.max(cheepDrives)){
    return -1
  } else {
    return Math.max(cheepKeyboards) + Math.max(cheepDrives)
  }
}