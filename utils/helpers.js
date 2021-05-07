module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
    get_day: (date) => {
    var currentDate = new Date();
    var compareDate = new Date(date);
    var Difference_In_Time = compareDate.getTime() - currentDate.getTime();
    var days = Difference_In_Time / (1000 * 3600 * 24);
    days = parseInt(days) + "days";
    return date ? days : "-";
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
  