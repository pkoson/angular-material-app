const config = {
      'apiUrl':'http://localhost:3000/api/v1', //main api url
      'orderBy':'name',                     //default sort method
      'pageLimit': '10',                    //default limit items for pagination
      'currencies': ['PLN', 'USD', 'EUR', 'GB'],    // Currencies list
      'contract': ['faktura', 'praca', 'praca+PKUPA', 'zlecenie', 'zlecenie bez ZUS', 'dzieło (20%)', 'dzieło (50%)']
    };
export default config;
