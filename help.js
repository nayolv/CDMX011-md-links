const menus = {
    main: `
    Command info:

      validate .............. info validate
      --validate, -v ..... the status http
    
      stats ............ show stadistics for md file
      --stats -s ..... the stadistics from url
    
      help ............... show help menu for a command`,
  }
  
  module.exports = () => { 
    console.log(menus.main)
  }