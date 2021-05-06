module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  
  ifCond: (v1, operator, v2) => {
    switch (operator) {
        case '==':
            return (v1 == v2) ? true : false;
        case '===':
            return (v1 === v2) ? true : false;
        case '!=':
            return (v1 != v2) ? true : false;
        case '!==':
            return (v1 !== v2) ? true : false;
        case '<':
            return (v1 < v2) ? true : false;
        case '<=':
            return (v1 <= v2) ? true : false;
        case '>':
            return (v1 > v2) ? true : false;
        case '>=':
            return (v1 >= v2) ? true : false;
        case '&&':
            return (v1 && v2) ? true : false;
        case '||':
            return (v1 || v2) ? true : false;
    }
  }
};

