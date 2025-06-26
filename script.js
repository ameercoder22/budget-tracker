let categories = [];
let amounts = [];

const ctx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: categories,
    datasets: [{
      label: 'Expenses',
      data: amounts,
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
        '#9966FF', '#FF9F40'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false
  }
});

function addExpense() {
  const category = document.getElementById('category').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (category && !isNaN(amount)) {
    categories.push(category);
    amounts.push(amount);
    expenseChart.update();
    
    // Clear inputs
    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
  } else {
    alert("Please enter a valid category and amount.");
  }
}
